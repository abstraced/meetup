import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './EventNumber';

class App extends Component {

  state = {

  numberOfEvents: 32


  }

  // updateEventNumber (number) => {





  // }



  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventNumber />
        <EventList />
      </div>
    );
  }
}

export default App;