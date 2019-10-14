import React from 'react'
import './Rolls.css'

class Rolls extends React.Component {
    render() {
        const { previousRollState } = this.props
        
        return(
            <React.Fragment>
                <h1>Previous Rolls</h1>
                     {previousRollState.map((number, index) => {
                       return (<p key={index}>{number}</p>)
                     })}
            </React.Fragment>
        );
    }
}

export default Rolls