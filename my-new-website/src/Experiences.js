import React, { Component } from "react";

import bu from './BU.png';

class Experiences extends Component{
    render(){
        return(
        <div className="ExperiencesContainer">
          <p className="Experiencespar">
            Experiences Include: <br/>
            <br/>
            -Part of a team that built a dual android/iOS app using react Native <br/>
            <br/>
            -PowerShell Scripting for Cybersecurity <br/>
            <br/>
            -Discrete Mathematics <br/>
            <br/>
            -Probability and Stochastic Modeling <br/>
            <br/>
            -Computer Organization <br/>
            <br/>
            -C# and ASP.Net programming <br/>
            <br/>
            -Algorithms <br/>
            <br/>
        
        
          </p>

          <img src={bu} width="400" height="300" margin-right="200px" className="BU-pic" alt="bu" />



        </div> 
        );
    }
}

export default Experiences;