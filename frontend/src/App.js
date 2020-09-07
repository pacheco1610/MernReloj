import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';

import Navbar from './components/layout/navbar.jsx'
import Sidebar from './components/layout/sidebar.jsx'
import Asistencia from './components/asistencias/asistencia'
import Contenct from './components/layout/content.jsx'




function App() {
  return (
    <Router>
      <div className="d-flex" id="content-wrapper">
      <Sidebar/>
      <div className="w-100" id="page-container">
        <Navbar/>
        <Contenct>
          <Switch>
            <Route exact path="/" component={Asistencia}/>
          </Switch>
        </Contenct>
      </div>

      </div>

    </Router>
  );
}

export default App;
