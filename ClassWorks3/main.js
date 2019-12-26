const user = {

};

user.firstName = "Anna";
user.lastName = "Syhova";
user.age = 23;

console.log(user);
console.log(user.firstName);

// arr

let arr = ['Eva', 'Ann', 'Ia'];

// console.log(arr);

arr[3] = '123';
arr[arr.length - 1] = '456';
arr.push('789'); // доюавить в конец

user.pushVal = (val) => {
    user.surname = val;
}

console.log(arr);

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[i]);
} // end

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

console.log('------------of------------');

for (let value of arr) {
    // console.log(key);
    console.log(value);
}

let arr2 = [];
for (let i = 0; i <= 10; i++) {
    arr2.push(i);
}
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
    // arr2.push(i + 10);
    arr2[i] += 10; 
}
console.log(arr2);

for (let key in arr2) {
    arr2[key] += 10;
}
console.log(arr2);

console.log('------------CAT------------');

let cat = {
    name: "Tom",
    age: "2 month",
    breed: "Pers",
    isMale: true,
    legs: 4,
    sayMoor: () => {
        return 'moor';
    }
}

let getCat = () => {
    let result = "";
    for(let key in cat) {
        
        let foo = cat[key];
        if (typeof foo == "function") {
            result += key + ' : '+ foo() + ', ';
        }
        result += key + ' '+ cat[key] + ', ';
    }
    console.log(result);
}

getCat(cat);









