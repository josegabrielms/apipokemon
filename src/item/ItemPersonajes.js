import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PeterLogo from '../img/PeterLogo.png'
import peterGriffin from '../img/peterGriffin.png'
import loisGriffin from '../img/loisGriffin.png'
import megGriffin from '../img/megGriffin.png'
import chrisGriffin from '../img/chrisGriffin.png'
import stewieGriffin from '../img/stewieGriffin.png'
import brianGriffin from '../img/brianGriffin.png'
import { AppBar, Toolbar, CssBaseline, Button, IconButton, Typography, Drawer, Paper, Divider, Container } from '@material-ui/core'
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
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
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center'
    },
    textoPersonaje: {
        marginTop: '0.7em',
        fontSize: '1.3rem',
        fontWeight:'bold',
        textAlign: 'center'
    },
    container: {
        marginTop: theme.spacing(5)
    },
    card:{
        maxWidth:350,
        background: 'linear-gradient(45deg, rgb(255,255,255) 10%, rgb(210,210,210) 90%)'
    },
    image:{
        maxWidth:275,
        height: 250,
        marginLeft:25,
    },
}))


export default function ItemPersonajes({ user, setUser }) {

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
                        <div className={classes.divDrawer}>
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
                {/* CONTENIDO */}
                <br /> <br /> <br /> <br />
                <Typography className={classes.textoTitulo} >
                    <b>Personajes Family Guy</b>
                </ Typography>
                <Typography className={classes.textoAux}>
                    Haz clic en cada uno de ellos para conocer sus historias.
                </Typography>
                {/* CONTENIDO 2*/}
                <Container maxWidth='lg' component={Paper} elevation={4} className={classes.container}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card} raised={true}>
                            <CardActionArea onClick={irPeterG}>
                                <CardContent>
                                    <CardMedia image={peterGriffin} className={classes.image} />
                                        <Typography align='center' className={classes.textoPersonaje}>Peter Griffin</Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card} raised={true}>
                            <CardActionArea onClick={irLoisG}>
                                <CardContent>
                                    <CardMedia image={loisGriffin} className={classes.image} />
                                        <Typography align='center' className={classes.textoPersonaje}>Lois Griffin</Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card} raised={true}>
                            <CardActionArea onClick={irMegG}>
                                <CardContent>
                                    <CardMedia image={megGriffin} className={classes.image} />
                                        <Typography align='center' className={classes.textoPersonaje}>Meg Griffin</Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card} raised={true}>
                            <CardActionArea onClick={irChrisG}>
                                <CardContent>
                                    <CardMedia image={chrisGriffin} className={classes.image} />
                                        <Typography align='center' className={classes.textoPersonaje}>Chris Griffin</Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card} raised={true}>
                            <CardActionArea onClick={irStewieG}>
                                <CardContent>
                                    <CardMedia image={stewieGriffin} className={classes.image} />
                                        <Typography align='center' className={classes.textoPersonaje}>Stewie Griffin</Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card} raised={true}>
                            <CardActionArea onClick={irBrianG}>
                                <CardContent>
                                    <CardMedia image={brianGriffin} className={classes.image} />
                                        <Typography align='center' className={classes.textoPersonaje}>Brian Griffin</Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <br /> <br /> <br /> <br />
            </>
        </div>

    );
};
