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
      main: '#A0A0A0', // grey
      primary : '#000000', // black
      secondary : '#BA181B' //red
    },
    hover: {
      main: '#B71C1C',
    },
    text: {
      default: '#FFFFFF', // white
      main: '#A0A0A0', // grey
      primary: '#333333',
      secondary : '#000000', // black
    },
    fontStyle : [
      {
        fontFamily : 'Roboto, lato'
      }
    ]
  },
});

export default theme;