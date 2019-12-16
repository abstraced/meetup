import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './EventNumber';
import { getEvents } from './api';


class App extends Component {

  

  state = {
  events: [],
  page: null,
  lat: null,
  lon: null

  }
  componentDidMount () {
   
getEvents().then(res => this.setState({ events:res.events, lat:res.city.lat, lon:res.city.lon }));
  }

 

  updateEvents = (lat, lon,page) => {
    if (lat && lon) {
    getEvents(lat, lon, this.state.page)
    .then(events => this.setState({ events }))
    .then(this.setState({lat: lat,  lon: lon}));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon,page)
      .then(res => this.setState({ events:res.events }))
      .then(this.setState({page: page}));

    }
    else {
      getEvents(this.state.lat, this.state.lon,this.state.page)
      .then(events => this.setState({ events }));



    }
   
  }

   



  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <EventNumber updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;