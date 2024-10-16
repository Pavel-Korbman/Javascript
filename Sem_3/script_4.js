/*
1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. 
2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
*/

function daiOfWeek(number) {
    switch (number) {
        case 1: 
        return 'Пон'
        break;
        case 2: return 'Вт';
        case 3: return 'Ср';
        case 4: return 'Чт';
        case 5: return 'Пт';
        case 6: return 'Сб';
        case 7: return 'Вс';
        default: return 'Число не от 1 до 7';
    }
}
function printDai() {
    alert(daiOfWeek(Number(prompt('Номер дня в неделе:'))));
}

function hiTime(name) {
    let hh = new Date().getUTCHours() + 3;
    if (hh > 4 && hh < 12) {
        alert(`Доброе утро ${name} !`);
    } else if (hh >= 12 && hh < 17) {
        alert(`Добрый день ${name} !`);
    } else if (hh >= 17 && hh < 24) {
        alert(`Добрый вечер ${name} !`);
    } else {
        alert(`Доброй ночи ${name} !`);
    }
}

function getHiTime(){
    hiTime(prompt('Ваше имя: '))
}