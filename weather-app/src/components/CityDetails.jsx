import React, { Component } from 'react';
import axios from 'axios'


class CityDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            //cityDetails: props.match.params.id,
            weatherDataDetails: null
        }

    }

    componentDidMount = () => {
        const weatherURL = 'https://www.metaweather.com/api/location/';

        axios.get(weatherURL + this.props.match.params.id).then((result) => {
            console.log({ result });
            this.setState({ weatherDataDetails: result.data })

        })


    }



    render() {

        return (
            <div>
                {/* this is id: {this.props.match.params.id} */}
                <WeatherInfo data={this.state.weatherDataDetails} />
            </div>
        );
    }
}

const WeatherInfo = (props) => {
    console.log(props)
    //show the result if they are availeble
    if (props && props.data === null) {
        return '';
    } else {
        return (
            <div>
                <h2>City: {props.data.title}</h2>
                <h2>Current Status: {props.data.consolidated_weather[0].weather_state_name}
                <img className='statusImg' src={`https://www.metaweather.com/static/img/weather/${ props.data.consolidated_weather[0].weather_state_abbr}.svg`} />
                </h2>

                <h2>Min Temp: {props.data.consolidated_weather[0].min_temp.toFixed(0)}</h2>
                <h2>Max Temp: {props.data.consolidated_weather[0].max_temp.toFixed(0)}</h2>
                <h2>Humidity: {props.data.consolidated_weather[0].humidity}</h2>


            </div>
        )
    }
}

export default CityDetails;
