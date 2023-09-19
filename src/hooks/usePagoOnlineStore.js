import { useDispatch, useSelector } from "react-redux"
import { apiPagoOnline } from "../api";
import { onPagoOnline, onSetPagoOnline, onErrorMessagePagoOnline, onClearErrorMessagePagoOnline } from "../store/slice/PagoOnlineSlice";
// import {  } from "../store";

export const usePagoOnlineStore = () => {
  const {eventActiveOnline, pagoOnline, errorPagoOnlineMessage} = useSelector( state => state.pagoOnline );
  const dispatch = useDispatch();

  const startPagoOnline = async(dni) => {
    dispatch(onSetPagoOnline());
    try {
      const {data} = await apiPagoOnline.get(`/${dni}/`)
      if(data.length === 0){
        dispatch(onErrorMessagePagoOnline("No se valido el pago"));
        setTimeout(() => {
          dispatch(onClearErrorMessagePagoOnline())
        }, 3000);

        return;
      }
      dispatch(onPagoOnline(data));
    } catch (error) {
      console.log(error);
    }
  }

  const confirmandoPagoOnline = async() => {
    // setTimeout(() => {
      dispatch(onSetPagoOnline())
    // }, 4000);
  }

  const initialValueState = () => {
    dispatch(onSetPagoOnline());
  }

  return {
    //*parametros
    eventActiveOnline,
    pagoOnline,
    errorPagoOnlineMessage, 
    //*metodos
    startPagoOnline,
    confirmandoPagoOnline,
    initialValueState
  }
}


