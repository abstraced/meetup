import React, { Component } from 'react';
import './Event.css';


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
    <div className="date"><span className="theWs">When:</span> {this.props.event.local_date}  {this.props.event.local_time}</div>
    <div className="what"><span className="theWs">What:</span> {this.props.event.name}</div>

    <div className="who"> <span className="theWs">Who:</span> 
      { (this.props.event.group ) ? this.props.event.group.who : "Unknown" }
      
     </div>
     { !this.props.event.rsvp_limit? <div className="chart"> Unlimited places </div>:
      <ResponsiveContainer className="chart" height={200}>
     <PieChart >
     <Pie dataKey="value" isAnimationActive={true} data={this.getData()}  fill="#8884d8" label >
  
     {
          	this.getData().map((item) => <Cell fill={item.color}/>)
          }
          </Pie>
     <Tooltip />
     <Legend verticalAlign="bottom" align="right" />
   </PieChart>
   </ResponsiveContainer>
     }
     

    <div className="attending"><span className="theWs">Attending:</span> {this.props.event.yes_rsvp_count}</div>
    <button className="toggleInfos" onClick={() => this.toggleDetails()}> Less details </button> 

     { this.state.showDetails? 
     <div className="extra_infos"> 
     <div className="address"> <span className="theWs">Where:</span> 
     { !this.props.event.venue ? 
     "Unknown"
     :  this.props.event.venue.address_1
     + ", " +  this.props.event.venue.city
     + ", " + this.props.event.venue.localized_country_name }
     </div> 
     <div className="description" dangerouslySetInnerHTML={{ __html: this.props.event.description}}> </div> 
     <div className="type_of_event"><span className="theWs">Type of event:</span> {this.props.event.visibility}</div> 
     <div className="link"> <span className="theWs">Link: </span> {this.props.event.link} </div> 



     
     </div> : 
     null
     
     
     
     

     }
         
     
      </div>
    );
  }
}

export default Event;

