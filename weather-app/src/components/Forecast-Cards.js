import React from "react";
import Card from 'react-bootstrap/card';

class ForecastCards extends React.Component{

     


    render(){
        return(
            <div>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" height="100em" src={`https://openweathermap.org/img/wn/${this.props.icon}@2x.png`}/>
                    <Card.Body>
                        <Card.Title>{this.props.temperature}</Card.Title>
                        <Card.Text>
                        { this.props.humidity &&  <p>Humidity: { this.props.humidity }</p>}
                        { this.props.description }
                        </Card.Text>
                    </Card.Body>
            </Card>
            </div>
        )
    }
}

export default ForecastCards;