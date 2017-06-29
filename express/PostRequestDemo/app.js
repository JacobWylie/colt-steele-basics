const express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

let friends = ['Tony', 'T-bone', 'Jimbo', "Pierce"];

app.get('/', (req, res) => {
	res.render('home');
})

app.post('/addFriend', (req, res) => {
	let newFriend = req.body.newFriend;
	friends.push(newFriend);
	res.redirect("/friends");
})

app.get('/friends', (req, res) => {
	res.render('friends', {friends: friends});
})

app.listen(3000, () => {
	console.log('App running on port: 3000')
})