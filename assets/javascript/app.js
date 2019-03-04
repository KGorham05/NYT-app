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
// Separate the filter field name and value with a colon, and surround multiple values with parentheses.
// mod_date:[20020101 TO 20030101]
// and filter # of responses
var startYear = "2001"; // in future grab text from start year form/box
var endYear = "2012"; // in future grab text from end year form/box 
var numOfRecords = 1;  // in future grab text from num of records to retrieve 

var dateRange = "begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

console.log(dateRange);
var searchTerm = $('#search').val();
console.log(searchTerm); // get value from html input field
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + dateRange + "q=" + searchTerm + "&api-key=HNBXqLcwTsNtaL7CekrKGlt637nncYe1";

$(document).on("click", "button", function (event) {

    event.preventDefault();
    
    console.log("in on click event");
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        var articles = response.response.docs
        if (numOfRecords === 1) {
            // # + Title of the article
            console.log(articles[0].headline.main);
            // By: Author of the article 
            console.log(articles[0].byline.original);
            // Section
            console.log()
            // date
            console.log()
            // url
            console.log(articles[0].web_url);
        } else if (numOfRecords === 5) {

        } else if (numOfRecords === 10) {

        } else {
            console.log("something has gone terribly wrong!");
        }
    });


})
