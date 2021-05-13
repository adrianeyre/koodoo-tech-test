interface IBalance {
  amount: number;
}

interface IAccount {
  balance: IBalance;
}

interface IBalanceHistory {
  monthNumber: number;
  account: IAccount;
}

export default interface IAccountBalanceHistory extends Array<IBalanceHistory>{};
