/*
1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел. 
2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных. 
let param1 = 1; 
let param2 = 2; 
let param3 = 3; 
1. Дана фукнция 
function func(num = 5) {
 console.log(num * num); } 
 Расскажите, каким будет результат каждого из вызовов функции. 
 func(2); 
 func(3); 
 func();
 */

function summThree(val1, val2, val3) {
    console.log(Number(val1) + Number(val2) + Number(val3));
}
function getSummThree() {
    console.log(summThree(prompt('Первое число:'), prompt('Второе число:'), prompt('Третье число:')));
}