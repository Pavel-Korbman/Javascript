/*
Создайте функцию, которая возводит переданное число в куб. Необходимо использовать эту функцию для вычисления и вывода в консоль результата 2^3 + 3^3
*/

let thirdDegree = (number) => number ** 3;
function printRes1() {
    console.log(`2^3 + 3^3 = ${thirdDegree(2) + thirdDegree(3)}`);
}

/*
Создайте функцию, которая вычисляет 13% от данного числа и выводит в консоль текст: "Размер заработной платы за вычетом налогов равен “значение”".
*/
let salaryAfterTax = (salary) => salary * 0.87;

function printRes2() {
    let salary = Number(prompt('Зарплата: '));
    (salary > 0) ? console.log('Размер заработной платы за вычетом налогов равен ' + salaryAfterTax(salary)) : console.log('Нужно ввести цифры');
}

/*
Пользователь вводит с клавиатуры 3 числа. Создайте функцию, которая определяет максимальное значение среди этих чисел.
*/

function maxOfThree(a, b, c) {
    let max = a;
    if (b > max) { max = b; }
    if (c > max) { max = c; }
    return max;
}

function printRes3() {
    console.log(maxOfThree(prompt('Первое число:'), prompt('Второе число:'), prompt('Третье число:')) + '- max');
}

/*
Реализуйте четыре функции, каждая из которых выполняет одну из следующих операций с двумя числами: 1. Сложение 2. Вычитание 3. Умножение 4. Деление Функции должны возвращать результат операции.
*/

let summ = (a, b) => a + b;
let subtraction = (a, b) => a - b;
let multi = (a, b) => a * b;
let division = (a, b) => b !== 0 ? a / b : 'На 0 нельзя делить';

function printSumm() {
    console.log(summ(Number(prompt('Первое число:')), Number(prompt('Второе число:'))));
}
function printSub() {
    console.log(subtraction(Number(prompt('Первое число:')), Number(prompt('Второе число:'))));
}

function printMulti() {
    console.log(multi(Number(prompt('Первое число:')), Number(prompt('Второе число:'))));
}

function printDiv() {
    console.log(division(Number(prompt('Первое число:')), Number(prompt('Второе число:'))));
}