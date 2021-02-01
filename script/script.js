 const apiKey = "946fe7531174c49baf0d6b15b83dd09f";
// const inputVal = input.value;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

var userSubmitBtn = document.querySelector(".button")
var inputLocation = document.querySelector(".location")

var cityAndDate = document.querySelector(".city-date")
var temperature = document.querySelector(".temperature")
var humidity = document.querySelector(".humidity")
var windSpeed = document.querySelector(".wind-speed")
var uvIndex = document.querySelector(".uv-index")
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
            var himidityData = data.list[0].main.humidity;
            var windSpeedData = data.list[0].wind.speed;

            var newDiv = document.createElement("div")
            newDiv.innerHTML = "<p>" + tempData + "</p>"
            // cityAndDate.append(cityName + " " + dateAndTime)
            temperature.appendChild(newDiv)
            

        })
        
        .catch(function(err){
            console.log("fetch problem: " + err.message)
           
        })
 
} )