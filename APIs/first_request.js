var request = require('request');

request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
	if(!error && response.statusCode === 200) {
		let sunsetTime = JSON.parse(body)
		console.log("Today's sunset in Hawaii is at: " + sunsetTime.query.results.channel.astronomy.sunset);
	} else {
		console.log('Whoops');
		console.log('statusCode:', response && response.statusCode);
		console.log('error:', error);
	}
});