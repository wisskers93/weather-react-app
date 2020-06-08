import React from "react";
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

class ForecastCards extends React.Component{
    render(){
        return(
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" height="100em" src="https://cdn1.iconfinder.com/data/icons/weather-forecast-16/64/wheather_forecast_weather-hot-season-sun-forecast-sunshine-meteorology-512.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
            </Card>
        )
    }
}

export default ForecastCards;