import React, {Component} from React

class Weather extends Component{
    
    constructor(props){
        super();
        this.state={
           city:'',
           weatherData: null 
        };
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

