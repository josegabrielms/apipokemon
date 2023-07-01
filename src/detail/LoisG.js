import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import loisGriffin from '../img/loisGriffin.png'
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

export default function LoisG({ user, setUser }) {

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
            <Typography className={classes.textoTitulo} ><b>Lois Griffin</b></ Typography>
            <div className={classes.divFigura}>
                <img src={loisGriffin} className={classes.figuraPersonaje} alt="Lois Griffin"/>
            </div>
            <Typography className={classes.textoAux}>
            Lois Patrice Griffin (nacida Pewterschmidt) es la esposa de Peter Griffin, madre de Meg Griffin, Chris Griffin y Stewie Griffin.
            </Typography>
            <br/>
            <Typography className={classes.textoTitulo} ><b>Historia</b></ Typography>
            <br />
            <Typography className={classes.textoAux}>
            nacida Lois Pewterschmidt es hija de los multimillonarios Carter Pewterschmidt y Barbara Pewterschmidt, Lois se crió en un 
            hogar muy rico con su hermana, Carol. También tiene un hermano perdido hace tiempo mayor, Patrick, quien fue enviado a un 
            manicomio después de que él se convirtió en un asesino en serie.<br/><br/>

            Ella conoció a Peter, cuando fue contratado como un chico de las toallas por su tía. Su rico padre no puede aceptar a Peter 
            y hace comentarios groseros en cada oportunidad que tiene. Peter parece querer hacer su mejor y absoluto esfuerzo para no ser 
            un estorbo. También alude haber estudiado en la Universidad Kent State. <br/><br/>

            Lois se encuentra actualmente a tiempo completo como mamá y pasa la mayor parte de la jornada de trabajo al cuidado de Stewie, 
            limpiar la casa y cocinar para su familia. Sin embargo, también es profesora de piano en el lateral para complementar el ingreso 
            familiar. En la actualidad tiene 42 años. Ella se informa, dos años más joven que Peter.
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