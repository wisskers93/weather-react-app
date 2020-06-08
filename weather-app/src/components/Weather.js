import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
            { this.props.city && <p>Location: { this.props.city }, {this.props.state}</p>}   
            {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};

export default Weather;