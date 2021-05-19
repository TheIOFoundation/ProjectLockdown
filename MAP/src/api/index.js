import axios from 'axios';

const BASE_URL ="https://stoplight.io/mocks/theiofoundation/projectlockdown/3888793/";

const api = axios.create({
  baseURL: 'https://lockdownsnapshots.azurewebsites.net',
});

export const getCoronaDataApi = axios.create({
  baseURL: 'https://api.coronatracker.com/v5/analytics/trend',
});


export const getEnvironments = () => {
  return fetch(BASE_URL + "Environments/0/MAP/0", {
    "method": "GET",
    "headers": {}
  }).then(response => {
    const contentType = response.headers.get('content-type');
    if(contentType && contentType.indexOf('application/json') > -1){
      return response.json().then(json => {
        if ([200, 403].indexOf(response.status) === -1)
            return Promise.reject(json)
        if ([304, 403].indexOf(response.status) > -1)
            window.location.reload()
        if (Array.isArray(json))
            return [...json]
        else
            return {...json}
      });
    }else{
      return {};
    }
  }).catch(error => {
    console.log('***** Inside Catch',error)
    if(error instanceof TypeError)
      window.location.reload()
});
}

export const fetchEnvironments = async () =>{
   return fetch('./data/environment.response.json').then(r => r.json())
  .catch(e => { throw new Error(e.toString())})
}
export default api;
