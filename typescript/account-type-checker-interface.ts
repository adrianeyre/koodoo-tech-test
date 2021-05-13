import IAccountBalanceHistory from './account-balance-history-interface';

export type IAccountTypeCheckerResult = 'A' | 'B' | undefined;

export default interface IAccountTypeChecker {
  check(accountBalanceHistory: IAccountBalanceHistory): IAccountTypeCheckerResult;
}
