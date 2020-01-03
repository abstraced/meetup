import React, { Component } from 'react';
import {
  PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer
} from 'recharts';




class Event extends Component {
    


 

    state = {
      showDetails:false,


    }

    
    getData = () => {
      const rvsp= this.props.event.yes_rsvp_count;
      const freeSlots=  this.props.event.rsvp_limit - rvsp;
      const rvspData = [{name:'Reservations',value:rvsp,color:'red'},
    {name:'Free Slots', value : freeSlots, color:'blue'}]


    // const rvspData = [{name:'Reservation',value: this.props.event.yes_rsvp_count},
    // {name:'Free slots',value: (this.props.event.yes_rsvp_count - this.props.event.rsvp_limit) }];
    // name value

    // 2 value: free slot / booked slot



    return rvspData
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
      { (this.props.event.group ) ? this.props.event.group.who : "Unknown" }
      
     </div>
     { !this.props.event.rsvp_limit? <div> Unlimited places </div>:
      <ResponsiveContainer height={200}>
     <PieChart >
     <Pie dataKey="value" isAnimationActive={true} data={this.getData()}  fill="#8884d8" label >
  
     {
          	this.getData().map((item) => <Cell fill={item.color}/>)
          }
          </Pie>
     <Tooltip />
     <Legend verticalAlign="middle" align="left" />
   </PieChart>
   </ResponsiveContainer>
     }
     

    <div className="attending">Attending: {this.props.event.yes_rsvp_count}</div>


     { this.state.showDetails? 
     <div className="extra_infos"> 
     <div className="address"> Address: 
     { !this.props.event.venue ? 
     "Unknown"
     :  this.props.event.venue.address_1
     + ", " +  this.props.event.venue.city
     + ", " + this.props.event.venue.localized_country_name }
     </div> 
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

