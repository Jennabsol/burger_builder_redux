import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
  });
  
  // Alter defaults after instance has been created
  instance.defaults.headers.common['Authorization'] = 'Token e66ba854f2f3ff6c27b048b759cbe4b3e8446eff'; 

export default instance;