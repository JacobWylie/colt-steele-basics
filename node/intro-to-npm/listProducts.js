var faker = require('faker');

console.log('====================');
console.log('WELCOME TO MY SHOP!')
console.log('====================');
for (i = 0; i < 10; i++) {
	console.log(faker.fake("Product Name: {{commerce.productName}} | Price: {{commerce.price}}"));
}