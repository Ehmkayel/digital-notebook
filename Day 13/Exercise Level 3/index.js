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

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(username, email, password){
    let userExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username || users[i].email === email) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        console.log('User already exist, kindly pick a new username.');
    } else {
        let newUser = {
            _id: generateId(),
            username: username,
            email: email,
            password: password,
            createdAt: getTime(),
            isLoggedIn: false
        };
        users.push(newUser);
        console.log('Welcome! account created succesfully.');
    }
}

function generateId() {
    let id = Math.random().toString(16).substr(2, 7);
    return id;
    
}

function getTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month; 
    }
    let day = date.getDate();
    if(day < 10){
        day = '0' + day
    }
    let hours = date.getHours() 
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

console.log(signUp('Ramadan', 'ramadan@gmail.com', 'password123'))
