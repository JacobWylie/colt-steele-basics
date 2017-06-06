somObject.friends[0].name

let movieDB = [
	{
		title: "In Bruges",
		rating: "5 Stars",
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: "4.5 Stars",
		hasWatched: false
	},
	{
		title: "Mad Max",
		rating: "5 Stars",
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: "3.5 Stars",
		hasWatched: false
	},	
]

const printMovie = () => {
	if(movieDB[i].hasWatched === true) {
		console.log(`I have seen ${movieDB[i].title} - ${movieDB[i].rating}`);
	} else {
		console.log(`I have not seen ${movieDB[i].title} - ${movieDB[i].rating}`);
	}
}

for(i = 0; i < movieDB.length; i++) {
	printMovie();
}