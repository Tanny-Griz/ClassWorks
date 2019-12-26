// let a = 5;
// let b = 6;
// if ( a == b) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const user1.choise = prompt('user1 enter choise: ');
// console.log(user1.choise);
// const user2.choise = prompt('user2 enter choise: ');
// console.log(user2.choise);
let user1 = {
    name: "",
    choise: "",
}

let user2 = {
    name: "",
    choise: "",
}

user1.name = prompt('user1 enter name: ');
user2.name = prompt('user2 enter name: ');


user1.choise = prompt(user1.name + ' enter choise:');
user2.choise = prompt(user2.name + ' enter choise:');

console.log(user1, user2);

const checkOnEmptyFields = (u) => {
    if (!u.name.length) {
        console.log(u + ' name empty');
        u.name = prompt('enter name pls!');
    }
    if(!u.choise.length) {
        console.log(u + ' value is empty');
        u.choise = prompt(u + ' enter choise: ');
    }
}

checkOnEmptyFields(user1);
checkOnEmptyFields(user2);


if (user1.choise == 'k' && user2.choise == 'n' ||
    user1.choise == 'n' && user2.choise == 'b' ||
    user1.choise == 'b' && user2.choise == 'k') {
    console.log(`${user1.name} won`);
} else if (user1.choise == 'k' && user2.choise == 'k' ||
    user1.choise == 'n' && user2.choise == 'n' ||
    user1.choise == 'b' && user2.choise == 'b') {
    console.log('Draw');
} else {
    console.log(`${user2.name} won`);
}

// ------------


