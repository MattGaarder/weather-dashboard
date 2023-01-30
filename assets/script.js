

// if we make this weather-btn on click, it will take the search input value as the query parameter.


// hypotheticalWeatherObject = {
//    cityName: (coordsObj[0].name) as generated from getCoords() function. But, this has been saved as a data-attribute, which we can recall by saying $(this).data("name"),
//    latLong: {lat: lat,
//     long: long}        
// }


// to-do list:
// make my getCoords function modular, so that the key will be the first part of this function
// i.e. the name of the city: this function will also make it so that the data-name of the button is set as search-input value
// so that in subsequent clicks of the weather button the key will be the data-name, and the value will be the result of an ajax call to the API second getDeets() function.
var apiKey = "6351c18f15de8f5271ba27903fcd1031";

function getCoords() {
    var queryParam = $("#search-input").val();
    // || $(this).attr("data-name");
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + queryParam + "&appid=" + apiKey;
    return $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (coordsObj) {
        // console.log(queryURL);
        // console.log(coordsObj);
        // console.log(coordsObj[0].name);
        var lat = coordsObj[0].lat
        var long = coordsObj[0].lon
        // console.log(lat);
        // console.log(long);
        // create a button and append it to the #history div- this button will have data-name be coordsObj[0].name
        // I also need to add a class to each button so that I can add an event listener on all buttons with the class .weather-btn
        var cityButton = $("<button>");
        cityButton.addClass("weather-btn");
        cityButton.attr("data-name", coordsObj[0].name);
        cityButton.text(coordsObj[0].name);
        var history = $("#history");
        history.append(cityButton);
        
        // console.log(latLong.lat);
        

        
        // Question: Is this necessary- how to pass results from one call to another?
        // How to return multiple values?
        // How to install extensions?
        // How do arrow functions work, in the way they operate with "this"?
        // How do I get "this" to be passed from one function to another?
        // How does event delegation work and when is it necessary?
        // Clarifying again what is the purpose of parsing here and in cal project
        var weatherObject = JSON.parse(localStorage.getItem("savedWeatherObject"))||{};
        // I think I am getting the savedWeatherObject and then overwritting it
        var cityName = coordsObj[0].name;
        var latLong = {
            lat: lat,
            long: long
        };
        weatherObject[cityName] = latLong;
        console.log(weatherObject);
        var weatherArray = JSON.parse(localStorage.getItem("weatherArray")) || [];
        weatherArray.push(weatherObject);
        localStorage.setItem("weatherArray", JSON.stringify(weatherArray));
        
        return latLong;
    })
};



function getDeets(latLong) {
    // console.log(latLong);
    var forecast5URL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latLong.lat + "&lon=" + latLong.long + "&appid=" + apiKey;
    $.ajax({
        url: forecast5URL,
        method: "GET"
    }).then(function (weatherObj) {
        // console.log(weatherObj);
        var todayTemp = $("#temp");
        todayTemp.text(weatherObj.list[0].main.temp);
        var todayHumidity = $("#humidity");
        todayHumidity.text(weatherObj.list[0].main.humidity);
        var todayWind = $("#wind");
        todayWind.text(weatherObj.list[0].wind.speed);
    })
};

// function displayButtons() {
//     var buttons = JSON.parse(localStorage.getItem("savedWeatherObject"))
//     for(var i = 0; i < )
// }

$("#search-button").on("click", function (event) {
    event.preventDefault();
    // var that = this.dataset.name;
    // console.log(that.dataset.name)
    // console.log(that);
    // console.log(this);
    // console.log($(this).attr("data-name"));
    getCoords().then((latLong) => {
        getDeets(latLong);
        // console.log(latLong);
    });
});

var weatherButton = $('.weather-btn');

// function redisplayBtnInfo(event) {
//     var btnClicked = $(event.target);
//     // This function will simply redisplay 
// }




$(".weather-btn").on("click", function() {
    console.log("this button works")
})

// Attempting to get search button and weather button to have the same functionality with logic

// $(".weather-btn").each(function () {
//     $(this).on("click", function (event) {
//         event.preventDefault();
//         var queryParam = $("#search-input").val();
//         if ($("#search-input").val() === "") {
//             queryParam = $(this).attr("data-name");
//         }



