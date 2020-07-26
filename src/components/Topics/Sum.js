import React, { Component } from 'react';

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  
  handleChange1(val) {
    this.setState( {number1: val} );
  }

  handleChange2(val) {
    this.setState( {number2: val} );
  }

  calcSum(number1, number2) {
    let num1 = Number(number1);
    let num2 = Number(number2);
    let sumNums = num1 + num2;
    this.setState( {sum: sumNums} );
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value) }></input>
        <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.calcSum(this.state.number1, this.state.number2) }>Add</button>
    <span className="resultsBox" >Result: {this.state.sum}</span>          
      </div>
    )
  }
}