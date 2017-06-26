let object = {
	name: "chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: (x, y) => {
		return x + y;
	}
}

object.add(10, 5); // 15







let comments = {};

comments.data = ["good Job", "Bye", "Lame"];

comments.print = function() {
	this.data.forEach( el => console.log(el))
}
