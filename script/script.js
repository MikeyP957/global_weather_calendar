 const apiKey = "946fe7531174c49baf0d6b15b83dd09f";
// const inputVal = input.value;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

var userSubmitBtn = document.querySelector(".button")
var inputLocation = document.querySelector(".location")

var weatherToday = document.querySelector(".todaysWeather");
// console.log(weatherToday.value, "weatherToday Value");
var weatherPredictions = document.querySelector(".five-day-display");
var dayCard = document.querySelector(".day");


userSubmitBtn.addEventListener("click",function(){
     
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputLocation.value +"&units=imperial&appid="+ apiKey)
        .then(function(response) {
            return response.json();            
           })
           //create the div for today's weather
        //Create a function that gets all my objects/arrays and returns them as variables
        //function that makes the main weather for that day
        //function that makes weather prediction for 5 days
            //append as cards
            //use a for loop, the array would be index [8i-1], unless i = 0
        //function that keeps local storage and appends as list
        // .then(function(){
        //     if 
        // })

        .then(function(data){
            console.log(data);
            
            var weatherCoordinates = {
                latitude: data.city.coord.lat,
                longitude: data.city.coord.lon,
            };
                console.log(weatherCoordinates.latitude, "latitude")
                console.log(data, "this function returns weatherData")
                                
            var weatherData = {
                cityName: data.city.name,
                dateAndTime:data.list[2].dt_txt,
                tempData:data.list[2].main.temp,
                windSpeedData: data.list[2].wind.speed ,
                humidityData:data.list[2].main.humidity,
                weatherIcon: data.list[2].weather[0].icon,
            };
                        
                
            var newDiv = document.createElement("div");
            newDiv.id = "weatherLocationNew"
            newDiv.innerHTML = "<h3>" +weatherData.cityName + " " + weatherData.dateAndTime + "</h3>" +
            "<div class='icon'><img src='"+ weatherData.weatherIcon +".png' alt='weather icon'></div>"
            "<p>Temperature: " + weatherData.tempData + " degrees Farenheight</p> <br>" + 
            "<p>Wind Speed: " + weatherData.windSpeedData + " MPH</p>" +
            "<p>Humidity: " + weatherData.humidityData + "%</p> <br>";
            // "<p>UV Index: " + tempData + "</p> <br>"
            // if(weatherToday.value == 0){
            //     weatherToday.appendChild(newDiv)        
            //     return data;
            // }
            // else{
            //     weatherToday.replace(document.getElementById("weatherLocationNew"), newDiv)        
            //     return data;
            // }
            weatherToday.appendChild(newDiv)



            for (i = 1; i <= 5 ; i++){                
                var tempData = data.list[(8*i-1)].main.temp;
                var humidityData = data.list[(8*i-1)].main.humidity;
                var windSpeedData = data.list[(8*i-1)].wind.speed;

               
                var newCard = document.createElement("div");
                newCard.classList.add("card");
                newCard.classList.add("col-sm-2")

                newCard.innerHTML = "<p>Temperature: " + tempData + " deg. F</p> <br>" + 
                "<p>Wind Speed: " + windSpeedData + " MPH</p>" +
                "<p>Humidity: " + humidityData + "%</p> <br>" //+
                // "<p>UV Index: " + tempData + "</p> <br>"
    
                // cityAndDate.append(cityName + " " + dateAndTime)
                weatherPredictions.appendChild(newCard)
                console.log(tempData, "temp data for one day")
            }


        })
           
        .catch(function(err){
            console.log("fetch problem: " + err.message)
           
        })
 
} )


// fetch("http://api.openweathermap.org/data/2.5/uvi?lat=" + weatherCoordinates.latitude + "&lon=" + weatherCoordinates.longitude + "&appid="+ apiKey)