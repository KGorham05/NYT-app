// research the API
// register for an API key
// understand what formate the URL shoudl look like to make an article call
// console.log various fields

// articlesearch example
// articlesearch.json?q={query}&fq={filter}

// step 2
// Create the AJAX call needed to retrieve data then console.log all of the relevant fields.

// Incorporate various “optional parameters” (hard code these in initially).

// Take note of various “bugs” that appear with certain searches.


// how do we filter by year
// and filter # of responses

var searchTerm = "election"; // get value from html input field
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=HNBXqLcwTsNtaL7CekrKGlt637nncYe1";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);

});