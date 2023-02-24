let weather = {
  "apikey": "48d9f3a0b071ce1d9b74a19839001d9c" ,
fetchWeather: function(city){
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&APPID=" + this.apikey)
 .then((response) => response.json())
 .then((data) => this.displayWeather(data));
},
displayWeather: function(data){
  const {name} = data;
  const {temp, humidity} = data.main;
  const { icon, description} = data.weather[0];
  const { speed } = data.wind;
  console.log(name,temp,humidity,icon,description,speed);

  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".temp").innerText = temp+ "°C";
  document.querySelector(".humidity").innerText  = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText  = "Wind Speed: " + speed + "km/h";
  document.querySelector(".description").innerText = description;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
},
search: function(){
  this.fetchWeather(document.querySelector(".searchbar").value);
}
};

document.querySelector(".searchbutton").addEventListener("click", function(){
weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
  if (event.key == "Enter"){
    weather.search();
  }
});
