const accountTypeChecker = require('./account-type-checker');

describe('Test for function accountTypeChecker', () => {
  describe('should equal "A" when balance varies month by month', () => {
    it('should work if numbers are decreasing', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 0 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 100 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 250 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('A');
    });

    it('should work if numbers are increasing', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 250 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 100 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 0 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('A');
    });

    it('should work with decimals decreasing', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 17.27 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 32.16 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 35.25 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('A');
    });

    it('should work with decimals increasing', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 35.25 } },
          
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 32.16 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 17.27 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('A');
    });

    it('should work for value fluctuations', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 200 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 150 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 200 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('A');
    });

    it('should work for unsorted months', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 1,
          account: { balance: { amount: 150 } },
        },
        {
          monthNumber: 0,
          account: { balance: { amount: 200 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 200 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('A');
    });
  });
  
  describe('should equal "B" when balance amount changes by the same value each month', () => {
    it('should work for decreasing values', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 0 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 100 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 200 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('B');
    });

    it('should work for increasing values', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 200 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 100 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 0 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('B');
    });

    it('should work with decimals', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: { balance: { amount: 71.92 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 135.73 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 199.54 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('B');
    });

    it('should work for unsorted months', () => {
      const accountBalanceHistory = [
        {
          monthNumber: 1,
          account: { balance: { amount: 100 } },
        },
        {
          monthNumber: 0,
          account: { balance: { amount: 0 } },
        },
        {
          monthNumber: 2,
          account: { balance: { amount: 200 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual('B');
    });
  });

  describe('should equal "undefined" with insufficient data', () => {
    it('should work with blank account balances', () => {
      const accountBalanceHistory = [];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual(undefined);
    });

    it('should work with a single account balance', () => {
      const accountBalanceHistory = [
        {
            monthNumber: 0,
            account: { balance: { amount: 0 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual(undefined);
    });

    it('should work with two account balance', () => {
      const accountBalanceHistory = [
        {
            monthNumber: 0,
            account: { balance: { amount: 0 } },
        },
        {
          monthNumber: 1,
          account: { balance: { amount: 100 } },
        },
      ];

      expect(accountTypeChecker(accountBalanceHistory)).toEqual(undefined);
    });
  })
});
