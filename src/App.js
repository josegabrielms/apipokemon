import Login from './login/Login';
import ListadoHome from './listado/ListadoHome';
import ItemPersonajes from './item/ItemPersonajes';
import PeterG from './detail/PeterG';
import LoisG from './detail/LoisG';
import MegG from './detail/MegG';
import ChrisG from './detail/ChrisG';
import StewieG from './detail/StewieG';
import BrianG from './detail/BrianG';
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
          <Route exact path='/personajes' name='Personajes' render={() => <ItemPersonajes user={user} setUser={setUser} />} />
          <Route exact path='/petergriffin' name='PeterGriffin' render={() => <PeterG user={user} setUser={setUser} />} />
          <Route exact path='/loisgriffin' name='LoisGriffin' render={() => <LoisG user={user} setUser={setUser} />} />
          <Route exact path='/meggriffin' name='MegGriffin' render={() => <MegG user={user} setUser={setUser} />} />
          <Route exact path='/chrisgriffin' name='ChrisGriffin' render={() => <ChrisG user={user} setUser={setUser} />} />
          <Route exact path='/stewiegriffin' name='StewieGriffin' render={() => <StewieG user={user} setUser={setUser} />} />
          <Route exact path='/briangriffin' name='BrianGriffin' render={() => <BrianG user={user} setUser={setUser} />} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
