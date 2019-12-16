import React, { Component } from 'react';

class EventNumber extends Component {


    state = {
        numberOfEvents: 32,
        
      };
    

      handleValueChange = (event) => {
        // const page = event.target.value;
        // this.setState({ numberOfEvents: value });
        this.props.updateEvents(event.target.value);
      }




    render () {
    return (
    <div className="EventNumber">
    <label > Number of events displayed </label>
    <input className="event_number_input" placeholder="number of event" onChange={this.handleValueChange} value={this.state.numberOfEvents}></input>   
    
    </div>


);
    }

}

export default EventNumber;