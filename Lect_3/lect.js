/*Функции*/

function getMaximum(numbers) {   // Именованная функция
    // реализация
}

// function (number) { реализация } // Анонимная функция
    


/*Функциональное выражение*/

const getMaximum = function(numbers) {
    
} // getMaximum - имя функции

const getMaximum = (numbers) => {  
    // реализация
}  // в стиле ES6 (используем в основном когда функция что то возвращает)

let f = (number1, number2) => { return number1 + number2; }

let f1 = number => { return number + 1; } // можно без скобок, если один аргумент

let f2 = number => number + 1; // если в реализации только return

let f3 = () => { return console.log('Привет');; } // скобоки, если нет параметров


/*Параметры по умолчанию (можно вызывать функцию и с аргументом и без*/

let f4 = (param = 5) => console.log(param);

f4(); // 5
f4(10); // 10

const summ = (a,b) => a+b;

console.log(summ(4,5)); // 9
