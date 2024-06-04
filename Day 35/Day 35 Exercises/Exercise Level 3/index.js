//solution 1

const personAccount = {
    firstName: 'Morufat',
    lastName : 'Lamidi',
    incomes: {
        salary: 200000,
        freelancing: 600000,
        consulting: 1000000
    },
    expenses: {
        rent: 450000,
        feeding: 50000,
        data: 20000,
        transportation: 2000
    },

    totalIncome(){
        let totalIncome = 0;
        for(const income in this.incomes){
            totalIncome += this.incomes[income];
        }
        return totalIncome;
    },

    totalExpenses(){
        let totalExpenses = 0;
        for(const expense in this.expenses){
            totalExpenses += this.expenses[expense];
        }
        return totalExpenses
    },

    accountInfo(){
        let totalIncome = this.totalIncome()
        let totalExpense= this.totalExpenses()
        let accountBalance= totalIncome - totalExpense
        let result = `${this.firstName} ${this.lastName} has a total Income of ${totalIncome} after deducting her total expenses of ${totalExpense}, she is left with ${accountBalance} per month`
        return result
    }

}

let personAccountJSON = JSON.stringify(personAccount);
localStorage.setItem('personAccount', personAccountJSON);
let getItem = localStorage.getItem('personAccount');
let parsedObj =  JSON.parse(getItem)

parsedObj.totalIncome = personAccount.totalIncome;
parsedObj.totalExpenses = personAccount.totalExpenses;
parsedObj.accountInfo = personAccount.accountInfo;

console.log(parsedObj.accountInfo());