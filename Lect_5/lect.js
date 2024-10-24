const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249
};
console.log(car.make);

const product = {
    name: 'table',
    prise: 2000,
    color: 'white',
    img: 'img_001.png',
    count: 2,
    buy: function (){
        console.log('Вы купили стол');
    }
}

// product.link='products/link-name.html';

// delete product.color;

// product.link='catalog/link-name.html';

// let productSale=product;
//console.log(productSale);

// productSale.prise=1500;

console.log(product);
product.buy();
