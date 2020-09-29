import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import FIScreen from './screens/FIScreen';
import FTRScreen from './screens/FTRScreen';
import ListScreen from './screens/ListScreen';
import Login from './screens/Login';
import LolScreen from './screens/LolScreen';
import PpcScreen from './screens/PpcScreen';
import SchedulingScreen from './screens/SchedulingScreen';
import TireBuilderScreen from './screens/TireBuilderScreen';

const openMenu = () => {
  document.querySelector('.sidebar').classList.add('open');
};
const closeMenu = () => {
  document.querySelector('.sidebar').classList.remove('open');

};


function App(props) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  const [userData, setUserDataa] = useState({
    user_name: "",
    user_password: "",
    auth_level: "",
    isadmin: "",
    department: ""
  })

  const setUserData = (user) => {
    setUserDataa(user)

  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className='header'>
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
          </div>
        </header>
        <aside className="sidebar">
          <Link to="/lol">  <h1>link </h1></Link>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <div>
              <Link to="/lol">
                <button className='button link full-width'>
                  LOL
                </button>
              </Link>
            </div>
            <div>
              <Link to="/ppc">
                <button className='button link full-width'>
                  PPC
                </button>
              </Link>
            </div>
            <div>
              <Link to="/sch">
                <button className='button link full-width'>
                  Scheduler
                </button>
              </Link>
            </div>
            <div>
              <Link to="/tb">
                <button className='button link full-width'>
                  Tire Builder
                </button>
              </Link>
            </div>
            <div>
              <Link to="/fi">
                <button className='button link full-width'>
                  Final Inspection
                </button>
              </Link>
            </div>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Switch>
              <Route exact path='/' render={props => !isAuthenticated ?
                ((<Login {...props} setAuth={setAuth} setUserData={setUserData}  />)) :
                (<Redirect to="/fi" />)
              } />
              <Route path="/lol" component={LolScreen} />
              <Route path="/ppc" component={PpcScreen} />
              <Route path="/sch" component={SchedulingScreen} />
              <Route path="/tb" component={TireBuilderScreen} />
              <Route path="/fi" render={props=>(<FIScreen/>)} />
              <Route path="/ftr/:sn" component={FTRScreen} />
            </Switch>
          </div>
        </main>
        <footer className='footer'>
          footer
      </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
