// click event on ID of search-button in HTML
$("#search-button").on("click", function () {
    // my API key (using a variable as a shortcut)
    var apiKey = "6351c18f15de8f5271ba27903fcd1031";
    // our queryParam will be what the user puts in the search text area
    var queryParam = $("#search-input").val();
    // sets URL for ajax HTTP request
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + queryParam + "&appid=" + apiKey;
    // The AJAX call that uses or queryURL and fetches our payload
    $.ajax({
        url: queryURL,
        method: "GET"
    })
}) // the promise. When the payload is received; this function runs. "response"
    // is the payload
    .then(function(data) {
        console.log(data);
    })

























/*
Code from weather tutorial:

$( document ).ready(function() {
	var appID = "6351c18f15de8f5271ba27903fcd1031";

   	$(".query_btn").click(function(){

    	var query_param = $(this).prev().val();

    	if ($(this).prev().attr("placeholder") == "City") {
    		var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&units=imperial&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "Zip Code") {
    		var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&units=imperial&APPID=" + appID;
    	} 

        $.getJSON(weatherUrl,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
        });
    })

    var fahrenheit = true;

	$("#convertToCelsius").click(function() {
		if (fahrenheit) {
			$("#temperature").text(((($("#temperature").text() - 32) * 5) / 9));
		}
		fahrenheit = false;
	});

	$("#convertToFahrenheit").click(function() {
		if (fahrenheit == false) {
			$("#temperature").text((($("#temperature").text() * (9/5)) + 32));
		}
		fahrenheit = true;
	});

});

*/