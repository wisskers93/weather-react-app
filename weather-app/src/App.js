import React from "react";
import Titles from "./components/Title-Folder/Titles";
import Form from "./components/Form-Folder/Form";
import Weather from "./components/Weather-Folder/Weather";
import ForecastCards from "./components/Forecast-Card-Folder/Forecast-Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Radar from "./components/Radar.js";
import Fade from 'react-reveal/Fade';


const API_KEY = "3d790876479461764d53a954986abf1d";
const date = new Date();
const time = date.getHours();


class WeatherApp extends React.Component {
  state ={
    lat: "",
    long: "",
    city: "",
    forecastCard: "",
    temperature: "",
    humidity: "",
    description: "",
    icon: "",
    error: "",
    isItDaytime: "",
    showCard: false,
    radar:""
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
    const zipCode = e.target.elements.zip.value;
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${API_KEY}`)
    const data = await api_call.json();
    
     
    
    
    
    if (zipCode){
    console.log(data); 
    
    this.setState({
      lat: data.coord[1],
      long: data.coord[0],
      temperature: Math.round(data.main.temp),
      city: data.name,
      humidity: data.main.humidity,
      description:data.weather[0].description,
      icon: data.weather[0].icon,
      error: "",
      showCard:true,
     });
    } else {
    console.log(data); 
    this.setState({
      lat: "",
      long: "",
      temperature: "",
      city:"",
      humidity: "",
      description: "",
      forecastCard: "",
      icon: "",
      radar: "",
      error: "Please Enter a Valid Zip Code"
     });
    }
  }


  render() {
    return(
      <div className= {this.state.isItDaytime ? 'background-day' : 'background-night'}>
          <div className="row">
            <div className="text-box-left">
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather 
                city={this.state.city}
                error={this.state.error}
                />
            </div>
            <Fade right>
              <div className={this.state.showCard ? 'show-card' : 'no-card'}>
                    <div>
                    <ForecastCards
                    icon={this.state.icon}
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    description={this.state.description}        
                    />
                    <Radar />
                    </div>
              </div>
           </Fade>
          
           </div>
      </div>
    );
  }
}

export default WeatherApp;