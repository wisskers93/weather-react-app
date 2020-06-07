import React from "react";
import WeatherApp from "../App";

class Form extends React.Component {
    

    
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name= "city" placeholder="City..."/>
                <input type="text" name= "state" placeholder="State..." />
                <button onClick={this.onHandleSubmit} type="submit">Get Weather</button>
            </form>
        );
    }
};

export default Form;