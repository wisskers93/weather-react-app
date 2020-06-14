import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
            { this.props.city && <p>Here's Your Weather in { this.props.city } :</p>}   
            {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};

export default Weather;