import React, { Component } from 'react';
import axios from 'axios'


class CityDetails extends Component {
    
    constructor(props){
        super();
        this.state = { 
           cityDetails: props.match.params.id,
           weatherDataDetails: null
        }
        
    }
    
    componentDidMount =(cityDetails)=>{
        const weatherURL = 'https://www.metaweather.com/api/location/';
        const weatherParams = {
            query: cityDetails
        }
        axios.get(weatherURL + this.props.match.params.id).then((result) => {
            console.log({result});
            this.setState({ weatherData: result.data })

        })
       
        
    }

    
   
    render() { 
        
        return ( 
        <div>
           this is: {this.props.match.params.id}
        </div> 
        );
    }
}
 
export default CityDetails;
