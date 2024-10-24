// Задание 1  
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов. 
// 2. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве. 
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

/*
const numbers = [1, 2, 3];
for (let i = 0; i < 3; i++) {
    console.log(numbers[i]);
}

console.log(numbers.length);

const liters = ['a', 'b', 'c'];
console.log(liters);
for (let i = 0; i < 3; i++) {
    liters[i] = i + 1;
}
console.log(liters);
*/

// Задание 2 
// 1. Создайте массив с элементами 1, 2 и 3. 
// С помощью оператора ++ увеличьте каждый элемент массива на единицу. 
// 2. Узнайте длину следующего массива: 
// const arr = []; 
// arr[3] = 'a'; 
// arr[8] = 'b'; 
// 3. Пусть дан такой массив: const arr = [1, 2, 3]; 
// Добавьте ему в конец элементы 4 и 5. 
// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

/*

const numbers = [1, 2, 3];
for (let i = 0; i < 3; i++) {
    numbers[i]++;
}
console.log(numbers);
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);

const arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);
console.log(arr1.length);

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2);
arr2.pop();
arr2.pop();
console.log(arr2);
console.log(arr2.length);
*/

// Задание 3
// 1. С помощью цикла for выведите в консоль числа от 11 до 33. 
// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99. 
// 3. С помощью цикла for выведите в консоль числа от 100 до 0. 
// 4. Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого

/*
for (let i=11; i<=33; i++){
    console.log(i);
}
    */
/*
const numbers = [];
for (let i = 11; i <= 33; i++) {
    numbers.push(i);
}
console.log(numbers);

const numbers1 = [];
for (let i = 1; i <= 99; i = i + 2) {
    numbers1.push(i);
}
console.log(numbers1);

const numbers2 = [];
for (let i = 50; i >= 0; i--) {
    numbers2.push(i);
}
console.log(numbers2);


let num = 1;
let count=0;
while(num<=1000){
num=num*3;
count++;
}
console.log(num);
console.log(count);
*/

// Задание 4 
// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10. 
// 2. Найдите сумму четных чисел от 2 до 100. 
// 3. Дан массив const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива. 
// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'. 
// 5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

/*
const arr = [2, 5, 9, 15, 1, 4];
for(i=0;i<arr.length;i++){
    if(arr[i]>3 && arr[i]<10){console.log(arr[i]);}
}
*/

/*
let sum = 0;
for (i = 2; i <= 100; i = i + 2) {
    sum = sum + i;
}
console.log(sum);
*/

/*
const arr = [2, 5, 9, 3, 1, 4];
let sum = arr[0];
for (i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);
*/

/*
let string = '';
for (i = 1; i <= 9; i++) {
    string = string + '-' + i;
} 
string = string + '-';
console.log(string);

let string1 = '-';
for (i = 1; i <= 9; i++) {
    string1 = string1 + i + '-';
}
console.log(string1);
*/

/*
const arr = [2, 5, 9, 0, 3, 1, 4];
let i = 0;
while (arr[i] !== 0) {
    console.log(arr[i]);
    i++;
}

for (let value of arr) {
    if (value !== 0) { console.log(value); }
    else { break; }
}
    */

// Задание 51. 
// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. 
// Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль. 
// 2. С помощью двух вложенных циклов выведите на экран следующую строку: 
// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве. 
// 4. Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// let array = [];
// for (i = 0; i < 10; i++) {
//     array[i] = Math.floor(Math.random() * 10);
// }
// console.log(array);
// for (value of array) {
//     if (value % 2 === 0) {
//         console.log(`Чётнoе в квадрате: ${value ** 2}`);
//     } else if (value % 3 === 0) {
//         console.log(`Кратнoе 3 в кубе: ${value ** 3}`);
//     }
// }

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// summThree =0;
// for (value of arr){
// if(value===3){summThree++};
// }
// console.log(summThree);

let arr =[1, 2, 3, 4, 5];
console.log(arr);
arr.splice(arr.indexOf(2),1);
arr.splice(arr.indexOf(3),1);
console.log(arr);

