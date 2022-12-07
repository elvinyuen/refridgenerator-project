/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

// import react modules
import React, { useState } from 'react';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// import components required for the app
import MainContainer from './containers/MainContainer';

//import styling from stylesheets
import './stylesheets/styles.scss';

const App = () => (
  <main>
    <div className="app">
      <h1 id="header">Refrigenerator App</h1>
      <MainContainer />
    </div>
  </main>
);

export default App;
