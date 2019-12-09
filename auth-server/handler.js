'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=230kg5vud5f4ukl907980hdqj4'
    + '&client_secret=cjeakcm88l2gs8lcepfbje4frv'
    + '&grant_type=authorization_code'
    + '&redirect_uri=http://abstraced.github.io/meetup'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);
  // localStorage.setItem('token', "yup");
  
  return {
    
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
    
  };
  
};



module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_REFRESH = 'https://secure.meetup.com/oauth2/access'
  + '?client_id=230kg5vud5f4ukl907980hdqj4'
  + '&client_secret=cjeakcm88l2gs8lcepfbje4frv'
  + '&grant_type=refresh_token'
  + '&refresh_token=' + event.pathParameters.refresh;
  + '&refresh_token=42df23d20d066190609e190171';    //test 





  // https://9c8wf1t6k9.execute-api.eu-central-1.amazonaws.com/dev/api/refreshtoken/42df23d20297cf3d066190609e190171

  const info = await axios.post(MEETUP_OAUTH_REFRESH);


  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token
     
    }),
  };
  









}