import axios from "axios";

const api = axios.create({
  baseURL: 'https://lockdownsnapshots.azurewebsites.net'
})

export const getCoronaDataApi = axios.create({
  baseURL: 'https://api.coronatracker.com/v5/analytics/trend'
})

export default api;