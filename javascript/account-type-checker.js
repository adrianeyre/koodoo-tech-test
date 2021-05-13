const sortByMonthNumber = (accountBalanceHistory) => accountBalanceHistory.sort((a, b) => b.monthNumber - a.monthNumber);

const getAccountBalanceAmount = (accountBalanceHistory) => accountBalanceHistory?.map(value => value.account.balance.amount);

const getArrayDifferences = (arrayOfNumbers) => arrayOfNumbers.map((value, index) => (value - arrayOfNumbers[index + 1])?.toFixed(2)).filter(Number);

const isDifferenceAllSame = (arrayOfNumbers) => arrayOfNumbers.length && arrayOfNumbers.every(value => value === arrayOfNumbers[0]);

const accountTypeChecker = (accountBalanceHistory) => {
    if (!accountBalanceHistory.length || accountBalanceHistory.length < 3) return;

    const sortedAccountBalanceAmount = sortByMonthNumber([...accountBalanceHistory]);

    const accountBalanceAmount = getAccountBalanceAmount(sortedAccountBalanceAmount);
    const arrayDifferences = getArrayDifferences(accountBalanceAmount);
    const result = isDifferenceAllSame(arrayDifferences)

    return result ? 'B' : 'A';
};

module.exports = accountTypeChecker;
