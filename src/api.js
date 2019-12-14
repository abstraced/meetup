import axios from 'axios';

import { mockEvents } from './mock-events';




  function getAccessToken() {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');
  
      if (!code) {
        window.location.href = 'https://secure.meetup.com/oauth2/authorize?client_id=230kg5vud5f4ukl907980hdqj4&response_type=code&redirect_uri=http://abstraced.github.io/meetup';
        return null;
      }
      
      return getOrRenewAccessToken('get', code);
    }

    /// TEST  
    const lastSavedTime = localStorage.getItem('last_saved_time');

    if (accessToken && (Date.now() - lastSavedTime < 3600000)) {
      return accessToken;
    }
    
     // If the access_token is expired, we try to renew it by using refresh_token
    const refreshToken = localStorage.getItem('refresh_token');
    return getOrRenewAccessToken('renew', refreshToken);

    

  }

  async function getOrRenewAccessToken(type, key) {
    let url;
    if (type === 'get') {
      // Lambda endpoint to get token by code
      url = 'https://9c8wf1t6k9.execute-api.eu-central-1.amazonaws.com/dev/api/token/'
        + key;
    } else if (type === 'renew') {
      // Lambda endpoint to get token by refresh_token
      url = 'https://9c8wf1t6k9.execute-api.eu-central-1.amazonaws.com/dev/api/refreshtoken/'
        + key;
    }
  
    // Use Axios to make a GET request to the endpoint
    const tokenInfo = await axios.get(url);
  
    // Save tokens to localStorage together with a timestamp
    localStorage.setItem('access_token', tokenInfo.data.access_token);
    localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
    localStorage.setItem('last_saved_time', Date.now());
  
    // Return the access_token
    return tokenInfo.data.access_token;
  }





/// GET DATA FROM API

// GET EVENT
  async function getEvents(lat, lon) {
    if (window.location.href.startsWith('http://localhost')) {
    return mockEvents.events;
  }
  const token = await getAccessToken();
  if (token) {
    let url = 'https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public'
      + '&access_token=' + token;
    // lat, lon is optional; if you have a lat and lon, you can add them
    if (lat && lon) {
      url += '&lat=' + lat + '&lon=' + lon;
    }
    const result = await axios.get(url);
    return result.data.events;
  }
   
  }


/// GET SUGGESTIONS

  async function getSuggestions(query) {
    if (window.location.href.startsWith('http://localhost')) {
      return [
        {
          city: 'Munich',
          country: 'de',
          localized_country_name: 'Germany',
          name_string: 'Munich, Germany',
          zip: 'meetup3',
          lat: 48.14,
          lon: 11.58
        },
        {
          city: 'Munich',
          country: 'us',
          localized_country_name: 'USA',
          state: 'ND',
          name_string: 'Munich, North Dakota, USA',
          zip: '58352',
          lat: 48.66,
          lon: -98.85
        }
      ];
    }
  
    const token = await getAccessToken();
    if (token) {
      const url = 'https://api.meetup.com/find/locations?&sign=true&photo-host=public&query='
        + query
        + '&access_token=' + token;
      const result = await axios.get(url);
      return result.data;
    }
    return [];
  }

  export { getSuggestions, getEvents, getAccessToken };