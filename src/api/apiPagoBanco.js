import axios from "axios";
import { getEnvVariablesEntorno } from "../helpers";

const { VITE_API_PAGO_BANCO_NACION } =  getEnvVariablesEntorno();

const apiPagoBanco = axios.create({
  baseURL: VITE_API_PAGO_BANCO_NACION
})

export default apiPagoBanco;