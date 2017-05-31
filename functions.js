const isEven = num => num % 2 === 0;
const printEven = num => console.log(isEven(num));
printEven(4);
printEven(21);
printEven(68);
printEven(333);

const factorial = num => {
	if(num === 0) {
		return 1;
	}
	return num * factorial(num-1)
}
const printFact = (num) => console.log(factorial(num));
printFact(5);
printFact(2);
printFact(10);
printFact(0);

const kebabToSnake = (str) => str.replace (/\-/g, "_");
const printKebab = (kebab) => console.log(kebabToSnake(kebab))
printKebab("hello-world");
printKebab("dogs-are-awesome");
printKebab("blah");









































