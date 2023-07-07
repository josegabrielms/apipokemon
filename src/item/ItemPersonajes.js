import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AshLogo from '../img/AshLogo.png'
import { AppBar, Toolbar, CssBaseline, Button, IconButton, Typography, Drawer, Paper, Divider, Container } from '@material-ui/core'
import { Card, CardActionArea, CardContent, CardMedia, Grid, InputBase } from '@material-ui/core'
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material'
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
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        marginTop: theme.spacing(5)
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
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    paperSearch: {
        padding: '3px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 16,
        width: '310px',
    },
    divBoton: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    buttonlog: {
        marginLeft: '1em',
    },
}))


export default function ItemPersonajes({ setPokeUsuario, user, setUser }) {

    const classes = useStyles();
    const history = useHistory();
    const getUsuario=localStorage.getItem('usuario.Info');
    const getContrasena=localStorage.getItem('contrasena.Info');
    const [open, setOpen] = useState(false);
    const [pokemon, setPokemon] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState('');
    const [searchPoke2, setSearchPoke2] = useState({});
    const [isSearch, setIsSearch] = useState(false);
    var numeroFiltro = 1;

    const verifyLogin = () => {
        if (getUsuario&&getContrasena) {}
        else {history.push('/')}
    }

    const handleLogout = () => {
        localStorage.clear()
        history.push('/')
    }

    const loadData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${numeroFiltro - 1}`)
            .then(resp => {
                for (let i = 0; i < resp.data.results.length; i++) {
                    axios.get(resp.data.results[i].url)
                        .then(result => {
                            setPokemon(prevArray => [...prevArray, result.data])
                        })
                }
            })
    }
    useEffect(loadData, [numeroFiltro])

    const filtroUno = () => { 
        numeroFiltro = 1;
        setPokemon([]);
        loadData(); }
    const filtroDos = () => { 
        numeroFiltro = 51;
        setPokemon([]);
        loadData(); }
    const filtroTres = () => { 
        numeroFiltro = 101;
        setPokemon([]);
        loadData(); }


    const onSearch = async () => {
        if (searchPokemon === '') {
            setIsSearch(false)
            setPokemon([])
            loadData()
        } else {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
                .then(resp => {
                    setIsSearch(true)
                    setSearchPoke2(resp.data)
                })
        }
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
                        <Button variant='text' color='inherit' onClick={() => irDetalle(25)} className={classes.botonDrawerInf}>Detalle</Button>
                    </Paper>
                </Drawer>
                <footer className={classes.footer}>
                    <Container maxWidth='lg'>
                        <Typography align='center'>Jose Gabriel Mendoza Santos <br /> Todos a la U - {new Date().getFullYear()}</Typography>
                    </Container>
                </footer>
                <br /> <br /> <br /> <br />
                <Typography className={classes.textoTitulo} >
                    <b>Listado Pokémon</b>
                </ Typography>
                <Typography className={classes.textoAux}>
                    A continuación, puedes filtrar los pokémon por su número de la pokédex.
                </Typography>
                <div className={classes.divBoton}>
                    <Button variant='contained' color='primary' onClick={filtroUno}>1 - 50</Button>
                    <Button className={classes.buttonlog} variant='contained' color='primary' onClick={filtroDos}>51 - 100</Button>
                    <Button className={classes.buttonlog} variant='contained' color='primary' onClick={filtroTres}>101 - 150</Button>
                </div>

                {/* BARRA DE BÚSQUEDA*/}
                <Container maxWidth='lg' component={Paper} elevation={4} className={classes.container}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Paper elevation={2} className={classes.paperSearch}>
                                <InputBase
                                    className={classes.input}
                                    value={searchPokemon}
                                    placeholder='Buscar Pokémon'
                                    onChange={e => setSearchPokemon(e.target.value)}
                                    onKeyDown={e => { if (e.keyCode === 13) { onSearch() } }}
                                />
                                <IconButton className={classes.iconButton} onClick={onSearch}><SearchIcon /></IconButton>
                            </Paper>
                        </Grid>
                        {isSearch ?
                            <Grid item xs={12} sm={4}>
                                <Card className={classes.card} raised={true}>
                                    <CardActionArea onClick={() => irDetalle(searchPoke2.id)}>
                                        <CardContent>
                                            <CardMedia image={searchPoke2.sprites.other.home.front_default} className={classes.image} />
                                            <Typography align='center' className={classes.textoPersonaje}>{searchPoke2.id} {searchPoke2.name}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            :
                            pokemon.map((poke, index) => (
                                <Grid key={index} item xs={12} sm={4}>
                                    <Card className={classes.card} raised={true}>
                                        <CardActionArea onClick={() => irDetalle(poke.id)}>
                                            <CardContent>
                                                <CardMedia image={poke.sprites.other.home.front_default} className={classes.image} />
                                                <Typography align='center' className={classes.textoPersonaje}>{poke.name}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </Container>
                <br /> <br /> <br /> <br />
            </>
        </div>

    );
};
