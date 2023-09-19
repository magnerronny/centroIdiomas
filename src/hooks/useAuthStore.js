import { useDispatch, useSelector } from "react-redux"
import { apiCelen } from "../api";
import { onClearErrorMessage, onLoginUser, onLogout, onRegisterUser } from "../store/slice/AuthSlice";
import { onSetEspecialidadEstudiante, onSetEstadoEstudiante } from "../store";

export const useAuthStore = () => {
  
  const {status, user, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startLoginUser = async({email, password}) => {
    console.log({email, password})
    try {
      
      // const {data} = await apiCelen.post('/sing-in', {login:email, password:password});
      // localStorage.setItem('token',data.token)
      // apiCelen.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      // dispatch(onLoginUser({email, token:data.token}));
      dispatch(onLoginUser({email, password}));

    } catch (error) {
      dispatch(onLogout(error.response.data.error));
      setTimeout(() => {
        dispatch(onClearErrorMessage());
      }, 5000);
    }
  }

  const startSavingUser = async({apellidoPaterno, apellidoMaterno, nombres, email, celular, password}) => {
    try {
      const data =  await apiCelen.post({apellidoPaterno, apellidoMaterno, nombres, email, celular, password});
      
      localStorage.setItem('token', data.token);
      apiCelen.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      dispatch(onRegisterUser({email, password}));

    } catch (error) {
      console.log(error)
    }
  } 


  const startOnLogout  = () => {
    localStorage.clear();
    delete apiCelen.defaults.headers.common['Authorization']; 
    dispatch(onLogout());
    dispatch(onSetEspecialidadEstudiante());
    dispatch(onSetEstadoEstudiante());
  }

    
  return {
    //* Propiedades
    status, 
    user,
    errorMessage,
    //* Metodos
    startLoginUser,
    startSavingUser,
    startOnLogout
  }
}
