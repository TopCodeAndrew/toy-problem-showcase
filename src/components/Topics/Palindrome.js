import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(val){
        this.setState({
            userInput: val,
        })
    }

    solveProblem(input){
        console.log(input);
        console.log(input.length);
        let reversedString = [];

        for(let i = input.length - 1; i >= 0; i--){
            reversedString.push(input[i])
        }

        reversedString = reversedString.join("")
        
        if(input === reversedString){
            this.setState({
                palindrome: 'true',
            })
        } else {
            this.setState({
            palindrome: 'false',
        })}
        console.log(input)
        console.log(reversedString)
        console.log(this.palindrome)
    }


    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange = {(e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={() => this.solveProblem(this.state.userInput)}> Check </button>
                <span className="resultsBox">Palindrome: {this.state.palindrome } </span>
            </div>
        )
    }
}

