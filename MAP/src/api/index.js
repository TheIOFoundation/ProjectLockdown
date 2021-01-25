import axios from "axios";

const api = axios.create({
  baseURL: 'https://lockdownsnapshots.azurewebsites.net/'
})

export default api;