/*Циклы и массивы*/

// Цикл while 
// является примером цикла с предусловием. Это цикл, который выполняется, пока истинно некоторое условие, указанное перед его началом. Поскольку условие проверяется до выполнения самой первой итерации, вполне может не выполниться ни одной итерации, если условие изначально ложно.
/*
while (condition) {
    //Тело цикла 
}

const number = Number(prompt('Введите значение N'));
let i = 1; while (i <= number) {
    console.log(i++);
} */



// Цикл do..while 
// это уже цикл с постусловием, работающий по алгоритму: 
// 1. Выполнение блока операторов. 
// 2. Проверка условия. 
// 3. Выход, если условие ложно.

// Цикл с постусловием — это цикл, в котором условие проверяется после выполнения тела цикла. 
// Отсюда следует, что тело всегда выполняется хотя бы один раз.

/*
let pass = Number(prompt('Введите пароль в числовом формате')); // Приходится запрашивать пароль до цикла
while (pass !== 123) {                                           // Цикл while
    pass = Number(prompt('Введите пароль в числовом формате'));
} */

// Цикл do..while

/*

let pass1;
do {
    pass = Number(prompt('Введите пароль в числовом формате'));
} while (pass !== 123); */


// Цикл for 
//  – это цикл со счётчиком

// for (инициализация; проверка; инкремент) {
//     инструкция
// }
/*
const number1 = Number(prompt('Введите значение N'));
for (let i = 1; i <= number1; i++) {
    console.log(i);
}
*/

