import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import ForecastCards from "./components/Forecast-Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const API_KEY = "3d790876479461764d53a954986abf1d";
const date = new Date();
const time = date.getHours();

class WeatherApp extends React.Component {
  state ={
    state: "",
    city: "",
    forecastCard: "",
    temperature: "",
    humidity: "",
    description: "",
    icon: "",
    error: "",
    isItDaytime: ""
  }

  
  componentDidMount() {
    if (time <19 && time >6){
        this.setState({
          isItDaytime: true
        });
      } else {
        this.setState({
          isItDaytime: false
        });
      }
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
      icon: data.weather[0].icon,
      error: ""
     });
    } else {
    console.log(data); 
    this.setState({
      temperature: "",
      city:"",
      state:"",
      humidity: "",
      description: "",
      forecastCard: "",
      icon: "",
      error: "Please Enter the Full Names of the City and State"
     });
    }
  }


  render() {
    return(
      <div className= {this.state.isItDaytime ? 'background-day' : 'background-night'} >
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        city={this.state.city}
        state={this.state.state}
        error={this.state.error}
        />
        <ForecastCards 
        icon={this.state.icon}
        temperature={this.state.temperature} 
        humidity={this.state.humidity}
        description={this.state.description}        
        />
      </div>
    );
  }
}

export default WeatherApp;