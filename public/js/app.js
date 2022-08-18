var restaurant_url = "/restaurant";
var restaurant_array = []; 
var restaurantCount = 0;
var category = "Restaurants";
var currentIndex=0;
var comment_url = "/comment";
var comment_array = []; 
var starBWImage = 'images/grey_star.jpg';
var starImage = 'images/gold_star.png';
var rating = 0;
var translate_url =  'https://pbifhdqua4.execute-api.us-east-1.amazonaws.com/test/translate'

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
