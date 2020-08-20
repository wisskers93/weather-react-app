import React from "react";
import "./Title.css";

class Titles extends React.Component{
    render(){
        return(
            <div className="title">
                <h1 className="header">Your Local Weather</h1>
                <p>Find out your local weather conditions</p>
            </div>

        );
    }
};

export default Titles;