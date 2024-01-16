import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  blue:'#241468',
  purple :'#9F0D7F',
  white:'#FFFFFF',
 pink:  '#EA1179',
 black:'#B4ABAB',
 gradient :"linear-gradient(to right, #F7D5ED, #FCEFF8)",
 gradient2 :"linear-gradient(to bottom, #C9E7F2, #E7F6FD)",
  palette: {
    primary: {
      main: '#F7941D',
    },
    secondary: {
      main: '#0F75BC',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', // Specify the default font family here

    h6: {
      color: '#000000', // Your custom color for h1

    },
    subtitle2: {
      color: '#F7941D', // Your custom color for h2

    },
    subtitle1: {
      color: '#1D1D1D', // Your custom color for body1


    },
    body2: {
      color: '#1D1D1D', // Your custom color for 


    },
    body1: {
      color: '#3C3737', // Your custom color for 


    },
    // Add more typography styles as needed
  },



 
  
});

export default theme;