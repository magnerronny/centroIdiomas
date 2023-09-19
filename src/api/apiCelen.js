import axios from "axios";
import { getEnvVariablesEntorno } from "../helpers";

const { VITE_API_URL } =  getEnvVariablesEntorno();

const apiCelen = axios.create({
  baseURL: VITE_API_URL,
})


//Todo: configurar interceptores
// 
// apiCelen.interceptors.request.use( config => {
//   // config.headers = {
//     // ...config.headers,
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//   // }
 
//   return config
// })



export default apiCelen;

