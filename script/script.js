 const apiKey = "946fe7531174c49baf0d6b15b83dd09f";
// const inputVal = input.value;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

var userSubmitBtn = document.querySelector(".button")
var inputLocation = document.querySelector(".location")

var weatherToday = document.querySelector(".todaysWeather");
var weatherPredictions = document.querySelector(".five-day-display");
var dayCard = document.querySelector(".day")


userSubmitBtn.addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputLocation.value +"&appid="+ apiKey)
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
        

        .then(function(data){
            console.log(data);
            var cityName = data.city.name;
            var dateAndTime = data.list[0].dt_txt;
            var tempData = data.list[0].main.temp;
            var humidityData = data.list[0].main.humidity;
            var windSpeedData = data.list[0].wind.speed;
            var newDiv = document.createElement("div")
            
            newDiv.innerHTML = "<h3>" +cityName + " " + dateAndTime + "</h3>" +
            "<p>Temperature: " + tempData + "</p> <br>" + 
            "<p>Wind Speed: " + windSpeedData + "</p>" +
            "<p>Humidity: " + humidityData + "</p> <br>" +
            // "<p>UV Index: " + tempData + "</p> <br>"

            // cityAndDate.append(cityName + " " + dateAndTime)
            weatherToday.appendChild(newDiv)
           return data;
        })
//a function that shows the weather for the future days
        .then(function(data){
            console.log(data, "future days data")
            for (i = 1; i <= 5 ; i++){                
                var tempData = data.list[i].main.temp;
                var humidityData = data.list[i].main.humidity;
                var windSpeedData = data.list[i].wind.speed;

                var newCard = document.createElement("card")

                newCard.innerHTML = "<p>Temperature: " + tempData + "</p> <br>" + 
                "<p>Wind Speed: " + windSpeedData + "</p>" +
                "<p>Humidity: " + humidityData + "</p> <br>" +
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