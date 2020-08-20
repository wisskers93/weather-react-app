import React from "react";
import "./Weather.css";

class Weather extends React.Component{
    render(){
        return(
            <div className="your-weather">
            {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};

export default Weather;