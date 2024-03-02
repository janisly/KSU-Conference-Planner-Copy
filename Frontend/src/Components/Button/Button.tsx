import * as React from 'react';
import { Button,Stack } from '@mui/material'


import { createTheme, ThemeProvider } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const theme = createTheme({
    palette: {

        primary:{
            main : '#512888'
        },
        warning: {
          main : '#C62828'
        }
    } 
})

export const MuiButton = () => {
    return (
      <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained" color="primary">Sign Up</Button>
        <Button variant="contained" color="success">Submit</Button>
        <Button variant="contained" color="warning">Delete</Button>
      </div>
      </ThemeProvider>
    );
    
}

export const MuiSignUpButton = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <div>
      
      <Button variant="contained" color="primary" endIcon={<OpenInNewIcon/>}>Log In with K-State</Button>
    
    </div>
    </ThemeProvider>
  );

  
}