/*
 Текст задания 
 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию) 
 2. Создайте функцию которая возводит переданное число в квадрат 
 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
 */

function sayHi(name, surname, age) {
    alert(`Привет ${name} ${surname} с возрастом ${age}`);
}
function hiUser() {
    const name = prompt('Ваше имя:');
    const surname = prompt('Ваша фамилия:');
    const age = prompt('Ваш возраст:');
    sayHi(name, surname, age);
}

let squared = (number) => number **2;
function getSquared() {
    alert(squared(prompt('Введите число: ')))
}

let testSign = (number) => (number >= 0) ? '+++' : '---';
function printSign(){
    console.log((testSign(prompt('Введите число: '))));
}











