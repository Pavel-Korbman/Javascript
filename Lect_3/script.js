console.log('Привет!!');
console.log(2 == 2); // true
console.log('2' == 2); // true - js сам приводит типы переменных == - нестрогое равенство

console.log(2 === 2); // true 
console.log('2' === 2); // false === - строгое равенство с учётом типа данных

console.log(2 !== 5); // true 
console.log(2 !== '2'); // true !== - неравенство строгое
console.log(2 != '2'); // false с неравенство нестрогое

/*Сообщение с текстом */

//alert('Внимание!! Всплывающее предупреждение работает'); 


/* Вшитый в браузер ввод данных*/

// let name = prompt('Введите ваше имя', 'Павел');
// console.log(name);
// console.log(typeof name);


/* Подтверждение. При подтверждении возвращает true, при отмене false*/
 
//confirm();


/* Ветвления */

//let userAnswer = prompt('Зимой и летом одним цветом. Что это? Ответ:');

// if (userAnswer === '') { // == false
//     alert('Вы ничего не ответили');
// }
// else if (userAnswer.toLowerCase() === 'ёлка') {
//     alert('Правильно!');
// } else {
//     alert('Не правильный ответ');
// }

/* Тернарный оператор: (УСЛОВИЕ) ? ДА : НЕТ; */

//(userAnswer.toLowerCase() === 'ёлка') ? alert('Правильно!') : alert('Не правильный ответ');

//alert( (userAnswer.toLowerCase() === 'ёлка') ? 'Правильно!' : 'Не правильный ответ');

//console.log( (userAnswer.toLowerCase() === 'ёлка') ? 'Правильно!' : 'Не правильный ответ');

/* Браузерные события - см. в index.html*/

/* Перевод строки в число и обратно*/

// let password = prompt('Введите пароль из 3 цифр'); // '123'
// password = Number(password); // 123
// password = String(password); // '123'

let age = Number(prompt('Сколько вам лет'));
alert((age < 21) ? 'Доступ закрыт' : 'Доступ открыт');


