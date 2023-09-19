import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, PagoOnlineSlice, PagoBnSlice, HorarioSlice, EspecialidadSlice } from "./";

export const store = configureStore({
  reducer: {
    auth:  AuthSlice.reducer,
    pagoOnline: PagoOnlineSlice.reducer,
    pagoBn: PagoBnSlice.reducer,
    horario: HorarioSlice.reducer,
    especialidad: EspecialidadSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }) 
})


  
