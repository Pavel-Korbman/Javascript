console.log('Привет!!');
console.log(2==2); // true
console.log('2'==2); // true - js сам приводит типы переменных == - нестрогое равенство

console.log(2===2); // true 
console.log('2'===2); // false === - строгое равенство с учётом типа данных

console.log(2!==5); // true 
console.log(2!=='2'); // true !== - неравенство строгое
console.log(2!='2'); // false с неравенство нестрогое

/*Сообщение с текстом */
alert('Внимание!! Всплывающее предупреждение работает');

/* Вшитый в браузер ввод данных*/
let name = prompt('Введите ваше имя', 'Павел');
console.log(name);
console.log(typeof name);

/* Подтверждение. При подтверждении возвращает true, при отмене false*/
confirm();
