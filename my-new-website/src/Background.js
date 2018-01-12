import React, { Component } from 'react';


class  Background extends Component {
    constructor(){
        super();
        this.state = {
            pictures: [],
                
            
        };
    }

    componentDidMount(){
        fetch('http://randomuser.me/api/?results=500')
        .then( results =>  {
            return results.json();

        }).then( data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                        <img src={pic.pictures.medium}/>

                    </div> 
                )
            })
            this.setState({pictures: pictures});
            console.log("state",this.state.pictures);


        })
    }

    render(){
        return(
            <div className="Container2">
                <div className="Container1">
                    {this.state.pictures}
                </div>
            </div>

        )
    }
}