const express = require('express'),
	  app = express();



app.get('/', (req, res) => {
	res.send("Hi there, welcome to my assignment!");
})

app.get('/speak/:animal', (req, res) => {
	let animalSounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof"
	}
	let animal = req.params.animal.toLowerCase();
	let voice = animalSounds[animal];

	res.send(`The ${animal} says "${voice}"`);
})

app.get('/repeat/:word/:mulitple', (req, res) => {
	let wordPrint = "";
	let userWord = req.params.word
	let multiplier = Number(req.params.mulitple);
	for (i = 0; i < multiplier; i++) {
		wordPrint += `${userWord} `;
	}
	res.send(`${wordPrint}`);

})

app.get('*', (req, res) => {
	res.send("Wrong Turn");
})

app.listen(3000, () => {
	console.log('listening on 3000')
})