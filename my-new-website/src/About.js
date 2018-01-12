import React, { Component } from "react";

import me from './Me.jpg';

class About extends Component{
    render(){
        return(
           <div>
            <img src={me} className="About-me" alt="me" />
            <p className="aboutpar"> 
            Hi I'm Darshan. I'm a computer engineer at Boston University.
            I also have a minor in economics. I am originally from Minnesota.
            I grew up playing hockey and I love to play sports in my spare time.
            My friends know me to be both sociable and driven. 

            </p>
           </div>
        );
    }
}

export default About;