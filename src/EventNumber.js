import React, { Component } from 'react';

class EventNumber extends Component {


    state = {
        numberOfEvents: 32,
        
      };
    

      handleValueChange = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value })
      }




    render () {
    return (
    <div className="event_number">
    <label > Number of events displayed </label>
    <input className="event_number_input" placeholder="number of event" onChange={this.handleValueChange} value={this.state.numberOfEvents}></input>   
    
    </div>


);
    }

}

export default EventNumber;