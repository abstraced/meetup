import React, { Component } from 'react';

class Event extends Component {
    

    state = {
      showDetails:false,


    }


    toggleDetails = (event) => {
        this.setState({ showDetails: !this.state.showDetails });
      }
 
  render() {
     

    return (
      
        
    <div className="Event" >
    <div className="date">Date: {this.props.event.local_date}  {this.props.event.local_time}</div>
    <div className="what">What: {this.props.event.name}</div>

    <div className="who"> Who: 
      { (this.props.event.group.who ) ? this.props.event.group.who : "Unknown" }
      
     </div>


    <div className="attending">Attending: {this.props.event.yes_rsvp_count}</div>


     { this.state.showDetails? 
     <div className="extra_infos"> 
     <div className="address"> Address: 
     { (!this.props.event.venue) ? 
     "Unknown"
     :  this.props.event.venue.address_1
     + ", " +  this.props.event.venue.city
     + ", " + this.props.event.venue.localized_country_name }
       
     {this.props.event.venue.address_1}, {this.props.event.venue.city}, {this.props.event.venue.localized_country_name}</div> 
     <div className="description">Description: {this.props.event.description}</div> 
     <div className="type_of_event">Type of event: {this.props.event.visibility}</div> 
     <div className="link"> Link:  {this.props.event.link} </div> 



     <button className="toggleInfos" onClick={() => this.toggleDetails()}> Less details </button> 
     </div> : 
     <button className="toggleInfos" onClick={() => this.toggleDetails()}> More details </button>
     
     
     
     

     }
         
     
      </div>
    );
  }
}

export default Event;

