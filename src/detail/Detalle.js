import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AshLogo from '../img/AshLogo.png'
import { AppBar, Toolbar, CssBaseline, Button, IconButton, Typography, Drawer, Paper, Divider, Container } from '@material-ui/core'
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
import { Menu as MenuIcon } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

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
        marginLeft: 20,
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
        textAlign: 'center',
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
        width: '300px',
        maxWidth: '85%',
    },
    divBoton: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    card: {
        maxWidth: 350,
        background: 'linear-gradient(45deg, rgb(255,255,255) 10%, rgb(177,185,228) 90%)'
    },
    image: {
        maxWidth: 275,
        height: 250,
        marginLeft: 25,
    },
}))

export default function Detalle({ pokeUsuario, setPokeUsuario }) {

    const classes = useStyles();
    const history = useHistory();
    const getUsuario=localStorage.getItem('usuario.Info');
    const getContrasena=localStorage.getItem('contrasena.Info');
    const [open, setOpen] = useState(false);
    const [pokeList, setPokeList] = useState([]);
    var numeroPoke=25;

    if (isNaN(pokeUsuario[0])) {
        console.log('No hay poke, se muestra pikachu');
    } else { numeroPoke = pokeUsuario[0] }

    const loadData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${numeroPoke - 1}`)
            .then(resp => {
                for (let i = 0; i < resp.data.results.length; i++) {
                    axios.get(resp.data.results[i].url)
                        .then(result => {
                            setPokeList(prevArray => [...prevArray, result.data])
                        })
                }
            })
    }
    useEffect(loadData, [numeroPoke])

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
    const irDetalle = (props) => { 
        setPokeUsuario([props])
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
                        <div className={classes.divDrawer}>
                            <IconButton edge='start' color='inherit' onClick={() => setOpen(false)}>
                                <MenuIcon />
                            </IconButton>
                            <img src={AshLogo} alt='Ash Ketchum' className={classes.imgDrawer} />
                        </div>
                        <Divider />
                        <Button variant='text' color='inherit' onClick={irInicio} className={classes.botonDrawerSup}>Página de Inicio</Button>
                        <Button variant='text' color='inherit' onClick={irPersonajes} className={classes.botonDrawerSup}>Listado Pokémon</Button>
                        <Divider />
                        <Button variant='text' color='inherit' onClick={()=>irDetalle(25)} className={classes.botonDrawerInf}>Detalle</Button>
                    </Paper>
                </Drawer>
                <footer className={classes.footer}>
                    <Container maxWidth='lg'>
                        <Typography align='center'>Jose Gabriel Mendoza Santos <br /> Todos a la U - {new Date().getFullYear()}</Typography>
                    </Container>
                </footer>
            </>
            <br /> <br /> <br /> <br />
            <Typography className={classes.textoTitulo} ><b>Detalle Pokémon</b></ Typography>
            <br />
            <Container maxWidth='md' component={Paper} className={classes.container}>
                            <br />
                <Grid container spacing={2} >
                    {pokeList.map((poke, index) => (
                        <Grid key={index} item xs={12} sm={6}>
                            <Card className={classes.card} raised={true}>
                                <CardActionArea>
                                    <CardContent>
                                        <CardMedia
                                            image={poke.sprites.other.home.front_default}
                                            className={classes.image} alt='' />
                                        <Typography className={classes.textoTitulo} ><b>{poke.name}</b></ Typography>
                                        <Typography align='center' className={classes.textoAux}>
                                            <b>Número de la Pokédex:</b> {poke.id} <br />
                                            <b>Altura:</b> {poke.height} <br />
                                            <b>Peso:</b> {poke.weight} <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                    {pokeList.map((poke, index) => (
                        <Grid key={index} item xs={12} sm={6}>
                            <Card className={classes.card} raised={true}>
                                <CardActionArea>
                                    <CardContent>
                                        <CardMedia
                                            image={poke.sprites.other.home.front_shiny}
                                            className={classes.image} alt='' />
                                        <Typography className={classes.textoTitulo} ><b>forma variocolor</b></ Typography>
                                        <Typography align='center' className={classes.textoAux}>
                                            <b>Tipo:</b> {poke.types[0].type.name} <br />
                                            <b>Ataque básico:</b> {poke.moves[0].move.name} <br />
                                            <b>Ataque cargado:</b> {poke.name==='ditto'?'None':poke.moves[1].move.name} <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br /> <br />
                <div className={classes.divBoton}>
                    <Button className={classes.buttonlog} variant='contained' color='primary' onClick={irPersonajes}>Regresar a Listado Pokémon</Button>
                </div>
                <br /> <br />
            </Container>
            <br /> <br /> <br /> <br />
        </div>
    );
}