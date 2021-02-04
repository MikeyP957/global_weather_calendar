 const apiKey = "946fe7531174c49baf0d6b15b83dd09f";

//user input and submit from html
var userSubmitBtn = document.querySelector(".button")
var inputLocation = document.querySelector(".location")

//where todays data will go
var weatherToday = document.querySelector(".todaysWeather");
// where the five day forecast will go
var weatherPredictions = document.querySelector(".five-day-display");



userSubmitBtn.addEventListener("click",function(){
     
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputLocation.value +"&units=imperial&appid="+ apiKey)
        .then(function(response) {
            return response.json();            
           })
        .then(function(data){
            console.log(data);
            
            var weatherCoordinates = {
                latitude: data.city.coord.lat,
                longitude: data.city.coord.lon,
            };
                // console.log(weatherCoordinates.latitude, "latitude")
                console.log(data, "this function returns weatherData")

// storing the data to append
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

            newDiv.innerHTML = "<h3>" + weatherData.cityName + " " + weatherData.dateAndTime + "</h3>" +
            "<div class='icon'><img src='http://openweathermap.org/img/wn/" + weatherData.weatherIcon + "@2x.png' alt='weather icon'></div><p>Temperature: " + weatherData.tempData + " degrees Farenheight</p> <br>" + "<p>Wind Speed: " + weatherData.windSpeedData + " MPH</p>" +
            "<p>Humidity: " + weatherData.humidityData + "%</p><br>"
            
            weatherToday.appendChild(newDiv);


// the data is recursive, each 8th index is a new day. There is no need for the initial index as it is already displayed
            for (i = 1; i <= 5 ; i++){                
                var tempData = data.list[(8*i-1)].main.temp;
                var humidityData = data.list[(8*i-1)].main.humidity;
                var windSpeedData = data.list[(8*i-1)].wind.speed;
                var weatherIcon = data.list[(8*i-1)].weather[0].icon;
                var weatherDate = data.list[(8*i-1)].dt_txt;
                

               
                var newCard = document.createElement("div");
                newCard.classList.add("card");
                newCard.classList.add("col-sm-2")

                newCard.innerHTML = "<h5>" + weatherDate + "</h5><br><p>Temperature: " + tempData + " deg. F</p> <br>" + "<div class='icon'><img src='http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png' alt='weather icon'></div><p>Wind Speed: " + windSpeedData + " MPH</p>" +
                "<p>Humidity: " + humidityData + "%</p> <br>"
    
                // cityAndDate.append(cityName + " " + dateAndTime)
                weatherPredictions.appendChild(newCard)
                // console.log(tempData, "temp data for one day")
            }
// fetch uvi data using the coordinates from the first fetch
            fetch("http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + weatherCoordinates.latitude + "&lon=" + weatherCoordinates.longitude + "&appid="+ apiKey)
            .then(function(response){
                return(response.json())
            })
            .then(function(data2){
                console.log(data2, "this is uvi data");
                
             
            })
            
        })
          

        .catch(function(err){
            console.log("fetch problem: " + err.message)
           
        })
       
} )


 