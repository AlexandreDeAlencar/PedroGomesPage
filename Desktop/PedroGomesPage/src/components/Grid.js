import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeaderToolbar from './Toolbar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';
import TelegramButton from './TelegramButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#001D24', 
    width: '100vw',
    // height: '100vh',
    spacing: 0,
    justify: 'space-around'
  },
  root2: {
    flexGrow: 1,
    backgroundColor: '#001D24', 
    width: '100vw',
    // height: '100vh',
    // marginBottom: "20px",
    justify: 'space-around'
  },
  root3: {
    flexGrow: 1,
    backgroundColor: '#001D24', 
    width: '100vw',
    // height: '100vh',
    // marginBottom: '16px',
    justify: 'space-around',
    marginLeft:'35px',
    marginRight:'35px',
    whiteSpace:"pre-line"

  },
  root4: {
    flexGrow: 1,
    backgroundColor: '#001D24', 
    width: '100vw',
    height: '100vh',
    // marginBottom: '16px',
    justify: 'space-around',
    marginLeft:'35px',
    marginRight:'35px',
    whiteSpace:"pre-line"

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 24,
    color:'#FF7E27',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '8px',
    whiteSpace:"pre-line"
  },
  subtitleLight: {
    fontSize: 16,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginBottom: '8px',
    whiteSpace:"pre-line"

  },
  subtitleBold: {
    fontSize: 15,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: '15px',
    whiteSpace:"pre-line"

  },
  title2: {
      fontSize: 16,
      color:'#FF7E27',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      marginBottom: '15px',
      whiteSpace:"pre-line"

  },
}));

export default function CenteredGrid() {
const classes = useStyles();
const [terms, setTerms] = React.useState(false)


  return (
      <Grid className={classes.root}  container item spacing={0}  xs={12} sm={12} item alignContent='center' alignItems='center' justify='center' 
      direction="column" >

        <Grid className={classes.root2} container item spacing={0} item  alignContent='center' alignItems='center' justify='center'>
            <HeaderToolbar/>
        </Grid>

        <Grid className={classes.root3}  item spacing={0} item  alignContent='center' alignItems='center' justify='center'>
          <Typography className={classes.title} align="center"  noWrap>
              Faça parte do canal exclusivo do Telegram
          </Typography>
          <Typography className={classes.subtitleLight}   align="center" noWrap>
            Clique e cadastre-se para 
          </Typography>
          <Typography  className={classes.subtitleBold}   align="center" noWrap>
            receber exclusivamente conteúdos diários de exercícios físicos, emagrecimento e ganho de massa magra!
          </Typography>
          <Typography  className={classes.title2}  align="center" noWrap>
            100% gratuito!
          </Typography>
        </Grid>

        <Grid className={classes.root} container item spacing={0} item alignContent='center' alignItems='center' justify='center'>
          <TelegramButton/>
        </Grid>

        <Grid className={classes.root4}  item spacing={0} item  alignContent='center' alignItems='center' justify='center'>
        </Grid>
  </Grid>
  );
}