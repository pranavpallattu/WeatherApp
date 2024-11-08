const weatherapp=()=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`).then((response)=>{
    response.json().then((weatherdata)=>{
      console.log(weatherdata);
      
      city=weatherdata.name
      console.log(city);
  
      countryname=weatherdata.sys.country
      console.log(countryname);
      
      humidity=weatherdata.main.humidity
      console.log(humidity);
      
      windspeed=weatherdata.wind.speed
      console.log(windspeed);
  
      pressure=weatherdata.main.pressure
      console.log(pressure);
      
      temp=weatherdata.main.temp
      tempcelcius=temp-273.15;
      console.log(tempcelcius);
      
      mainvalue=weatherdata.weather[0].main
      console.log(mainvalue);
      
      feels=weatherdata.main.feels_like
      feeltempkel=feels-273.12;
      console.log(feeltempkel);

      description=weatherdata.weather[0].description
      console.log(description);
           
      result.innerHTML=`
                    <h5 class='my-2 fw-normal'>${city} Weather Update!</h5>
                    <p class='fs-3 fw-normal'><strong>Country:</strong> ${countryname}</p>
                    <p class='fs-4'><strong>Humidity:</strong> ${humidity}%</p>
                    <p class='fs-4'><strong>Wind:</strong> ${windspeed} Kmph</p>
                    <p class='fs-4'><strong>Pressure:</strong> ${pressure} hPa</p>
                `

      left.innerHTML=`<h2 class="display-4">${tempcelcius.toFixed(1)}°C</h2>
                    <p class="fs-5">${mainvalue} - Feels like ${feeltempkel.toFixed(1)}°C</p>
                    <p class="fs-1 fw-bolder">${city}</p>
                    <p class="fs-1 fw-normal">${description} in ${city}</p>
                    <p class='fs-3'>${new Date().toLocaleString()}</p>`
      

      cityid.innerHTML=`<h4 class="text-center">${city}</h4>`
      
    })
    
  })
}



document.getElementById('cityname').addEventListener('keydown',function(event){
  if(event.key==='Enter'){
    event.preventDefault();
    weatherapp();
  }
});


const refreshWeather = () => {
  cityname.value=""
  left.innerHTML=""
  result.innerHTML=""
};


