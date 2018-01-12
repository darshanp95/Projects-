import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Interests from "./Interests";
import Experiences from "./Experiences";
import logo from './D.PNG'
import Background from './Background';

import './App.css';




class Main extends Component {
 render() {
   return (
       
       <HashRouter>
        
       <div>
         <img src={logo} className="App-logo" alt="logo" />
         <h1>Darshan's Website with working Links!</h1>
         <ul className="header">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/interests">Interests</NavLink></li>
           <li><NavLink to="/experiences">Experiences</NavLink></li>
           <li><NavLink to="/contact">Contact</NavLink></li>
         </ul>
         <div className="content">
         <Route path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/interests" component={Interests}/>
         <Route path="/experiences" component={Experiences}/>
            
         </div>
       </div>
       </HashRouter>
       //<Background/>
   );
 }
}
export default Main;