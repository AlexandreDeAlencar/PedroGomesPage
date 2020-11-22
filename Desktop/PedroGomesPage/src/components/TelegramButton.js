import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Telegram from '../images/telegram.svg'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#2CA4D7',
    color: "#FFFFFF"
  }
}));

  


export default function TelegramButton() {
  const classes = useStyles();

  const handleOpen = () => {
    window.open("https://web.telegram.org","_self");
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={ <img src={Telegram} alt="" width="40" height="40" /> } 
        size = "large"
        onClick={handleOpen}
      >
        QUERO PARTICIPAR
      </Button>
    </div>
  );
}