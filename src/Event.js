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
      
        
    <div className="event" >
    <div className="date">{this.props.event.local_date}  {this.props.event.local_time}</div>
    <div className="what">{this.props.event.name}</div>
    <div className="who">{this.props.event.group.name}</div>
    <div className="attending">Attending: {this.props.event.yes_rsvp_count}</div>


     { this.state.showDetails?
     <div className="extra_infos"> 
     <div className="address">{this.props.event.venue.address_1}, {this.props.event.venue.city}, {this.props.event.venue.localized_country_name}</div> 
     <div className="description">{this.props.event.description}</div> 
     <div className="type_of_event">{this.props.event.visibility}</div> 
     <div className="link"> {this.props.event.link} </div> 



     <button className="toggleInfos" onClick={() => this.toggleDetails()}> Less details </button> 
     </div> : 
     <button className="toggleInfos" onClick={() => this.toggleDetails()}> More details </button>
     
     
     
     

     }
         
     
      </div>
    );
  }
}

export default Event;

