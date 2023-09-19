import { createSlice } from '@reduxjs/toolkit';

export const PagoOnlineSlice = createSlice({
    name: 'PagoOnline',
    initialState: {
      eventActiveOnline: true,  
      pagoOnline: [],
      errorPagoOnlineMessage: undefined,
      sendPago:{},

    },
    reducers: {

        onSetPagoOnline: (state) =>{
          state.eventActiveOnline = true;
          state.pagoOnline = [];
          state.errorPagoOnlineMessage= undefined;
        },

        onPagoOnline: (state, {payload} ) => {
            state.eventActiveOnline = false;
            state.pagoOnline = payload;
            state.errorPagoOnlineMessage = undefined;
        },

        onConfirmPagoOnline: (state, {payload}) => {
          state.sendPago = payload;
        },

        onErrorMessagePagoOnline: (state, {payload}) => {
          state.errorPagoOnlineMessage = payload;
        },

        onClearErrorMessagePagoOnline: (state, {payload}) => {
          state.errorPagoOnlineMessage = payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { onClearErrorMessagePagoOnline, onErrorMessagePagoOnline, onPagoOnline, onSetPagoOnline } = PagoOnlineSlice.actions;

