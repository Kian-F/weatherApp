import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Card.css";
import SearchForm from "./SearchForm";


class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
      city: "", //  will be set by SearchForm
      weatherData: null //  will be populated via AJAX
    };
  }

  fetchWeather = city => {
    const weatherURL = "https://www.metaweather.com/api/location/search/?";
    const weatherParams = {
      query: city
    };
    axios.get(weatherURL, { params: weatherParams }).then(result => {
      console.log(result);
      // On failure we remove any old data and return to the starting value.
      this.setState({ weatherData: result.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Your Simple Weather </h1>
        <h3>Please enter the city name for broadcast details </h3>
        <h4>Note that CORS has not been enabled on the server side, if you are using Chrome please use extension like <span style={{color:'blue'}}>https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en</span> for development only (may affect other sites).</h4>
        <SearchForm onSubmit={this.fetchWeather} />
        <WeatherInfo data={this.state.weatherData} />
        {/* <CityDetails dataFromParent={this.sate.woeid}/> */}
      </div>
    )
    
  }

   
}

const WeatherInfo = props => {
  console.log(props);
  //show the result if they are availeble
  if (props && props.data === null ) {
    return " ";
  } else {
    return (
      <div>
        <Link to={`/weather/${props.data[0].woeid}`}>{props.data[0].title}</Link>
        <h4>Location Type: {props.data[0].location_type}</h4>
        {/* <a href={`https://www.metaweather.com/api/location/${props.data[0].woeid}`} target="_blank" rel='noopener noreferrer'>Latiude: { props.data[0].woeid}</a> */}
        <h4>Latitude Longitude: {props.data[0].latt_long}</h4>
      </div>
    );
  }
};

export default Weather;
