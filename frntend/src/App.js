import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FIScreen from './screens/FIScreen';
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
            <Route path="/lol" component={LolScreen} />
            <Route path="/ppc" component={PpcScreen} />
            <Route path="/sch" component={SchedulingScreen} />
            <Route path="/tb" component={TireBuilderScreen} />
            <Route path="/fi" component={FIScreen} />
            
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
