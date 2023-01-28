
var lat = 0;
var long = 0;
// if we make this weather-btn on click, it will take the search input value as the query parameter.
// I want to create logic that states if search value is empty, to instead take the data-name attribute of the weather button clicked
// to be used as the query parameter
// before
function searchWeather() {
    var apiKey = "6351c18f15de8f5271ba27903fcd1031";
    var queryParam = $("#search-input").val();
    console.log(thisElement);
    if($("#search-input").val() === "") {
        queryParam = $(thisElement).attr("data-name");
    }
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + queryParam + "&appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (wobject) {
        console.log(queryURL);
        console.log(wobject);
        console.log(wobject[0].name);
        lat = wobject[0].lat
        long = wobject[0].lon
        console.log(lat);
        console.log(long);
        // create a button and append it to the #history div- this button will have data-name be wobject[0].name
        // I also need to add a class to each button so that I can add an event listener on all buttons with the class .weather-btn
        var cityButton = $("<button>");
        cityButton.addClass("weather-btn");
        cityButton.attr("data-name", wobject[0].name);
        cityButton.text(wobject[0].name);
        var history = $("#history");
        history.append(cityButton);
    })
    var forecast5URL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
    $.ajax({
        url: forecast5URL,
        method: "GET"
    }).then(function (object) {
        var todayTemp = $("#temp");
        todayTemp.text(object.list[0].main.temp);
        var todayHumidity = $("#humidity");
        todayHumidity.text(object.list[0].main.humidity);
        var todayWind = $("#wind");
        todayWind.text(object.list[0].wind.speed);
    })
}


$(".weather-btn").on("click", function(event){
    event.preventDefault();
    searchWeather();
});
$(".weather-btn").on("click", function() {
    console.log("this button works")
})










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