import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import pedroLogo from '../images/pedroLogo.svg'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#001D24',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const accent = purple.A200; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // color:"#001D24", 
    //  width: '100vw',

    boxShadow: "0px 3px #00000093",
    // filter: 'blur(6px)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    boxShadow: "0px 3px 6px #00000093",
  },
}));

export default function HeaderToolbar() {
  const classes = useStyles();

  return (
      <div className={classes.root} >
        <ThemeProvider theme={theme}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar className={classes.AppBar}>
            <Grid container item spacing={0} item  alignContent='center' alignItems='center' justify='center'>
                <img src={pedroLogo}  />
            </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </div>
  );
}