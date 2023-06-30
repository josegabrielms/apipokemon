import Login from './login/Login';
import ListadoHome from './listado/ListadoHome';
import ItemPersonajes from './item/ItemPersonajes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  const [user, setUser] = useState([])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' name='Login' render={() => <Login setUser={setUser} />} />          
          <Route exact path='/inicio' name='Inicio' render={() => <ListadoHome user={user} setUser={setUser} />} />
          <Route exact path='/personajes' name='Personajes' render={() => <ItemPersonajes />} />
        </Switch>
      </Router>
      {/* {
        !user.length > 0

          ? <Login setUser={setUser} />
          : <ListadoHome user={user} setUser={setUser} />
      } */}

    </div>
  );

}

export default App;
