import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LolScreen from './screens/LolScreen';
const name = 'Sadun';
const openMenu = () => {
  document.querySelector('.sidebar').classList.add('open');
};
const closeMenu = () => {
  document.querySelector('.sidebar').classList.remove('open');

};

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className='header'>
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
          </div>
        </header>
        <aside className="sdf">
        
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <div>
              <button className='button link full-width'>PPC</button>
            </div>
            <div>
              <button className='button link full-width'>Scheduling</button>
            </div>
            <div>
              <button className='button link full-width'>LoadingUnloading</button>
            </div>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
          <Route path="/orders" component={LolScreen} />
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
