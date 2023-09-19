import { createSlice } from '@reduxjs/toolkit';

export const PagoBnSlice = createSlice({
    name: 'PagoBn',
    initialState: {
        eventActiveBanco: true,
        pagoBanco: [],
        errorBancoMessage: undefined
    },
    reducers: {
      onSetPagoBanco: (state) =>{
        state.eventActiveBanco = true;
        state.pagoBanco = [];
        state.errorBancoMessage = undefined;
      },

      onPagoBanco: (state, {payload} ) => {
          state.eventActiveBanco = false;
          state.pagoBanco = payload;
          state.errorBancoMessage = undefined;
      },

      onErrorMessagePagoBanco: (state, {payload}) => {
        state.eventActiveBanco = true;
        state.pagoBanco = [];
        state.errorBancoMessage = payload;
      },

      onClearErrorMessagePagoBanco: (state, {payload}) => {
        state.errorBancoMessage = payload;
      }
    }
});

// Action creators are generated for each case reducer function
export const { onSetPagoBanco, onPagoBanco, onErrorMessagePagoBanco, onClearErrorMessagePagoBanco } = PagoBnSlice.actions;
