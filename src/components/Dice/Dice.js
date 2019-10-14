import React from 'react';
import './Dice.css';


class Dice extends React.Component{

    makeARoll = () => {
        const randomNum = (Math.floor(Math.random() * 20)) + 1; // make sure to add one for the dice roll

         this.props.makeRoll(randomNum)

    }

    render(){
        const  { prevRollState } = this.props

        return (
            <React.Fragment>
                <h1>Roll Result</h1>
                <p>Results: {prevRollState[prevRollState.length -1]}</p>
                <button onClick={this.makeARoll}> Click to Roll
                 </button>
            </React.Fragment>
        )
    }
}

export default Dice;
