let request = require('request');
let argv = require('yargs').argv

let apiKey = 'a3d5a9d815df7658071a71f6eeaddc21';
let city = argv.c || 'poprad';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp} degrees in ${weather.name}.`;
      console.log(message);
  }
});