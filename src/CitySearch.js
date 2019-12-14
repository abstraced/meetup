import React, { Component } from 'react';
import { getSuggestions } from './api';



class CitySearch extends Component {

    state = {
        query: '',
        suggestions: []
      };

      
    


      handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
        getSuggestions(value).then(suggestions => this.setState({ suggestions }));
      };
     
      handleItemClicked = (value, lat, lon) => {
        this.setState({ query: value, suggestions:[] });
        this.props.updateEvents(lat, lon);
      }

  render() {
    return (
        <div className="CitySearch">
        <input placeholder="city" onChange={this.handleInputChanged}  value={this.state.query}
          type="text"
          className="city"
        />
       <ul className="suggestions" >
  {this.state.suggestions.map( (item) => {
      return (
      <li onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)} key={item.name_string}>{item.name_string}</li> )
  })}
</ul>
      </div>
    );
  }
}

export default CitySearch;