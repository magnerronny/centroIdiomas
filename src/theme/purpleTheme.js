import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#D3DEE4',
    },
    secondary: {
      main: '#d3dee4',
    },
    error: {
      main: red.A400,
    },
  },
});
