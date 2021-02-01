 const apiKey = "946fe7531174c49baf0d6b15b83dd09f";
// const inputVal = input.value;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

var userSubmitBtn = document.querySelector(".button")
var inputLocation = document.querySelector(".location")

var weatherToday = document.querySelector(".todaysWeather");
var dayCard = document.querySelector(".day")


userSubmitBtn.addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputLocation.value +"&appid="+ apiKey)
        .then(function(response) {
            return response.json();
           })

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
            

        })
        
        .catch(function(err){
            console.log("fetch problem: " + err.message)
           
        })
 
} )