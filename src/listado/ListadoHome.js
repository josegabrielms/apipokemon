import React from 'react'
import { useHistory } from 'react-router-dom'
import FGfondo from '../img/FGfondo.jpg'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    buttonlog: {
        margin: theme.spacing(3, 0, 2),
        alignContent: 'left',
        alignItems: 'left'
    },
    figuraInicio: {
        height: '40vh',
    },
}))

export default function ListadoHome({ user, setUser }) {

    const classes = useStyles();
    const history = useHistory();

    const verifyLogin = () => {
        if (user.length < 1) {
            history.push('/')} 
      }

    const handleLogout = () => {
        setUser([])
        history.push('/')} 

    const irPersonajes = () => {
        history.push('/personajes')
    }

    return (
        <div>
            {verifyLogin()}
            <Button
                className={classes.buttonlog}
                variant='contained'
                color='secondary'
                onClick={handleLogout}
            >Cerrar sesión</Button>
            <h1>Bienvenido a home, {user[0]}</h1>
            <img src={FGfondo} className={classes.figuraInicio} alt="Family guy logo" />
            <br />
            <Button
                className={classes.buttonlog}
                variant='contained'
                color='secondary'
                onClick={irPersonajes}
            >Ver personajes principales</Button>
        </div>
    );
}
