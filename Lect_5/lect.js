/*
const car1 = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249
};
console.log(car1.make);
*/

/*
const product = {
    name: 'table',
    prise: 2000,
    color: 'white',
    img: 'img_001.png',
    count: 3,
    buy: function () {
        if (product.count > 0) {
            console.log('Вы купили стол');
            product.count--;
        } else { console.log('Товар закончился'); }
    }
}

*/

// product.link='products/link-name.html';

// delete product.color;

// product.link='catalog/link-name.html';

// let productSale=product;
//console.log(productSale);

// productSale.prise=1500;

//console.log(product);
//product.buy();


/*

const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0,
    engineIsStarted: false,
    startEngine: function () {
        this.engineIsStarted = true;
    },
    stopEngine: function () {
        this.engineIsStarted = false;
    },
    haveRoadTrip: function (distance) {
        if (this.engineIsStarted) {
            this.odometer += distance;
        } else {
            alert("Сначала запустите двигатель!");
        }
    }
};
*/

const product = {
    name: 'table',
    prise: 2000,
    color: 'white',
    img: 'img_001.png',
    count: 3,
    userRegistred: false,
    registration: function () {
        this.userRegistred = true;
        console.log('Вы зарегистрированны');
    },
    countProduct: function () {
        if (this.count > 0) {
            console.log('Вы можете купить стол');
        } else { console.log('Товар закончился'); }
    },
    buy: function () {
        if (this.userRegistred) {
            console.log('Cтол в корзине');
            this.count--;
        } else { console.log('Надо зарегистрироваться'); }
    }
}

// Цикл для вывода ключей и значений объекта

// for (const key in product) {
//     console.log(key + ": " + product[key]);
// }

// Объекты в объектах

const group1 = {
    "Ivanov": {
        practicePlace: "ldu-1",
        practiceTime: 56
    },
    "Petrov": {
        practicePlace: "kamaz",
        practiceTime: 120
    },
    "Sidorov": {
        practicePlace: "ldu-1",
        practiceTime: 148
    },
    "Belkin": {
        practicePlace: "GosDZU",
        practiceTime: 20
    },
    "Avdeev": {
        practicePlace: "LPK",
        practiceTime: 160
    }
}


// Преобразование объекта в массив

//const object = { 1: 'Ivanov', 2: 'Petrov' };

// Object.keys(<исходный объект>) - позволяет получить из объекта все его ключи первого уровня и положить их в массив

const group1List = Object.keys(group1);
console.log(group1List); // ['Ivanov', 'Petrov', 'Sidorov', 'Belkin', 'Avdeev']

// Object.values(<исходный объект>) - позволяет получить значения из объекта в виде массива.

const group1Practics = Object.values(group1);
console.log(group1Practics); // [{practicePlace: 'ldu-1', practiceTime: 56}, {…}, {…}, {…}, {…}]

// Object.entries(<исходный объект>) - позволяет получить из объекта как ключи, так и значения в виде одного массива массивов

const group1PracticsList = Object.entries(group1);
console.log(group1PracticsList); // [['Ivanov', {practicePlace: 'ldu-1', practiceTime: 56}], Array(2), Array(2), Array(2), Array(2)]


// Работа с объектами и функции высшего порядка

// map  
// filter 
// reduce 
// some 
// find