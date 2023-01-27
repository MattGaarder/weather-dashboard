
var lat = 0;
var long = 0;

$("#search-button").on("click", function (event) {
    event.preventDefault();
    var queryParam = $("#search-input").val();
    var apiKey = "6351c18f15de8f5271ba27903fcd1031";
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + queryParam + "&appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (object) {
        console.log(object);
        lat = object[0].lat
        long = object[0].lon
        console.log(lat);
        console.log(long);
    })
    var forecast5URL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
    $.ajax({
        url: forecast5URL,
        method: "GET"
    }).then(function (object) {
        console.log(object);
    });
});

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