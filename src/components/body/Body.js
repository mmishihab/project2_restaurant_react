import React,{Component} from 'react';
import Banner from './Banner';
import About from './About';
import Education from './Education';
import Project from './Project';
import Portfolio from './Portfolio';
import Form from './Form';


class Body extends Component{
    render(){
        return(
            <div>
                <Banner />
                <About />
                <Education />
                <Project />
                <Portfolio />
                <Form /> 
            
            </div>
            
            )
    }
}


export default Body;