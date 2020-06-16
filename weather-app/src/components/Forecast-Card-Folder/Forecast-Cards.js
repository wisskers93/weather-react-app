import React from "react";
import "./Forecast-Cards.css";

const iframe = '<iframe scrolling="no" title="fx." src="https://www.rainviewer.com/map.html" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'; 

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

class ForecastCards extends React.Component{

    
    render(){
        return(
            <div className="Forecast">
                <div className="city">
                                { this.props.city && <h5 className="small-text">Here's Your Weather in <h1 className="large-text">{ this.props.city }, US:</h1></h5>}   

                </div>
                
                <div className="temp">
                    <h4 className="number">{this.props.temperature}°</h4>
                    <p>
                    { this.props.humidity &&  <p>Humidity: { this.props.humidity }</p>}
                    { this.props.description }
                    </p>
                </div>

                <div className="icon">
                    <img variant="top" src={`https://openweathermap.org/img/wn/${this.props.icon}@2x.png`}/>
                </div>

                <div className="radar-box">   
                    <Iframe iframe={iframe} />                     
                </div>
            </div>
        )
    }
}

export default ForecastCards;