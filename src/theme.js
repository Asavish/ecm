import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F',
    },
    secondary: {
      main: '#333333',
    },
    accent: {
      main: '#A0A0A0', // grey
    },
    background: {
      default: '#FFFFFF', // white
    },
    hover: {
      main: '#B71C1C',
    },
    text: {
      default: '#FFFFFF', // white
      primary: '#333333',
    },
  },
});

export default theme;