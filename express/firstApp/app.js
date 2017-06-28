const express = require("express"),
	  app = express();

//  '/' => "Hi there!"
app.get("/", (req, res) => {
	res.send("Hi There!");
})

//  '/bye' => "Goodbye!"
app.get("/bye", (req, res) => {
	res.send("Goodbye!");
})

// '/dog' => "Meow!"
app.get("/dog", (req, res) => {
	console.log('Someone is checking out the dog!')
	res.send('Meow!');
})

// Params
app.get("/:whatever/comments/:id/:stuff", (req, res) => {
	res.send(`Welcome to ${req.params.whatever}/comments/${req.params.id}/${req.params.stuff}`);
})

// handles all other GET requests
app.get("*", (req, res) => {
	res.send("Uh Oh, go back!");
})

// Tell Express to listen for requests (start server)
app.listen(3000, () => {
	console.log('Server is running on localhost:3000')
})