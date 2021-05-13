import IAccountTypeChecker, { IAccountTypeCheckerResult } from './account-type-checker-interface';
import IAccountBalanceHistory from './account-balance-history-interface';

export default class AccountTypeChecker implements IAccountTypeChecker {
  private readonly varyResult = 'A';
  private readonly sameResult = 'B';

  public check = (accountBalanceHistory: IAccountBalanceHistory): IAccountTypeCheckerResult => {
    if (!accountBalanceHistory.length || accountBalanceHistory.length < 3) return;

    const sortedAccountBalanceAmount = this.sortByMonthNumber([...accountBalanceHistory]);

    const accountBalanceAmount = this.getAccountBalanceAmount(sortedAccountBalanceAmount);
    const arrayDifferences = this.getArrayDifferences(accountBalanceAmount);
    const result = this.isDifferenceAllSame(arrayDifferences)
    
    return result ? this.sameResult : this.varyResult;
  }

  private sortByMonthNumber = (accountBalanceHistory: IAccountBalanceHistory): IAccountBalanceHistory => {
    return accountBalanceHistory.sort((a, b) => b.monthNumber - a.monthNumber);
  }

  private getAccountBalanceAmount = (accountBalanceHistory: IAccountBalanceHistory): number[] => {
    return accountBalanceHistory?.map(value => value.account.balance.amount);
  }

  private getArrayDifferences = (arrayOfNumbers: number[]): string[] => {
    return arrayOfNumbers.map((value, index) => (value - arrayOfNumbers[index + 1])?.toFixed(2)).filter(Number);
  }

  private isDifferenceAllSame = (arrayOfNumbers: string[]): boolean => {
    return arrayOfNumbers.length && arrayOfNumbers.every(value => value === arrayOfNumbers[0]);
  }
}
