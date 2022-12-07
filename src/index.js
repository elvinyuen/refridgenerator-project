// from webpack tutorial delete the following
import generateRecipe from './generateRecipe';
import fridge from './assets/fridge.jpeg';
// delete above

// note to self: do i need this?
// import './stylesheets/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // need to rename a div / element id in the html file to 'app'
  document.getElementById('app')
);

// from webpack tutorial delete the following
const fridgeImg = document.getElementById('fridgeImg');
fridgeImg.src = fridge;

const fridgeBtn = document.getElementById('fridgeBtn');
fridgeBtn.addEventListener('click', generateRecipe);

console.log(generateRecipe());
console.log('another log');
// delete above
