import React, { Component } from 'react';

class EventNumber extends Component {

  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return(
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default EventNumber;