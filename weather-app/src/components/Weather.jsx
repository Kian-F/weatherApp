import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import SearchForm from './SearchForm';
import CityDetails from './CityDetails';


class Weather extends Component {

    constructor(props) {
        super();
        this.state = {
            city: '',
            weatherData: null,
            woeid:''
            
        };
        
    }
   

    fetchWeather = (city) => {
        const weatherURL = 'https://www.metaweather.com/api/location/search/?';
        const weatherParams = {
            query: city
        }
        axios.get(weatherURL, { params: weatherParams }).then((result) => {
            console.log(result);
            this.setState({ weatherData: result.data })

        })
    }


    render() {

        return (
            <div>
                <h1>Welcome to Your Simple Weather </h1>
                <SearchForm onSubmit={this.fetchWeather} />
                <WeatherInfo data={this.state.weatherData}/>
                {/* <CityDetails dataFromParent={this.sate.woeid}/> */}
                </div>
        );
    }



}

const WeatherInfo = (props) =>{
    console.log(props)
    //show the result if they are availeble
    if (props && props.data === null) {
        return '';
      } else {
    return (
        <div>
            <h2>Title: {props.data[0].title} </h2>
            <h2>Location Type:{props.data[0].location_type}</h2>
            {/* <a href={`https://www.metaweather.com/api/location/${props.data[0].woeid}`} target="_blank" rel='noopener noreferrer'>Latiude: { props.data[0].woeid}</a> */}
    <Link to={`/weather/${ props.data[0].woeid}`}>Details:{props.data[0].woeid}</Link>
            <h2>latt_long: { props.data[0].latt_long }</h2>

        </div>
    )
    }
}


export default Weather;

