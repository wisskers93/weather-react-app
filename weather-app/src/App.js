import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "3d790876479461764d53a954986abf1d";

class WeatherApp extends React.Component {
  state ={
    temperature: undefined,
    state: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const stateInUsa = e.target.elements.state.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${stateInUsa}&units=imperial&appid=${API_KEY}`)
    const data = await api_call.json();
    if (city && stateInUsa){
    console.log(data); 
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      state: stateInUsa,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
     });
    } else {
    console.log(data); 
    this.setState({
      temperature: undefined,
      city:undefined,
      state:undefined,
      humidity: undefined,
      description: undefined,
      error: "Please Enter the Full Names of the City and State"
     });
    }
  }


  render() {
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature} 
        city={this.state.city}
        state={this.state.state}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default WeatherApp;