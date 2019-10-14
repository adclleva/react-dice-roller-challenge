import React from 'react';
import './App.css';
import Dice from './components/Dice/Dice.js';
import Rolls from './components/Rolls/Rolls.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      previousRolls : []
    }
  }
  
  makeRoll = (newArr) => {
    const { previousRolls } = this.state
    
    
    this.setState({previousRolls: newArr})
  }
  
  render(){
    const { previousRolls } = this.state

    return (  
      
      <div className="App">
         
          <Dice prevRollState={previousRolls} makeRoll={this.makeRoll}/>
          <Rolls previousRollState={previousRolls}/>

      </div>
    );
  }

}

export default App;
