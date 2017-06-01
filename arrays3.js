// Create your own forEach() 

arr = [5, 6, 7, 2, 1, 4];

const myForEach = (arr, func) => {
	for(i=0; i < arr.length; i++) {
		func(arr[i]);
	}
}

myForEach(arr, numbers => {
	console.log(number);
})


///////////////////////////////////////////

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

arr.myForEach(console.log);

// or

arr.myForEach( num => console.log(num * 10));