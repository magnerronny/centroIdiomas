import { createSlice } from '@reduxjs/toolkit';

export const HorarioSlice = createSlice({
    name: 'Horario',
    initialState: {
        horario: [],
        errorMessageHorario: undefined,
    },
    reducers: {
        setHorarioEvent : (state, /* action */ ) => {
            state.horario = [];
            state.errorMessageHorario = undefined;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setHorarioEvent } = HorarioSlice.actions;