const express = require('express'),
	  app = express();


app.get('/', (req, res) => {
	res.render('index.ejs');
})

app.get('/news/:article', (req, res) => {
	let story = req.params.article;
	res.render(`news/story.ejs`, {article: story})
})

app.listen(3000, () => {
	console.log('Running on Port:3000');
})