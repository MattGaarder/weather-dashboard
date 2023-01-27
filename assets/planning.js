var queryURL = api.openweathermap.org/data/2.5/weather?q={city}&appid={API};
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;



// Paramaters:
// https://openweathermap.org/current#name

// q: The query parameter, where we'll add the city variable.
// appid: The application id or key, where we'll add the API key variable.
// units: Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. 

// Make the API Call Using Fetch (Question: what is the benefit of this over using ajax GET?)
// // The Fetch API is a Web API built into the browser that allows you to make server-side API calls without having to use AJAX and install a bulky library like jQuery.
// Now that you have created your query URL, you only need to call the Fetch API to pass the query URL in as a parameter, as shown in the following example:

fetch(queryURL)

// Remember that the query URL won't work automatically as it's written. You'll need to adjust your application to accept user input, to store in the city variable that you've created.

// 5 Day / 3 Hour Forecast parameters:
// https://openweathermap.org/forecast5

// lat, lon: Geographical coordinates (latitude, longitude). If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API.
// https://openweathermap.org/api/geocoding-api
// API call

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// Parameters
// q	required	City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.
// appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
// limit	optional	Number of the locations in the API response (up to 5 results can be returned in the API response)

// Direct geocoding allows to get geographical coordinates (lat, lon) by using name of the location (city name or area name).
// If you use the limit parameter in the API call, you can cap how many locations with the same name will be seen in the API response (for instance, London in the UK and London in the US).



// * Create a weather dashboard with form inputs.
//   * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
//   * When a user views the current weather conditions for that city they are presented with:
//     * The city name
//     * The date
//     * An icon representation of weather conditions
//     * The temperature
//     * The humidity
//     * The wind speed
//   * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
//     * The date
//     * An icon representation of weather conditions
//     * The temperature
//     * The humidity
//   * When a user click on a city in the search history they are again presented with current and future conditions for that city

// Pseudo-code
// Create input text area attached to button with "click" event listener 
// On click this 1. creates a new button element with text content being the content of the button (appended to the button div)
// 2. triggers an ajax call to openweather with the input text becoming the query parameter to be slotted into the query url in the call
// 3. data from the promise is displayed dynamically in the HTML by traversing the DOM and using .innerHTML etc. 
// 4. It will also change the data-set-name of the button so that on future clicks of the button it will continue to show accurate data 
