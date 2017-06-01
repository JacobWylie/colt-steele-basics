// For Each

arr.forEach(someFunction)

const printColor = color => console.log(color);
var colors = ['red', 'orange', 'yellow', 'green']

colors.forEach(printColor);

///////////////////////////////
// Exercise 1, printReverse()
///////////////////////////////

// reverseArray = [1,2,3,4];
// for(i=reverseArray.length - 1; i>=0; i--) {
// 	console.log(reverseArray[i]);
// }

// reverseArray2 = ["a", "b", "c", "d"];
// for(i=reverseArray2.length - 1; i>=0; i--) {
// 	console.log(reverseArray2[i]);
// }

const printReverse = (array) => {
	for(i=array.length - 1; i>=0; i--) {
	console.log(array[i]);
	}
} 

printReverse([1,2,3,4])


////////////////////////////
// Exercise 2, isUniform()
////////////////////////////

const isUniform = (array) => {
	for(i=0; i <= array.length; i++) {
		if (array[i] === array[i+1]) {
			return true;
		} else {
			return false;
		}
	}
}

isUniform([1,1,1,1]); //should equal true
isUniform([2,1,1,1]); //should equal false
isUniform(['a','b','p']); //should equal false
isUniform(['b', 'b', 'b']); //should equal true


////////////////////////////
// Exercise 3, sumArray()
////////////////////////////

const sumArray = (array) => {
	let arraySum = 0;
	array.forEach( i => {
		arraySum += i;
	})
	console.log(arraySum)
}

sumArray([1, 2, 3]); //6
sumArray([10, 3, 10, 4]); //27
sumArray([-5, 100]); //95


////////////////////////////
// Exercise 4, max()
////////////////////////////

const max = (array) => {
	let maxNum;
	array.forEach( (i, index) => {
		if (index <= array.length - 1) {
			if (i > array[index+1]) {
				maxNum = i;
			}
		}
	})
	console.log(maxNum);
}

max([1, 2, 3]); //3
max([10, 3, 10, 4]); //10
max([-5, 100]) //100




















