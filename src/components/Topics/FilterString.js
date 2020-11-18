import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredBreeds: ['Corgie','Dachsund','Golden Retriever','Poodle', 'Lab'],
            userInput: '',
            filteredBreeds: [],
        }
    }

    handleChange(input){
        // console.log(input);
        // console.log(this.state)
        this.setState({
            userInput: input,
    }) 
    }

    filterBreeds(input){
        let breeds = this.state.unFilteredBreeds
        let filteredBreeds = [];

        for (let i = 0; i < breeds.length; i++ ) {
            if ( breeds[i].includes(input) ) {
              filteredBreeds.push(breeds[i]);
            };
        }
        this.setState({
            filteredBreeds: filteredBreeds,
        }) 
        
    }




    render(){
        return(
            <div className = "puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className = "puzzleText"> Names: {JSON.stringify(this.state.unFilteredBreeds, null, 10) } </span>
                <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)} />
                <button className = "confirmationButton" onClick = {() => this.filterBreeds(this.state.userInput) } > Filter </button>
                <span className = "resultsBox filterStringRB"> Filtered Breeds: {JSON.stringify(this.state.filteredBreeds, null, 10) } </span>
            </div>
        )
    }

}
