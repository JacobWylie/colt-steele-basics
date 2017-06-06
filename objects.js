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

const printMovie = (movieDB) => {
	let watched = " not";
	if(movieDB.hasWatched) {
		watched = "";
	}
	console.log(`You have${watched} seen "${movieDB.title}" - ${movieDB.rating}`)
}

// for(i = 0; i < movieDB.length; i++) {
// 	printMovie();
// }

movieDB.forEach(printMovie);