const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each non-premium products using function chaining
//Write code here

console.log(" | Product Name​ |   Stock​   |");

let gucci = products.filter(item => {
    return item.productName.startsWith("Gucci Round Bucklet Belt");
}).filter(products => {
    return products.price <= 300;
}).reduce((acc) => {
    return ++acc;
}, 0);

console.log("Gucci Round Bucklet Belt | ", gucci,"|");

let Smiley = products.filter(item => {
    return item.productName.startsWith("Smiley");
}).filter(products => {
    return products.price <= 300;
}).reduce((acc, item) => {
    return ++acc;
}, 0);
console.log("Smiley T-Shirt |", Smiley,"|");

let Shinie = products.filter(item => {
    return item.productName.startsWith("Shinie");
}).filter(products => {
    return products.price <= 300;
}).map(item => {
    return item.price <= 300;
})
.reduce((acc, item) => {
    return ++acc;
}, 0);
console.log("Shinie Nail Paint |", Shinie, "|");

let Esbeda = products.filter(item => {
    return item.productName.startsWith("Esbeda");
}).filter(products => {
    return products.price <= 300;
}).reduce((acc, item) => {
    return ++acc;
}, 0);
console.log("Esbeda Wallet  |", Esbeda, "|");
