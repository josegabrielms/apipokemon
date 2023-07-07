import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import FGfondo from '../img/FGfondo.jpg'
import AshLogo from '../img/AshLogo.png'
import { AppBar, Toolbar, CssBaseline, Button, IconButton, Typography, Drawer, Paper, Divider, Container } from '@material-ui/core'
import { Menu as MenuIcon } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        width: 240
    },
    divDrawer: {
        padding: 20,
        display: 'flex',
        alignItems: 'center'
    },
    imgDrawer: {
        height: 150,
        marginLeft: 25,
        marginRight: 'auto'
    },
    botonDrawerSup: {
        marginLeft: 20
    },
    botonDrawerInf: {
        marginLeft: 50,
        textTransform: 'none'
    },
    footer: {
        bottom: 0,
        position: 'fixed',
        width: '100%',
        background: 'white'
    },
    textoTitulo: {
        marginLeft: 20,
        marginRight: 20,
        fontSize: '1.4rem',
        textAlign: 'center'
    },
    textoAux: {
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center'
    },
    divFigura: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0.5em',
        marginBottom: '1em',
    },
    figuraInicio: {
        width: '550px',
        maxWidth: '85%',
        cursor: 'pointer',
    },
    divBoton: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
}))

export default function ListadoHome() {

    const classes = useStyles();
    const history = useHistory();
    const getUsuario=localStorage.getItem('usuario.Info');
    const getContrasena=localStorage.getItem('contrasena.Info');
    const [open, setOpen] = useState(false)

    const verifyLogin = () => {
        if (getUsuario&&getContrasena) {}
        else {history.push('/')}
    }

    const handleLogout = () => {
        localStorage.clear()
        history.push('/')
    }
    const irInicio = () => { history.push('/inicio') }
    const irPersonajes = () => { history.push('/pokemon') }
    const irDetalle = () => { 
        history.push('/detalle') 
    }

    return (
        <div>
            {verifyLogin()}

            <>
                <CssBaseline />
                <AppBar color='primary'>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography style={{ flexGrow: 1 }}>API POKÉMON</Typography>
                        <Button variant='text' color='inherit' onClick={handleLogout}>Cerrar sesión</Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                    <Paper className={classes.paper} elevation={0}>
                        <div className={classes.divDrawer} >
                            <IconButton edge='start' color='inherit' onClick={() => setOpen(false)}>
                                <MenuIcon />
                            </IconButton>
                            <img src={AshLogo} alt='Ash Ketchum' className={classes.imgDrawer} />
                        </div>
                        <Divider />
                        <Button variant='text' color='inherit' onClick={irInicio} className={classes.botonDrawerSup}>Página de Inicio</Button>
                        <Button variant='text' color='inherit' onClick={irPersonajes} className={classes.botonDrawerSup}>Listado Pokémon</Button>
                        <Divider />
                        <Button variant='text' color='inherit' onClick={irDetalle} className={classes.botonDrawerInf}>Detalle</Button>
                    </Paper>
                </Drawer>
                <footer className={classes.footer}>
                    <Container maxWidth='lg'>
                        <Typography align='center'>Jose Gabriel Mendoza Santos <br /> Todos a la U - {new Date().getFullYear()}</Typography>
                    </Container>
                </footer>
            </>

            {/* CONTENIDO */}
            <br /> <br /> <br /> <br />
            <Typography className={classes.textoTitulo} >
                <b>Bienvenido al inicio, {getUsuario}</b>
            </ Typography>
            <div className={classes.divFigura}>
                <img src={FGfondo} className={classes.figuraInicio} alt="Fondo Pokémon" onClick={irPersonajes} />
            </div>
            <Typography className={classes.textoAux}>
                En esta página podrás conocer un poco más acerca de los Pokémon.
            </Typography>
            <br />
            <div className={classes.divBoton}>
                <Button className={classes.buttonlog} variant='contained' color='primary' onClick={irPersonajes}>Ver Pokémon</Button>
            </div>
            <br /> <br /> <br /> <br />
        </div>
    );
}
