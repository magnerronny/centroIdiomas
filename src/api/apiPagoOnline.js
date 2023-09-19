import axios from "axios";
import { getEnvVariablesEntorno } from "../helpers";

const { VITE_API_PAGO_ONLINE } =  getEnvVariablesEntorno();

const apiPagoOnline = axios.create({
  baseURL: VITE_API_PAGO_ONLINE
})

export default apiPagoOnline;