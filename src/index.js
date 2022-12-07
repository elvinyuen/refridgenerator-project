import generateRecipe from './generateRecipe';
import './stylesheets/main.scss';
import fridge from './assets/fridge.jpeg';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const fridgeImg = document.getElementById('fridgeImg');
fridgeImg.src = fridge;

const fridgeBtn = document.getElementById('fridgeBtn');
fridgeBtn.addEventListener('click', generateRecipe);

console.log(generateRecipe());
console.log('another log');
