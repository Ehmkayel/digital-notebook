//solution 1

const personAccount = {
    firstName: 'Ramadan',
    lastName: 'Lamidi',
    incomes: [],
    expenses: [],

    totalIncome() {
        let totalIncomeGenerated = 0;
        for (const income of personAccount.incomes) {
            totalIncomeGenerated += income.amount;
        }
        return totalIncomeGenerated;
    },

    totalExpense() {
        let totalExpensesAccumulated = 0;
        for (const expense of personAccount.expenses) {
            totalExpensesAccumulated += expense.amount;
        }
        return totalExpensesAccumulated;
    },

    addIncome(amount, description) {
        personAccount.incomes.push({ amount, description });
    },

    addExpense(amount, description) {
        personAccount.expenses.push({ amount, description });
    },

    accountBalance() {
        let balance = personAccount.totalIncome() - personAccount.totalExpense();
        return balance;
    },

    personAccountDetails() {
        let userDetail = `${personAccount.firstName} ${personAccount.lastName}: Total Income: ${personAccount.totalIncome()}, Total Expense: ${personAccount.totalExpense()}, Account Balance: ${personAccount.accountBalance()}`
        return userDetail;
    }
};

personAccount.addIncome(1500000, 'Salary');
personAccount.addIncome(100000, 'internship');
personAccount.addExpense(255000, 'data');
personAccount.addExpense(25000, 'transportation');

const totalIncome = personAccount.totalIncome();
const totalExpenses = personAccount.totalExpense();
const profits = totalIncome - totalExpenses;

console.log(personAccount.personAccountDetails());
console.log(totalIncome)
console.log(totalExpenses)
console.log(profits)

//solution 2


  