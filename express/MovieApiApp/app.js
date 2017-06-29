const express = require('express'),
	  app = express(),
	  request = require('request');
app.set('view engine', 'ejs');

// Home Page
app.get('/', (req, res) => {
	res.render('index');
});


// API Results
app.get('/results', (req, res) => {
	request('http://omdbapi.com/?s=michigan&apikey=thewdb', function (error, response, body) {
	if(!error && response.statusCode === 200) {
		let movies = JSON.parse(body); 
		res.render("results", {movies: movies})
	} else {
		// Error Page
		res.redirect('error')
	}
});
})


// All Other Requests go to error page
app.get('*', (req, res) => {
	res.render('error')
})

// Local Dev Server
app.listen(3000, () => {
	console.log('App running on port: 3000');
});