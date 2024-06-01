//solution 1
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistic {
    constructor(data){
        this.data = data;
    }

    get count(){
        return this.data.length
    }

    get sum(){
        return this.data.reduce((acc, val) => acc + val, 0);
    }

    get min(){
        let currentMin = this.data[0];
        for (let i = 1; i < this.data.length; i++){
          if (this.data[i] < currentMin) {
            currentMin = this.data[i];
          }
        }
        return currentMin;
      }

    get max(){
        let currentMax = this.data[0];
        for (let i = 1; i < this.data.length; i++){
          if (this.data[i] > currentMax){
            currentMax = this.data[i];
          }
        }
        return currentMax;
      }

    get mean(){
        let sum = 0;
        for (let i = 0; i < this.data.length; i++){
          sum += this.data[i];
        }
        return sum / this.data.length;
      }
   
    get median(){
        const sorted = this.data.slice().sort((a, b) => a - b);
        const middleValue = Math.floor(sorted.length / 2);
        if (sorted.length % 2 == 0) {
            return (sorted[middleValue - 1] + sorted[middleValue]) / 2;
        }
        else {
            return sorted[middleValue];
        }
    }

    get mode(){
        const frequency = {};
        this.data.forEach((val) => {
            frequency[val] = (frequency[val] || 0) + 1;
        });

        let modeValue;
        let modeCount = 0;
        for (const val in frequency){
            if (frequency[val] > modeCount){
                modeValue = val;
                modeCount = frequency[val];
            }
        }

        return { mode: Number(modeValue), count: modeCount };
    }

    get range(){
        let minimumValue = this.min
        let maximumValue = this.max
        return maximumValue - minimumValue;
    }

    get variance(){
        const mean = this.mean;
        const sumOfSquares = this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
        return sumOfSquares / this.data.length;
    }
    
    get standardDeviation(){
         return Math.sqrt(this.variance)
    }

    get percentile(){
        const sortedData = this.data.slice().sort((a, b) => a - b);
        const index = (100 / 100) * (sortedData.length - 1);
        const lowerIndex = Math.floor(index);
        const upperIndex = Math.ceil(index);
    
        if (lowerIndex === upperIndex){
            return sortedData[lowerIndex];
        } else {
            const lowerValue = sortedData[lowerIndex];
            const upperValue = sortedData[upperIndex];
            return lowerValue + (upperValue - lowerValue) * (index - lowerIndex);
        }
    }

    get frequencyDistribution(){
        return this.data.reduce((frequency, val) => {
            frequency[val] = (frequency[val] || 0) + 1;
            return frequency;
        }, {});

    
}

}

const statistics = new Statistic(ages);

console.log('Count:', statistics.count); 
console.log('Sum: ', statistics.sum); 
console.log('Min: ', statistics.min); 
console.log('Max: ', statistics.max); 
console.log('Mean: ', statistics.mean); 
console.log('Median: ', statistics.median); 
console.log('Mode: ', statistics.mode); 
console.log('Range: ', statistics.range);
console.log('Variance: ', statistics.variance); 
console.log('Standard Deviation: ', statistics.standardDeviation); 
console.log('Percentile', statistics.percentile)
console.log('Frequency Distribution: ', statistics.frequencyDistribution);


//solution 2

class PersonAccount{
    constructor(firstName, lastName, incomes, expenses){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }

    get totalIncome(){
        let totalIncome = 0;
        for (const income of this.incomes){
            totalIncome += income
        }
        return totalIncome;
    }

    get totalExpense(){
        let totalExpense = 0;
        for (const expense of this.expenses){
            totalExpense += expense
        }
        return totalExpense;
    }

    get accountInfo(){
            return `My account info is fullName: ${this.firstName} ${this.lastName}, and my total income for the month is: ${this.totalIncome}, with an expenses of:${this.totalExpense},and a balance of ${this.accountBalance}`;
    }

    addIncome(income){
        this.incomes.push(income)
    }
 
    addExpense(expense){
     this.expenses.push(expense)
    }
 
    get accountBalance(){
        let totalIncome = this.totalIncome
        let totalExpense = this.totalExpense
        let balance = totalIncome - totalExpense
        return balance;
    }
}

const details = new PersonAccount('Lamidi', 'Morufat',  [15000, 10000, 20000], [10000, 1200, 5000]);
console.log(details.incomes);
console.log(details.expenses);
console.log(details.accountInfo);
console.log(details.accountBalance)




