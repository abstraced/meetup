(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),o=n.n(s),c=(n(26),n(2)),i=n(6),l=n(4),u=n(3),p=n(5),h=(n(27),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},n.toggleDetails=function(e){n.setState({showDetails:!n.state.showDetails})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"date"},"Date: ",this.props.event.local_date,"  ",this.props.event.local_time),r.a.createElement("div",{className:"what"},"What: ",this.props.event.name),r.a.createElement("div",{className:"who"}," Who:",this.props.event.group?this.props.event.group.who:"Unknown"),r.a.createElement("div",{className:"attending"},"Attending: ",this.props.event.yes_rsvp_count),this.state.showDetails?r.a.createElement("div",{className:"extra_infos"},r.a.createElement("div",{className:"address"}," Address:",this.props.event.venue?this.props.event.venue.address_1+", "+this.props.event.venue.city+", "+this.props.event.venue.localized_country_name:"Unknown"),r.a.createElement("div",{className:"description"},"Description: ",this.props.event.description),r.a.createElement("div",{className:"type_of_event"},"Type of event: ",this.props.event.visibility),r.a.createElement("div",{className:"link"}," Link:  ",this.props.event.link," "),r.a.createElement("button",{className:"toggleInfos",onClick:function(){return e.toggleDetails()}}," Less details ")):r.a.createElement("button",{className:"toggleInfos",onClick:function(){return e.toggleDetails()}}," More details "))}}]),t}(a.Component)),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))})))}}]),t}(a.Component),f=n(7),d=n.n(f),m=n(8),g=n.n(m);function b(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?w("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=230kg5vud5f4ukl907980hdqj4&response_type=code&redirect_uri=http://abstraced.github.io/meetup",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:w("renew",localStorage.getItem("refresh_token"))}function w(e,t){var n,a;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return"get"===e?n="https://9c8wf1t6k9.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+t:"renew"===e&&(n="https://9c8wf1t6k9.execute-api.eu-central-1.amazonaws.com/dev/api/refreshtoken/"+t),r.next=3,d.a.awrap(g.a.get(n));case 3:return a=r.sent,localStorage.setItem("access_token",a.data.access_token),localStorage.setItem("refresh_token",a.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),r.abrupt("return",a.data.access_token);case 8:case"end":return r.stop()}}))}function y(e,t,n){var a,r,s;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,d.a.awrap(b());case 2:if(!(a=o.sent)){o.next=12;break}return r="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+a,e&&t&&(r+="&lat="+e+"&lon="+t),n&&(r+="&page="+n),e&&t&&n&&(r+="&lat="+e+"&lon="+t+"&page="+n),o.next=10,d.a.awrap(g.a.get(r));case 10:return s=o.sent,o.abrupt("return",s.data);case 12:case"end":return o.stop()}}))}var k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="blue",n}return Object(p.a)(t,e),t}(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component)),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){var t,n,a;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(b());case 2:if(!(t=r.sent)){r.next=9;break}return n="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+e+"&access_token="+t,r.next=7,d.a.awrap(g.a.get(n));case 7:return a=r.sent,r.abrupt("return",a.data);case 9:return r.abrupt("return",[]);case 10:case"end":return r.stop()}}))}(t).then((function(e){n.setState({suggestions:e}),t&&0===e.length?n.setState({infoText:"We can not find the city you are looking for. Please try another city"}):n.setState({infoText:""})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(k,{text:this.state.infoText}),r.a.createElement("input",{placeholder:"city",onChange:this.handleInputChanged,value:this.state.query,type:"text",className:"city"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)},key:t.name_string},t.name_string)}))))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({numberOfEvents:t}),n.props.updateEvents(null,null,t),t<1?n.setState({infoText:"The value cannot be negative or 0"}):n.setState({infoText:""})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(k,{text:this.state.infoText}))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,lat:null,lon:null},n.updateEvents=function(e,t,a){e&&t?y(e,t,n.state.page).then((function(a){return n.setState({events:a.events,lat:e,lon:t})})):a?y(n.state.lat,n.state.lon,a).then((function(e){return n.setState({events:e.events,page:a})})):y(n.state.lat,n.state.lon,n.state.page).then((function(e){return n.setState({events:e.events})}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({events:t.events})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{updateEvents:this.updateEvents}),r.a.createElement(O,{updateEvents:this.updateEvents}),r.a.createElement(v,{events:this.state.events}))}}]),t}(a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=n(20);o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");_?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}(),S.config("adde2723cba74f219e6d43f78ac40f2e").install()}},[[21,1,2]]]);
//# sourceMappingURL=main.763de6e2.chunk.js.map