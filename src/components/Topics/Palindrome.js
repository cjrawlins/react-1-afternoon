import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();
    
    this.state = {
      userInput: '',
      palindrome: '',
      result: ''
    }
  }
  
  handleChange(val) {
    this.setState( {userInput: val} );
  }


  reverseUserInput(userInput) {
    let splitString = userInput.split("");
    let revSplitArray = splitString.reverse();
    let joinedArray = revSplitArray.join("");

    this.setState( { palindrome: joinedArray } )
    console.log("Joined: ", joinedArray);
    this.checkIfPalidrome();
  }

  checkIfPalidrome() {
    let usrIn = this.state.userInput;
    let pal = this.state.palindrome;

    if ( usrIn === pal ) {
      console.log('true');
      this.setState( {result: " True" } );
    } else {
      console.log('false');
      this.setState( {result: " False" } );
    }
  }

  
  render() {
    return (
      <div className="puzzleBox filterStringPB">
          <h4>Palindrome</h4>
          <span className="puzzleText" ></span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => this.reverseUserInput(this.state.userInput) } >Check</button>
    <span className="resultsBox" >Palindrome: {this.state.result}</span>          
      </div>
    )
  }
}