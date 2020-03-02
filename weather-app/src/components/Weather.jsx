import React, {Component} from 'react';
import axios from 'axios'

class Weather extends Component{
    
    constructor(props){
        super();
        this.state={
           city:'',
           weatherData: null 
        };
    }

    componentDidMount =()=>{
        const weatherURL = 'https://www.metaweather.com/api/location/search/?query=london';
        // const weatherParams={
        //     query: ''
        // }
        axios.get(weatherURL).then((result)=>{
            console.log(result);
            
        })
    }
    

    render(){

        return(
            <div>
            <h1>Welcome to Your Simple Weather </h1>
            </div>
        )
    }
       
    

}

export default Weather;

