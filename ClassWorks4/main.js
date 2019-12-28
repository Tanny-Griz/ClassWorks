const arrOfUsers = [];

function User({name, surname, age}) {
    this.name = name || 'No name'; 
    this.surname = surname; 
    this.age = age || null;
    this.sayYourName = function() {
        return `My name is ${this.name}`;
    }
    arrOfUsers.push(this);
    this.indexOfUser = arrOfUsers.length - 1;
}

// const userWU = {
//     name: "Vasya",
//     surname: "Samoylow",
//     age: 18,
// }

// const user = new User(userWU);
// const userSecond = new User('Ann', 'Samoylowa', 22);

// console.log("userWU: ", userWU);
// console.log("user: ", user);


// function User2(obj = {}) {
//     this.name = obj.name || 'No name'; 
//     this.surname = obj.surname; 
//     this.age = obj.age || null;
//     this.sayYourName = function() {
//         return `My name is ${this.name}`;
//     }
// }

// function User3({name, surname, age}) {
//     this.name = name || 'No name'; 
//     this.surname = surname; 
//     this.age = age || null;
//     this.sayYourName = function() {
//         return `My name is ${this.name}`;
//     }
// }



// const user = new User(userWU);
const userSecond = new User({
    name: "111eee",
    surname: "erty",
    age: 45,
})


const firstUser = new User ({
    name: "22Vasya",
    surname: "Samoylow",
    age: 18,
})

const user3 = new User ({
    name: "33Vvv",
    surname: "yyyy",
    age: 23,
})

const user4 = new User ({
    name: "444yui",
    surname: "poo",
    age: 33,
})



User.prototype.getAge = function() {
    return this.age;
}

User.prototype.getIndexSecondUser = function() {
    // console.log(arrOfUsers);
    // console.log(this);
    // return this.indexOfUser = arrOfUsers.length + 1; // 6
    // console.log(user4);
    // return this.indexOfUser = arrOfUsers.length + 1;

    const indexSecondUser = this.indexOfUser + 1;
    const user = arrOfUsers[indexSecondUser];
    if (user !== undefined) {
        return user
    }
    return 'user not defined'
}
console.log('next', user3.getIndexSecondUser());

// console.log(firstUser);


User.prototype.getIndexPrevUser = function() {
    // console.log(arrOfUsers);
    // console.log(this);
    // return this.indexOfUser = arrOfUsers.length + 1; // 6
    // console.log(user4);
    // return this.indexOfUser = arrOfUsers.length + 1;

    const indexPrevUser = this.indexOfUser - 1;
    const user = arrOfUsers[indexPrevUser];
    if (user !== undefined) {
        return user
    }
    return 'user not defined'
}
console.log('prev', user4.getIndexPrevUser());