// code excerpt from daily-planner
// $('.saveBtn').on("click", function(event) {
//     console.log("saving");
    
//     var calendarObject = JSON.parse(localStorage.getItem("cal"))||{};

//     // if(!calendarObject){
//     //     calendarObject = {};
//     // }

//     console.log(calendarObject);


//     var textArea = $(this).parent().find('.block');
//     var textAreaContent = textArea.val();
//     var textAreaId = textArea.attr('id');
//     // in this case when using the assignment operator- is this equivalent to the colon in an object?

//     calendarObject[textAreaId] = textAreaContent
    
//     console.log(calendarObject);

//     console.log(textAreaId, textAreaContent);
//     localStorage.setItem("cal", JSON.stringify(calendarObject));
// });




/*
// Initial array of movies
 var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

 // displayMovieInfo function re-renders the HTML to display the appropriate content
 function displayMovieInfo() {

  // var movie = $(event.target).attr("data-name");
  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

   // Creating an AJAX call for the specific movie button being clicked
   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function(response) {

     // Creating a div to hold the movie
     var movieDiv = $("<div class='movie'>");

     // Storing the rating data
     var rating = response.Rated;

     // Creating an element to have the rating displayed
     var pOne = $("<p>").text("Rating: " + rating);

     // Displaying the rating
     movieDiv.append(pOne);

     // Storing the release year
     var released = response.Released;

     // Creating an element to hold the release year
     var pTwo = $("<p>").text("Released: " + released);

     // Displaying the release year
     movieDiv.append(pTwo);

     // Storing the plot
     var plot = response.Plot;

     // Creating an element to hold the plot
     var pThree = $("<p>").text("Plot: " + plot);

     // Appending the plot
     movieDiv.append(pThree);

     // Retrieving the URL for the image
     var imgURL = response.Poster;

     // Creating an element to hold the image
     var image = $("<img>").attr("src", imgURL);

     // Appending the image
     movieDiv.append(image);

     // Putting the entire movie above the previous movies
     $("#movies-view").prepend(movieDiv);
   });

 }

 // Function for displaying movie data
 function renderButtons() {

   // Deleting the movies prior to adding new movies
   // (this is necessary otherwise you will have repeat buttons)
   $("#buttons-view").empty();

   // Looping through the array of movies
   for (var i = 0; i < movies.length; i++) {

     // Then dynamicaly generating buttons for each movie in the array
     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
     var a = $("<button>");
     // Adding a class of movie-btn to our button
     a.addClass("movie-btn");
     // Adding a data-attribute
     a.attr("data-name", movies[i]);
     // Providing the initial button text
     a.text(movies[i]);
     // Adding the button to the buttons-view div
     $("#buttons-view").append(a);
   }
 }

 // This function handles events where a movie button is clicked
 $("#add-movie").on("click", function(event) {
   event.preventDefault();
   // This line grabs the input from the textbox
   var movie = $("#movie-input").val().trim();

   // Clear out the value in the input field
   $("#movie-input").val("")

   // Adding movie from the textbox to our array
   movies.push(movie);

   // Calling renderButtons which handles the processing of our movie array
   renderButtons();
 });

 // Adding a click event listener to all elements with a class of "movie-btn"
 $(document).on("click", ".movie-btn", displayMovieInfo);

 // Calling the renderButtons function to display the initial buttons
 renderButtons();








getMidday()
// https://stackoverflow.com/questions/48761562/openweathermap-api-get-1-time-slot-from-5-day-forcast

getData(){
    var arraycontainsMidday;
    this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=3362024&APPID=bbcf57969e78d1300a815765b7d587f0&units=metric').map(res=>res.json()).subscribe(data => {
    this.items = data;
      for(var i = 0; i < this.items.list.length; i++){
        this.dates = this.items.list[i].dt_txt.substring(10);
        this.temps = this.items.list[i].main;
        //if 12 o'clock middat is found
        arraycontainsMidday = (this.dates.indexOf("12:00:00") > -1);
      }

      for(var j = 0; j < this.items.list.length; j++){
        this.temps = this.items.list[j].main.temp;
      }

    })
  }
*/