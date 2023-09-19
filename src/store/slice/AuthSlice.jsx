import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        status: 'not-authenticated',
        user: {},
        errorMessage: undefined,
        succesfullMessage: undefined
    },
    reducers: {

        setActiveUser: (state, /* action */ ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },

        onLoginUser: (state, {payload}) => {
          state.status = 'authenticated';
          state.user = payload;
          state.errorMessage = undefined;
        },

        onRegisterUser: (state, {payload}) => {
            state.status = "authenticated";
            state.user = payload;
            state.errorMessage = undefined;
        },

        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },

        onErrorMessage: (state, {payload}) => {
            state.isLoadingUser = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },

        onSuccesfullMessage: (state, {payload}) => {
            state.succesfullMessage = payload;
        },

        onClearErrorMessage: (state, {payload}) => {
            state.errorMessage = payload;
        }
        
    }
});

// Action creators are generated for each case reducer function
export const { setActiveUser, onLoginUser, onLogout, onErrorMessage, onClearErrorMessage, onRegisterUser, onSuccesfullMessage } = AuthSlice.actions;