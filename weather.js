// weather.js

async function fetchWeather() {
    const city = "Tokyo";
    const apiKey = "c1710e114f619765ae0c0c65238b02c4"; // ← OpenWeatherMapのAPIキーをここに記述
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      const cityName = data.name;
  
      document.getElementById("weather-info").innerText =
        `🌤️ ${cityName} の天気: ${weather}（${temp}℃）`;
    } catch (error) {
      document.getElementById("weather-info").innerText = "天気情報の取得に失敗しました。";
      console.error("Weather API Error:", error);
    }
  }
  
  fetchWeather();