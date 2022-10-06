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

//Find the discounted price fro non-premium products

///Write code here
console.log(products)
let nonPremiumProducts = products.filter(products => products.price < 300)

let output = nonPremiumProducts.map(nonPremiumProducts => nonPremiumProducts.price - (nonPremiumProducts.price * .10) )
console.log(output);

/* console.log("non-premium products with discounted rates:")
for(let i of nonPremiumProducts) {
    i = i.price - (i.price * .10)
    console.log(i.productName +"    "+i);
}
 */
