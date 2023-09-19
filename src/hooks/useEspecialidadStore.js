import { useDispatch, useSelector } from "react-redux"
import { apiCelen } from "../api";
import { onLoadEspecialidadEstudiante, onLoadEstadoEstudiante } from "../store";

export const useEspecialidadStore = () => {
  const { especialidadEstudiante, estadoEstudiante, errorMessageEspecialidadEstudiante, errorMessageEstadoEstudiante } = useSelector( state => state.especialidad );
  const dispatch = useDispatch();

  const startOnLoadingEspecialidadEstudiante = async() => {
    try {
      const {data} = await apiCelen.get('/student/specialties');
      console.log(data.data);
      console.log(apiCelen.defaults.headers.common['Authorization'])
      dispatch(onLoadEspecialidadEstudiante(data.data));
    } catch (error) {
      console.log("error al obtener la especialdad del estudiante");
      console.log(error);
    }
  }

  const startOnLoadingEstadoEstudiante = async() => {
    try {
      console.log(especialidadEstudiante);
      const {data} = await apiCelen.get(`/student/specialty/${especialidadEstudiante[0].codigo}`);
      console.log(data.data);
      const newData = [];
      
      const {des_cur, nom_esp, des_sec, escrito, des_mes} = data.data.lastEnrollment;
      
      newData.push({des_cur, nom_esp, des_sec, escrito, des_mes})


      // data.data.lastEnrollment.map(item => newData.push({
      //   des_cur : item.des_cur,
      //   nom_esp : item.nom_esp,
      //   des_sec : item.des_sec,
      //   escrito : item.escrito,
      //   des_mes : item.des_mes,
      // }))
     
      
      console.log(newData);
      dispatch(onLoadEstadoEstudiante(newData));
    } catch (error) {
      console.log(error)
    }
  }   
  return {

    //* Propiedades
    especialidadEstudiante,
    estadoEstudiante,
    errorMessageEspecialidadEstudiante,
    errorMessageEstadoEstudiante,
    //* Metodos
    startOnLoadingEspecialidadEstudiante,
    startOnLoadingEstadoEstudiante, 
  }
}

