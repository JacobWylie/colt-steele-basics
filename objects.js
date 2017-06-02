const fizzbuzz = (i) => {
	if(i % 15 === 0) {
		return "FizzBuzz";
	} else if (i % 5 === 0) {
		return "Buzz";
	} else if (i % 3 === 0 ) {
		return "Fizz";
	}
	return i.toString();
}

for(i = 0; i <= 50; i++) {
	console.log(fizzbuzz(i));
}