import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            vehicles: [
                {
                    type: "car",
                    year: 1982,
                    color: "red"
                },

                {
                    type: "boat",
                    year: 2003,
                    color: "black"
                },

                {
                    type: "plane",
                    year: 2018,
                    color: "white"
                },

                {
                    type: "plane",
                    year: 2006,
                    color: "black",
                    name: "Frankie da Awesome aeroplane"
                }
            ],

            userInput: '',
            filteredVehicles: []

        }
    }

    handleChange(val){
        this.setState({ userInput: val});
    }

    filterVehicles(input){
        let vehicles = this.state.vehicles;
        let filteredVehicles = [];

        vehicles.forEach(element => {
            if (element.hasOwnProperty(input)){
                filteredVehicles.push(element);
            } 
        })

        this.setState({ filteredVehicles: filteredVehicles})

    }

        
    render(){
        return(
            <div className="puzzleBox FilterObject.js">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.vehicles, null, 10) } </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={() => this.filterVehicles(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredVehicles, null, 100) } </span>                    
            </div>
        )
    }
}

