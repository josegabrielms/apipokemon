import Login from './login/Login';
import ListadoHome from './listado/ListadoHome';
import ItemPersonajes from './item/ItemPersonajes';
import Detalle from './detail/Detalle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  const [pokeUsuario, setPokeUsuario] = useState([])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' name='Login' render={() => <Login />} />          
          <Route exact path='/inicio' name='Inicio' render={() => <ListadoHome />} />
          <Route exact path='/pokemon' name='Pokémon' render={() => <ItemPersonajes setPokeUsuario={setPokeUsuario} />} />
          <Route exact path='/detalle' name='Detalle' render={() => <Detalle pokeUsuario={pokeUsuario} setPokeUsuario={setPokeUsuario} />} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
