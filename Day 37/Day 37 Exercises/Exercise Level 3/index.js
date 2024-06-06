// //solution 1

function personAccount() {
    let firstName= 'Morufat';
    let lastName = 'Lamidi';
    let incomes = {
        salary: 200000,
        freelancing: 600000,
        consulting: 1000000
    }
    let expenses= {
        rent: 450000,
        feeding: 50000,
        data: 20000,
        transportation: 2000
    }

    function totalIncome(){
        let totalIncome = 0;
        for(const income in incomes){
            totalIncome += incomes[income];
        }
        return totalIncome;
    }

    function totalExpenses(){
        let totalExpenses = 0;
        for(const expense in expenses){
            totalExpenses += expenses[expense];
        }
        return totalExpenses;
    }

    function accountInfo(){
        let totalIncomeValue = totalIncome();
        let totalExpenseValue = totalExpenses();
        let accountBalance = totalIncomeValue - totalExpenseValue;
        let result = `${firstName} ${lastName} has a total Income of ${totalIncomeValue} after deducting her total expenses of ${totalExpenseValue}, she is left with ${accountBalance} per month`;
        return result;
    }

    return {
        firstName: firstName,
        lastName: lastName,
        incomes: incomes,
        expenses: expenses,
        totalIncome: totalIncome,
        totalExpenses: totalExpenses,
        accountInfo: accountInfo
    };
}

const innerFunction = personAccount();
console.log(innerFunction.totalIncome()); 
console.log(innerFunction.totalExpenses()); 
console.log(innerFunction.accountInfo()); 




