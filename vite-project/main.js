class Advertisment {
  constructor() {
    this.location();
  }



  location() {
    navigator.geolocation.getCurrentPosition(
      this.myLocation.bind(this),
    this.errorLocation.bind(this)
    );
    
  }


  myLocation(result){
    let latitude = result.coords.latitude;
    let longitude = result.coords.longitude;
    this.getWeather(latitude, longitude);
    this.getActivity();
  }

  errorLocation(error){
    console.log(error);
  }


  getWeather(latitude, longitude){
      //url: https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&forecast_days=1
      //fetch this url, and log the result
      fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m&current_weather=true&forecast_days=1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.querySelector("h2").innerHTML = data.current_weather.temperature + "°C";
      }
      )
      .catch(error => console.log(error));
  }



  getActivity(){

    fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.querySelector("h3").innerHTML = data.activity;
    }
    )
    .catch(error => console.log(error));
  }




}

let advertisment = new Advertisment();