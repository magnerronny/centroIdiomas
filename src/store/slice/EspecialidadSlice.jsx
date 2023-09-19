import { createSlice } from "@reduxjs/toolkit";

export const EspecialidadSlice = createSlice({
  name: "Especialidad",
  initialState: {
    especialidadEstudiante: [],
    estadoEstudiante: [],
    errorMessageEspecialidadEstudiante: undefined,
    errorMessageEstadoEstudiante: undefined,
  },
  reducers: {
    onSetEspecialidadEstudiante: (state) => {
      state.especialidadEstudiante = [];
      state.errorMessageEspecialidadEstudiante = undefined;
    },

    onSetEstadoEstudiante: (state) => {
      state.estadoEstudiante = [];
      state.errorMessageEstadoEstudiante = undefined;
    },

    onLoadEspecialidadEstudiante: (state, { payload }) => {
      state.especialidadEstudiante = payload;
      state.errorMessageEspecialidadEstudiante = undefined;
    },

    onLoadEstadoEstudiante: (state, { payload }) => {
      state.estadoEstudiante = payload;
      state.errorMessageEstadoEstudiante = undefined;
    },

    onErrorMessageEstudianteEspecialidad: (state, { payload }) => {
      state.errorMessageEspecialidadEstudiante = payload;
      state.especialidadEstudiante = [];
    },

    onErrorMessageEstadoEstudiante: (state, { payload }) => {
      state.errorMessageEstadoEstudiante = payload;
      state.estadoEstudiante = [];
    },

    onClearEspecialidadEstudiante:(state, {payload})=>{
        state.errorMessageEspecialidadEstudiante = payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetEstadoEstudiante,
  onSetEspecialidadEstudiante,
  onLoadEstadoEstudiante,
  onLoadEspecialidadEstudiante,
  onErrorMessageEstadoEstudiante,
  onErrorMessageEstudianteEspecialidad,
} = EspecialidadSlice.actions;
