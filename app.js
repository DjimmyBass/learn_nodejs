

var http = require('http');

var city = "paris"

function printMessage(city, temperature, pressure){
    console.log(" A " + city + ", la temperature est de " + temperature + "°C et la pression est de " + pressure + " hPa. ");
}

var request = http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=f356553eaf8d06a76ac3125e7c58bb54", function(response){
  

    var body = "";
    response.on('data', function (chunk){
        body += chunk;
    });

    response.on('end', function (){

        try {
            var data_weather = JSON.parse(body);
            printMessage(city, data_weather.main.temp, data_weather.main.pressure);
        } catch(error) {
            console.error("Ville inconnu");
        }
        
       
    });


});