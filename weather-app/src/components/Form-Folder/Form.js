import React from "react";
import WeatherApp from "../../App";
import './form-styles.css';

class Form extends React.Component {
    
    render(){
        return(
           <div className="big-box">
            <div className="searchDiv">
            <form className="searchbox_1" onSubmit={this.props.getWeather}>
                <input className="search_1" type="text" name= "zip" placeholder="Zip Code..."/>
                <button className="submit_1">
                    <img onClick={this.onHandleSubmit} type="submit" />
                </button>
            </form>
            </div>
            </div>
            
        );
    }
};

export default Form;