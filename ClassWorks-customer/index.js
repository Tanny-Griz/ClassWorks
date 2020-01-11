const arrOfUsers = []
for (let i = 0; i < 50; i++) {
    let fakeData = faker.helpers.createCard()
    arrOfUsers.push(fakeData)
}

// console.log(arrOfUsers);

const arrMounth = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ];

class Customer {
    constructor(customer) {
        // методы вызывающиеся через конструктор, с параметром и в this записывает все что нужно
        this.getCustomersProperties(customer)
    }
    getCustomersProperties(customer) {
        for (let key in customer) {
            this[key] = customer[key]
        }
    }
    getTotalAmount() {
        let totalCount = 0;
        //    return ~~this.accountHistory.reduce(function(a, b){return a + +b.amount;},0);
        for (let {
                amount
            } of this.accountHistory) {
            // console.log(+amount.amount);
            console.log(totalCount += +amount);
        }
        return Math.ceil(totalCount);
        // return ~~totalCount;
    }
    getPostEndParagraph() {
        let arrC = []
        for (let {
                words,
                paragraph
            } of this.posts) {
            arrC.push(words + ': ' + paragraph);
        }
        console.log(arrC);
    }
    getMongth() {
        
        let arrResults = [];

        for (let {
            date,
            amount
        } of this.accountHistory) {
            arrResults.push({
                month: arrMounth[date.getMonth()],
                amount,
            });
        }
        return arrResults
    }

    getMongth2() {
        
        return this.accountHistory.map(item => {
            return {
                amount: item.amount,
                month: arrMounth[item.date.getMongth()]
            }
        })
    }
}



const cust = new Customer(arrOfUsers[1]);
console.log(cust)
console.log(cust.getPostEndParagraph());
console.log(cust.getMongth());