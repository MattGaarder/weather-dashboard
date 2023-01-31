# weather-dashboard
Weather app that includes a search option, a list of cities, and a five-day forecast and current weather conditions for chosen cities. The weather app takes user input in the form of a text-area and submit button. This sends an intital call to the openweather API that retrieves the coordinates for the city. This information is used to create an object that is pushed to an array and saved to local storage. Upon loading the page local storage is used, and iterated through to generate 'weather buttons', each with the information from this object saved in each elements' datasets. A combination of information from local storage, datasets, and details from the primary function as sent to the secondary function as arguments, is used to get make a second call to the API with the coordinates to get the rest of the weather details from openweather. 

https://mattgaarder.github.io/weather-dashboard/

![Alt text](assets/images/Screenshot%202023-01-31%20at%2019.04.02.png)