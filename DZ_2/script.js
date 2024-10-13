/*
1. Создайте переменные num1 и num2, значения которых пользователь вводит с клавиатуры. 
2. Проверьте, что переменная num1 меньше или равна 1, а переменная num2 больше или равна 3.
*/
/*
let num1 = parseFloat(prompt('Введите значение для num1:'));
let num2 = parseFloat(prompt('Введите значение для num2:'));
if (num1 <= 1 && num2 >= 3) {
    console.log('Условия выполнены');
}
else { console.log('Условия не выполнены'); } */

/* : Перепишите следующий код с использованием тернарного оператора: */
/*
let test = true; 
if (test === true) { console.log('+++'); } 
else { console.log('---'); } */

let test = true;
console.log(test ? '+++' : '---');

/* В переменной day хранится число от 1 до 31. Определите, в какую декаду месяца попадает это число (первая, вторая или третья декада).*/

let day = 15; 
let decade; if (day >= 1 && day <= 10) { decade = 'первая'; } 
else if (day > 10 && day <= 20) { decade = 'вторая'; } 
else if (day > 20 && day <= 31) { decade = 'третья'; } 
else { decade = 'некорректное число'; }
console.log(`Число ${day} попадает в ${decade} декаду месяца.`);

/* 
1. Получите от пользователя число. 
2. Выведите разряды числа: количество сотен, десятков и единиц.
*/

let number = parseInt(prompt('Введите число:')); 
let units = number % 10; 
let tens = Math.floor((number % 100) / 10); 
let hundreds = Math.floor(number / 100);
console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);