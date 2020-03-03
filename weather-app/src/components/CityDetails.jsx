import React, { Component } from "react";
import axios from "axios";

class CityDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      //cityDetails: props.match.params.id,
      weatherDataDetails: null
    };
  }

  componentDidMount = () => {
    const weatherURL = "https://www.metaweather.com/api/location/";

    axios.get(weatherURL + this.props.match.params.id).then(result => {
      console.log({ result });
      this.setState({ weatherDataDetails: result.data });
    });
  };

  render() {
    return (
      <div>
        {/* this is id: {this.props.match.params.id} */}
        <WeatherInfo data={this.state.weatherDataDetails} />
      </div>
    );
  }
}

const WeatherInfo = props => {
  console.log(props);
  //show the result if they are availeble
  if (props && props.data === null) {
    return "";
  } else {
    return (
      <div className="cityDetails">
        <div className="city">
          <ul>
            <li id="city">City: {props.data.title}</li>
            <li>
              Current Status:{" "}
              {props.data.consolidated_weather[0].weather_state_name}
              <img
                className="statusImg"
                src={`https://www.metaweather.com/static/img/weather/${props.data.consolidated_weather[0].weather_state_abbr}.svg`}
              />
            </li>

            <li>
              Min Temp:{" "}
              {props.data.consolidated_weather[0].min_temp.toFixed(0) + "°C"}
            </li>
            <li>
              Max Temp:{" "}
              {props.data.consolidated_weather[0].max_temp.toFixed(0) + "°C"}
            </li>
            <li>
              Humidity: {props.data.consolidated_weather[0].humidity + "%"}
            </li>
            <li>
              Wind Speed:{" "}
              {props.data.consolidated_weather[0].wind_speed.toFixed(0) +
                " mph"}
            </li>
            <li>
              Sun Rise:{" "}
              <img
                className="Logo"
                src={require("../assets/cloud-element-weather-sunrise-sun-up-rise-512.png")}
                width="45"
                height="43"
              />
              {props.data.sun_rise}
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default CityDetails;
