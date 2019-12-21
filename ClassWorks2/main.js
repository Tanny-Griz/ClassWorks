let a = 8;
let b = "4";

let text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nobis
a consectetur, repellendus illum facilis $window.screen facere quod itaque, repudiandae omnis ad? 
Placeat molestiae quas similique ipsa aut culpa cum quaerat!`;

// console.log(b);
// console.log(a + +b);

let user = { 
    name: 'Tanya', 
    surname: 'Griz',
    age: 30,
    isFamale: true,
    clothes: {
        isHead: true,

    }
}

function getName() {
    console.log(user.name);
}
getName();


const getAge = function() {
    console.log(user.age);
}
getAge();


// foo(); // undef 
// var foo = function() {
//     console.log("123456");
// }

let foo2 = (num1, num2) => {
    // let num1 = undefined;
    // let num2 = undefined;

    console.log(num1 + num2);
}
foo2(1, 5);


let foo3 = (num1, num2) => {
    console.log(num1 * num2);
}
foo3(5, 5);

let foo4 = (num1 = 5, num2 = 6) => {
    console.log(num1 / num2);
}
foo4();
foo4(8, 5);





