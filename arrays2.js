let todos = [];

const todoList = () => {
	let input = prompt("what would you like to do");
	if(input === "list") {
		console.log(todos);
		todoList();
	} else if (input === "new") {
		todos.push(prompt("add item"));
		todoList();
	} else if (input === "quit") {
		alert('have a good one');
	} else {
		todoList();
	}	
}