function helloName(name) {
    console.log('Hello ' + name);
}

// helloName('Павел Корбман');

// let number = 5; 
// function plusOne() {    
//     number ++;    
// }
// plusOne();
// console.log(number); // 6
// plusOne();
// console.log(number); // 7

// let age = Number(prompt('Ваш возраст:'));
// const upFive = val => val + 5;
// alert('Через пять лет вам будет: ' + upFive(age));

const summTwo = (val1, val2) => val1 + val2;

const res = summTwo(5,12);
console.log(res); // 17
console.log(summTwo(10, 23)); //33


const  money = (salary, mounts) => {
    salary=salary*0.87;    
    return salary=salary*mounts;    
}

let salary = Number(prompt('Ваша зарплата: '));
let mounts = Number(prompt('За сколько месяцев: '));
console.log(`За ${mounts} месяца с учётом налога 13% вы получите: ${money(salary, mounts)} руб`);



