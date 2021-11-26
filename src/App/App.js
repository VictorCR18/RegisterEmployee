import React from 'react';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PageHeader from '../components/PageHeader'
import Employees from "../pages/Employees/Employees";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Confirm from '../components/Confirm';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#253053"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    width: '100%',
    paddingTop: '50px' ,
    paddingLeft: '350px',
    paddingRight: '350px'
  }
})

function App() {
  const classes = useStyles();

  return (
    <div>
    <ThemeProvider theme={theme}>
    <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
      <div className={classes.appMain}>
        
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
    <Confirm />
     </div>
  );

}
 
export default App;
