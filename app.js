// Stored Data
const weatherData = [
  {
    city: "New York",
    temperature: "10°C",
    humidity: "50%",
    windSpeed: "15 km/hr",
    moonPhase: "Waxing Gibbous",
    uvIndex: "2 of 10",
    sunrise: "5:31 AM",
    sunset: "8:14 PM",
    icon: "images/snow.png",
    dayWeather: ["1°C","2°C","3°C","4°C","5°C","6°C","7°C","8°C","9°C","10°C","11°C","12°C"],
    xArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yArray: [13, 13, 16, 21, 23, 18, 14, 13, 11]
  },
  {
    city: "Anand",
    temperature: "35°C",
    humidity: "41%",
    windSpeed: "13 km/hr",
    moonPhase: "Full Moon",
    uvIndex: "7 of 10",
    sunrise: "5:55 AM",
    sunset: "7:16 PM",
    icon: "images/clear.png",
    dayWeather: ["25°C","27°C","29°C","30°C","35°C","36°C","37°C","39°C","41°C","43°C","45°C","40°C"],
    xArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yArray: [16, 18, 18, 21, 21, 23, 23, 21, 18]
  },
  {
    city: "London",
    temperature: "18°C",
    humidity: "65%",
    windSpeed: "12 km/hr",
    moonPhase: "Wanning Gibbous",
    uvIndex: "8 of 10",
    sunrise: "4:56 AM",
    sunset: "8:58 PM",
    icon: "images/clouds.png",
    dayWeather: ["21°C","22°C","23°C","24°C","25°C","26°C","27°C","28°C","29°C","30°C","31°C","32°C"],
    xArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yArray: [18, 15, 19, 21, 24, 20, 24, 20, 25]
  },
  {
    city: "Paris",
    temperature: "24°C",
    humidity: "40%",
    windSpeed: "10 km/hr",
    moonPhase: "Wanning Crescent",
    uvIndex: "1 of 10",
    sunrise: "5:58 AM",
    sunset: "9:37 PM",
    icon: "images/mist.png",
    dayWeather: ["21°C","22°C","23°C","24°C","25°C","26°C","27°C","28°C","29°C","30°C","31°C","32°C"],
    xArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yArray: [20, 16, 15, 18, 19, 21, 23, 25, 19]
  },
  {
    city: "Tokyo",
    temperature: "28°C",
    humidity: "55%",
    windSpeed: "14 km/hr",
    moonPhase: "New Moon",
    uvIndex: "5 of 10",
    sunrise: "4:30 AM",
    sunset: "6:47 PM",
    icon: "images/clear.png",
    dayWeather: ["29°C","30°C","31°C","35°C","37°C","39°C","40°C","41°C","42°C","43°C","44°C","45°C"],
    xArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yArray: [16, 18, 20, 21, 21, 23, 24, 25, 17]
  },
  {
    city: "Sydney",
    temperature: "25°C",
    humidity: "60%",
    windSpeed: "16 km/hr",
    moonPhase: "First Quater",
    uvIndex: "3 of 10",
    sunrise: "6:47 AM",
    sunset: "4:57 PM",
    icon: "images/drizzle.png",
    dayWeather: ["25°C","26°C","30°C","32°C","33°C","34°C","35°C","36°C","40°C","42°C","44°C","45°C"],
    xArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yArray: [19, 15, 18, 19, 22, 23, 25, 25, 22]
  },
  {},
];

// Function used to change the data according to the input 
function searchWeather() {
  const cityInput = document.getElementById("cityInput").value;
  const weatherInfo = weatherData.find(
    (item) => item.city.toLowerCase() === cityInput.toLowerCase()
  );
  if (weatherInfo) {
    document.getElementById("cityName").textContent = weatherInfo.city;
    document.getElementById("temperature").textContent =
      weatherInfo.temperature;
    document.getElementById("humidity").textContent = weatherInfo.humidity;
    document.getElementById("windSpeed").textContent = weatherInfo.windSpeed;
    document.getElementById("weatherIcon").src = weatherInfo.icon;
    document.getElementById("uvIndex").textContent = weatherInfo.uvIndex;
    document.getElementById("sunrise").src = weatherInfo.sunrise;
    document.getElementById("sunset").src = weatherInfo.sunset;
    document.getElementById("moonPhase").textContent = weatherInfo.moonPhase;
    document.getElementsByClassName("windSpeed")[0].textContent = weatherInfo.windSpeed;
    document.getElementsByClassName("lower1")[0].textContent = weatherInfo.dayWeather[0];
    document.getElementsByClassName("lower2")[0].textContent = weatherInfo.dayWeather[1];
    document.getElementsByClassName("lower3")[0].textContent = weatherInfo.dayWeather[2];
    document.getElementsByClassName("lower4")[0].textContent = weatherInfo.dayWeather[3];
    document.getElementsByClassName("lower5")[0].textContent = weatherInfo.dayWeather[4];
    document.getElementsByClassName("lower6")[0].textContent = weatherInfo.dayWeather[5];
    document.getElementsByClassName("lower7")[0].textContent = weatherInfo.dayWeather[6];
    document.getElementsByClassName("lower8")[0].textContent = weatherInfo.dayWeather[7];
    document.getElementsByClassName("lower9")[0].textContent = weatherInfo.dayWeather[8];
    document.getElementsByClassName("lower10")[0].textContent = weatherInfo.dayWeather[9];
    document.getElementsByClassName("lower11")[0].textContent = weatherInfo.dayWeather[10];
    document.getElementsByClassName("lower12")[0].textContent = weatherInfo.dayWeather[11];

    // For printing the graph
    var data = [{
        x: weatherInfo.xArray,
        y: weatherInfo.yArray,
        mode: "lines"
    }];
    
    var layout = {
        xaxis: { range: [1, 10], title: "PM" },
        yaxis: { range: [15, 25], title: "km/hr" },
        title: "Wind Speed vs. Time"
    };
    
    Plotly.newPlot("myPlot", data, layout);
    
  // To output an alert if the input city does not match any of the city in the data 
  } else {
    alert("Weather information not found for the specified city.");
  }

  window.addEventListener("scroll", function () {
    var backToTopButton = document.getElementById("backToTopButton");
    if (window.scrollY > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

var xArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var yArray = [20, 18, 25, 21, 21, 23, 23, 21, 18];

var data = [{
    x: xArray,
    y: yArray,
    mode: "lines"
}];

var layout = {
    xaxis: { range: [1, 10], title: "PM" },
    yaxis: { range: [15, 25], title: "km/hr" },
    title: "Wind Speed vs. Time"
};

Plotly.newPlot("myPlot", data, layout);