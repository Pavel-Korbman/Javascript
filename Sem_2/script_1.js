/* Создать переменную и спросить у пользователя “Ваш возраст” 
Вывести на экран текст. Вам “возраст пользователя” лет 
Спросить у пользователя его имя 
Вывести на экран, Добро пожаловать на сайт “Имя пользователя” */

// let userAge = Number(prompt('Ваш возраст:'));
// alert((userAge > 0) ? `Вам ${userAge} лет` : 'Введите цифры');
// let userName = prompt('Ваше имя:');
// alert((userName !== '') ? `Добро пожаловать на сайт ${userName}` : 'Не корректное');

/*
1. Найти остаток от деления двух переменных
a. let a = 13;
b. let b = 5;
2. Что выведет на экран (Сначала проговорите, потом проверьте)
a. let a;
b. alert(a);
3. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert('abc' * 3);
4. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert( 1 / 0);
b. alert(-1 / 0);
5. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert('2' * '3');
*/

// let a = 13;
// let b = 5;
// console.log(13 % 5); // 3

// let a;
// alert(a); // undefined

// alert('abc' * 3); // NaN

// alert( 1 / 0); // Infinity
// alert(-1 / 0); // -Infinity

// alert('2' * '3'); // 6

/* 
1. Сознательно допустите ошибку в вашем коде. Убедитесь, что
ошибка появляется в консоли. Определите, в какой строке кода
случилась ошибка.
2. Необходимо вывести в консоль результат суммы данных
переменных
a. let a = '2';
b. let b = '3';
3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль
вывести текст
a. Сумма чисел равна “результат”
b. Разность чисел равна “результат”
c. Произведение чисел равно “результат”
d. Частное чисел равно “результат”
e. Остаток от деления чисел равен “результат”
*/

//let a = Numer('3'); //script_1.js:58 Uncaught ReferenceError: Numer is not defined

// let a = '2';
// let b = '3';
// console.log(a+b); // 23

// let a = Number(prompt('Первое число:'));
// let b = Number(prompt('Второе число:'));
// console.log(`Сумма чисел равна ${a + b}`);
// console.log(`Разность чисел равна ${a - b}`);
// console.log(`Произведение чисел равно ${a * b}`);
// console.log(`Частное чисел равно ${a / b}`);
// console.log(`Остаток от деления чисел равен ${a % b}`);

/* 
1. Не запуская код, определите, что выведется в консоль:
a. console.log(String(true));
2. Не запуская код, определите, что выведется в консоль:
a. console.log('a' + true);
3. Не запуская код, определите, что выведется в консоль:
a. console.log(Number(true));
4. Не запуская код, определите, что выведется в консоль:
a. console.log(true + 1);
5. Не запуская код, определите, что выведется в консоль:
a. console.log(true + true)
6. Не запуская код, определите, что выведется в консоль:
a. console.log(true - true)
7. Не запуская код, определите, что выведется в консоль:
a. console.log( String(true) + Number(true) ) 
*/

// console.log(String(true)); // true
// console.log('a' + true); // atrue

// console.log(Number(true)); // 1

// console.log(true + 1); // 2

// console.log(true + true); // 2

//console.log(true - true); // 0

//console.log( String(true) + Number(true) ) // true1

/* 
1. Пользователь с клавиатуры вводит число, Необходимо создать
условный оператор который
a. Выводит в консоль “Число больше 5”
b. Выводит в консоль “Число меньше 5”
c. Выводит в консоль “Число равно 5”
2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
выведите соответствующее сообщение.
3. Пользователь с клавиатуры вводит 2 числа
a. Необходимо найти какое из двух чисел минимальное
4. Пользователь с клавиатуры вводит число, Проверьте, что данная
переменная больше нуля и меньше 15. 
*/

// let a = Number(prompt('Введите число'));
// if (a === 5) {
//     console.log('Число равно 5');
// } else {
//     console.log((a < 5) ? 'Число меньше 5' : 'Число больше 5');
// }

// let test1 = 2;
// let test2 = 20;
// console.log((test1 === test2) ? 'равны' : 'не равны');

// let a = Number(prompt('Первое число:'));
// let b = Number(prompt('Второе число:'));
// if (a === b) {
//     console.log('Числа равны');
// } else {
//     console.log((a < b) ? `Число ${a} - минимальное`  : `Число ${b} - минимальное`);
// }

let a = Number(prompt('Введите число^'));
alert((a>0 && a<15) ? 'Да' : 'Нет');













