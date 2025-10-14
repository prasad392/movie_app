let apiKey = '90a8c59d4ac6bdaea458d654a064b72a';

const fetchWeatherData = async () => {
  const inputtext = document.getElementById('inputtext').value.trim();

  if (inputtext === '') {
    alert('Please enter a city name');
    return null;
  }

try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputtext}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    if (data.cod !== 200) {
      alert(`Error: ${data.message}`);
      return null;
    }
    return data;

  } 
  catch (error) {
    console.error("Fetch error:", error);
    alert("Something went wrong. Please try again.");
    return null;
  }
};

const handleWeatherDisplay = async () => {
  const weatherData = await fetchWeatherData();
  console.log(weatherData);
  
  if (!weatherData) return;

  document.getElementById('spancity').innerText = weatherData.name;
  document.getElementById('spantemp').innerText = `${weatherData.main.temp} °C`;
  document.getElementById('spanwind').innerText = `${weatherData.wind.speed} m/s`;
  document.getElementById('spanwheather').innerText = weatherData.weather[0].description;
  document.getElementById('spanhumid').innerText = `${weatherData.main.humidity}%`;

  document.getElementById('inputtext').value = '';
};
const handlereset= async ()=>{
    
    document.getElementById('spancity').innerText =''
    document.getElementById('spantemp').innerText = ''
    document.getElementById('spanwind').innerText = ''
    document.getElementById('spanwheather').innerText = ''
    document.getElementById('spanhumid').innerText = ''
}
document.getElementById('getWeather').addEventListener('click', handleWeatherDisplay);

document.getElementById('resetbutton').addEventListener('click',handlereset)
