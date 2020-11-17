import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: '',
            userInput: '',
            filteredArray: [],
        }
    }

    handleChange(input){
        this.state.userInput = input;
    }

    filterString(){

    }




    render(){
        return(
            <div>
                <h4 className = "puzzleBox filterStringPB"> Filter String </h4>
                <span className></span>
                <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)} />
                <button className = "confirmationButton" onClick = {() => this.filterString(this.state.userInput) } />
                <span className = "resultsBox filterStringRB"></span>
            </div>
        )
    }
}

