import { useDispatch, useSelector } from "react-redux"
import { apiPagoBanco } from "../api";
import { onClearErrorMessagePagoBanco, onErrorMessagePagoBanco, onPagoBanco, onSetPagoBanco } from "../store";

export const usePagoBancoStore = () => {
  
  const {pagoBanco, errorBancoMessage} = useSelector(state => state.pagoBn);
  const dispatch = useDispatch();

  const startPagoBanco = async(nrodni, secuencia, monto, mes) => {
    // console.log(dni);
    try {
      const {data} = await apiPagoBanco.get(`?w=${nrodni}&s=${secuencia}&a=${monto}&m=${mes}`);
      console.log(data);
      if(data.data.length === 0) {
        dispatch(onErrorMessagePagoBanco("recuerde, si realizo el pago por este medio puede matricularse despues de 24 horas haber realizado su pago"));
        setTimeout(() => {
          dispatch(onClearErrorMessagePagoBanco());
        }, 3000);
        return;
      }

      dispatch(onPagoBanco(data.data));

    } catch (error) {
      console.log(error);
      dispatch(onErrorMessagePagoBanco(error.response.data.error));
      setTimeout(() => {
        dispatch(onClearErrorMessagePagoBanco());
        // dispatch(onSetPagoBanco());
      }, 3000);
    }
  }

  const confirmarPagoBancoNacion = () => {
    dispatch(onSetPagoBanco());
  }

  const initialValueStateBanco = () => {
    dispatch(onSetPagoBanco());
  }
    
  return {
    //* propiedades
    pagoBanco,
    errorBancoMessage,
    //* metodos
    startPagoBanco,
    confirmarPagoBancoNacion,
    initialValueStateBanco
  }
}
