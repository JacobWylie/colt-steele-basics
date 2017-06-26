let todos = [];

const listTodos = () => {
	console.log(`*****************`);
	todos.forEach((todo, index) => {
		console.log(`${index}: ${todo}`)
	})
	console.log(`*****************`);
	todoList();
}

const newTodos = () => {
	todos.push(prompt("add item"));
	console.log(`Added Todo`)
	todoList();
}

const deleteTodos = () => {
	let indexDelete = prompt("Enter index of item to delete");
	todos.splice(indexDelete, 1);
	console.log(`Deleted Todo`)
	todoList()
}

const todoList = () => {
	let input = prompt("what would you like to do");
	if(input === "list") {
		listTodos();
	} else if (input === "new") {
		newTodos();
	} else if (input === "quit") {
		alert('have a good one');
	} else if (input === "delete") {
		deleteTodos();
	} else {
		todoList();
	}	
}