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
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// import components required for the app
// import xxxx from '.components/xxxxxx'
// import xxxx from '.components/xxxxxx'

//import styling from stylesheets
import './stylesheets/styles.scss';

const App = (props) => {
  return (
    <div className="router">
      <main>
        <div>hi this is working</div>
        <div className="container">
          <img id="fridgeImg" alt="" />
          <h3>What's in your fridge?</h3>
          <div id="fridge" className="fridge"></div>
          <button id="fridgeBtn" className="btn">
            Add Another Ingredient
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
