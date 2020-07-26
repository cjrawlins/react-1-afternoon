import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();
    
    this.state = {
      unFilteredArray: ['hello', 'i', 'am', 'a', 'string', 'array', 'and', 'I', 'live', 'inside', 'your', 'computer'],
      userInput: '',
      filteredArray: []
    }
  }
  
  handleChange(val) {
    this.setState( {userInput: val} );
  }


  filterText(inputText) {
    let unFilteredArray = this.state.unFilteredArray
    let filteredInput = []

    for ( let i=0; i < this.state.unFilteredArray.length; i++ ) { 
      if ( unFilteredArray[i].includes(inputText) ) {
        filteredInput.push(unFilteredArray[i]);
      }
    }
    this.setState( {filteredArray: filteredInput } );
  }

  render() {
    return (
      <div className="puzzleBox filterString">
          <h4>Filter String</h4>
          <span className="puzzleText" >Input: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => this.filterText(this.state.userInput) } >Filter</button>
          <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>          
      </div>
    )
  }
}