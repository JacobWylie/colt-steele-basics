const express = require('express'),
	  app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
	res.render('index');
})

app.get('/news/:article', (req, res) => {
	let story = req.params.article;
	res.render(`news/story`, {article: story})
})

app.get('/posts', (req, res) => {
	let posts = [
		{title: 'Post 1', author: 'Jimbo'},
		{title: 'Blog Post', author: 'Jamie'},
		{title: 'New News', author: 'Sam'}
	]
	res.render('posts/post', {posts: posts})
})

app.listen(3000, () => {
	console.log('Running on Port:3000');
})