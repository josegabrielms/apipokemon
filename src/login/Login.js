import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Background2 from '../img/Background2.jpg'
import LockIcon from '@mui/icons-material/Lock'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${Background2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  },
  container: {
    opacity: '0.9',
    height: '70%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 10,
      width: '85%',
      height: '85%',
    }
  },
  divlog: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.main
  },
  formlog: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  buttonlog: {
    margin: theme.spacing(3, 0, 2)
  },
}))

export default function Login({ setUser }) {
  const classes = useStyles();
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);
  const [validar, setValidar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "" || contrasena === "") {
      setError(true)
      return
    }
    else if (usuario === "jose" && contrasena === "atenea") {
      setValidar(false)
      setError(false)
      history.push('/inicio')
      setUser([usuario, contrasena])
    }
    else {
      setValidar(true)
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
        <div className={classes.divlog}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>Autenticación</Typography>
          <form className={classes.formlog}>
            <TextField
              fullWidth
              autoFocus
              color='secondary'
              margin='normal'
              variant='outlined'
              label='Usuario'
              name='usuario'
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
            />
            <TextField
              fullWidth
              type='password'
              color='secondary'
              margin='normal'
              variant='outlined'
              label='Contraseña'
              name='contrasena'
              value={contrasena}
              onChange={e => setContrasena(e.target.value)}
            />
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.buttonlog}
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </Button>
          </form>
          {error && <p>¡Todos los campos son obligatorios!</p>}
          {validar && <p>¡El usuario o la contraseña son inválidos!</p>}
        </div>
      </Container>
    </Grid>
  );
}
