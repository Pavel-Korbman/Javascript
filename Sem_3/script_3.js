/* 
1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль. 
2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
*/

let squareRoot = (Number) => Math.sqrt(Number);
let summSquareRoot = (a, b) => squareRoot(a) + squareRoot(b);
function printRes() {
    console.log(summSquareRoot(3, 4));
}

let minOfToo = (a, b) => (a < b) ? a : b;
function printMinOfToo() {
    let a = Number(prompt('Первое число:'));
    let b = Number(prompt('Второе число:'));
    alert(minOfToo(a, b) + '- min');
}