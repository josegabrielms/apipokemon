import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import brianGriffin from '../img/brianGriffin.png'
import PeterLogo from '../img/PeterLogo.png'
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
        height: 100,
        marginLeft: 30,
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
        textAlign: 'justify'
    },
    container: {
        marginTop: theme.spacing(0.5)
    },
    divFigura: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0.5em',
        marginBottom: '1em',
    },
    figuraPersonaje: {
        width: '500px',
        maxWidth: '85%',
    },
    divBoton: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
}))

export default function BrianG({ user, setUser }) {

    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false)

    const verifyLogin = () => {
        if (user.length < 1) {
            history.push('/')
        }
    }

    const handleLogout = () => {
        setUser([])
        history.push('/')
    }
    const irInicio = () => { history.push('/inicio') }
    const irPersonajes = () => { history.push('/personajes') }
    const irPeterG = () => { history.push('/petergriffin') }
    const irLoisG = () => { history.push('/loisgriffin') }
    const irMegG = () => { history.push('/meggriffin') }
    const irChrisG = () => { history.push('/chrisgriffin') }
    const irStewieG = () => { history.push('/stewiegriffin') }
    const irBrianG = () => { history.push('/briangriffin') }

    return (
        <div>
            {verifyLogin()}

            <>
                <CssBaseline />
                <AppBar color='secondary'>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography style={{ flexGrow: 1 }}>FAMILY GUY</Typography>
                        <Button variant='text' color='inherit' onClick={handleLogout}>Cerrar sesión</Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                    <Paper className={classes.paper} elevation={0}>
                        <div className={classes.divDrawer} >
                            <IconButton edge='start' color='inherit' onClick={() => setOpen(false)}>
                                <MenuIcon />
                            </IconButton>
                            <img src={PeterLogo} alt='Peter Griffin' className={classes.imgDrawer} />
                        </div>
                        <Divider />
                        <Button variant='text' color='inherit' onClick={irInicio} className={classes.botonDrawerSup}>Página de Inicio</Button>
                        <Button variant='text' color='inherit' onClick={irPersonajes} className={classes.botonDrawerSup}>Personajes</Button>
                        <Divider />
                        <Button variant='text' color='inherit' onClick={irPeterG} className={classes.botonDrawerInf}>Peter Griffin</Button>
                        <Button variant='text' color='inherit' onClick={irLoisG} className={classes.botonDrawerInf}>Lois Griffin</Button>
                        <Button variant='text' color='inherit' onClick={irMegG} className={classes.botonDrawerInf}>Meg Griffin</Button>
                        <Button variant='text' color='inherit' onClick={irChrisG} className={classes.botonDrawerInf}>Chris Griffin</Button>
                        <Button variant='text' color='inherit' onClick={irStewieG} className={classes.botonDrawerInf}>Stewie Griffin</Button>
                        <Button variant='text' color='inherit' onClick={irBrianG} className={classes.botonDrawerInf}>Brian Griffin</Button>
                    </Paper>
                </Drawer>
                <footer className={classes.footer}>
                    <Container maxWidth='5m'>
                        <Typography align='center'>Jose Gabriel Mendoza Santos <br /> Todos a la U - {new Date().getFullYear()}</Typography>
                    </Container>
                </footer>
            </>

            <Container maxWidth='lg' component={Paper} className={classes.container}>
            {/* CONTENIDO */}
            <br /> <br /> <br /> <br />
            <Typography className={classes.textoTitulo} ><b>Brian Griffin</b></ Typography>
            <div className={classes.divFigura}>
                <img src={brianGriffin} className={classes.figuraPersonaje} alt="Brian Griffin"/>
            </div>
            <Typography className={classes.textoAux}>
            Brian Griffin Es unos de los personajes principales de Padre de Familia. Es un perro labrador y la 
            mascota de la Familia Griffin.
            </Typography>
            <br/>
            <Typography className={classes.textoTitulo} ><b>Historia</b></ Typography>
            <br />
            <Typography className={classes.textoAux}>
            Brian Griffin (también conocido como el perro de Padre de Familia) podría ser considerado, junto a 
            Stewie, como el personaje más inteligente de la serie. Al igual que ocurre con Lisa en Los Simpson, 
            en Padre de Familia Brian es la voz de la razón, aunque eso no signifique que siempre tome las 
            decisiones correctas. <br /> <br />

            Este perro labrador y mascota de los Griffin es el mejor amigo de Peter y gran aliado de Stewie, 
            siendo el único del núcleo familiar que parece entenderle.
            </Typography>
            <br />
            <div className={classes.divBoton}>
                <Button className={classes.buttonlog} variant='contained' color='secondary' onClick={irPersonajes}>Regresar a personajes</Button>
            </div>
            <br /> <br />

            </Container>
            <br /> <br /> <br /> <br />
        </div>
    );
}