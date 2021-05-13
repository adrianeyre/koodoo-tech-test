# Koodoo Software Engineer Technical Assessment 👾

---

## The problem 💻

**Background**:

Consider the following data structure.

```
const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]
```

Account balance history is an array that denotes a monthly track record of the balance in someone's account (or simply put how much money they had left that month!)

Each top level object within the array denotes the running balance value within that particular month.

E.g. in our example above, I can see that someone
started of with a balance of 200 2 months ago, this decreased to 100 the following month, and again to 0 in the final and current month.

## Your Task 👨🏻‍💻

Write a function (JavaScript) such that given a accountBalanceHistory array as an argument, it will categorise the array based on the way that the balance value is changing month by month.

Here's how this might look:

```
const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure 😁 //
  let result;

  return result ? "A" : "B";
};
```

In other words, write a function that returns B when the balance amount goes down by the same value each month or A when it varies month by month.

In our example above, the account balance was originally 200 and decreased to 100, and then decreased again by the **same** amount (100 -> 0). In this case the algorithm should return the string "B" since the decrease was fixed to a value of 100 each month.

## Assumptions Made ✅
- All JSON data is correct and has no missing or additional properties
- Balances of none, one or two have insufficient data and therefore will return `undefined`
- It should work for `whole` and `decimal` values
- To solve Javascripts [floating point arithmetic problem](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) values are rounded to 2dp
- Not to mutate the original `accountBalanceHistory` variable
- The same result should show for all balances increasing and all balances decreasing
- The increment should be increasing **OR** decreasing **NOT** both
- `negative` numbers are not handled

## Scenario Tested 🧪
- Whole numbers increasing
- Whole numbers decreasing
- Decimal numbers increasing
- Decimal numbers decreasing
- Balances increase by x then decrease by x
- Balance increments vary
- Unsorted monthly data
- Empty data array
- One months data
- Two months data

## Running the tests 💻
### Javascript
- Navigate to the folder `javascript`
- Install dependencies `npm ci`
- Run the tests `npm test`

### Typescript
- Navigate to the folder `typescript`
- Install dependencies `npm ci`
- Run the tests `npm test`

## Retrospective 📋
- Normally if I am unsure of what is required, or the acceptance criteria is ambiguous then I would speak to the Product Owner. This was not possible for the technical test, so assumptions were made.

- I wanted to write the solution in both Javascript and Typescript to show different techniques and how it could be achieved in a strongly typed language.