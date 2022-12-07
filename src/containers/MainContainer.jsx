/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful container
 *
 * ************************************
 */

import React, { useState, useEffect } from 'react';
import Ingredients from '../components/Ingredients';

function MainContainer() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/')
      .then((res) => res.json())
      .then((ingredientsData) => {
        setIngredients(ingredientsData);
      })
      .catch((err) => console.log('error getting ingredients data', err));
  }, []);

  return (
    <div className="container">
      <div className="outerBox">
        <h3>What's in your fridge?</h3>
        <Ingredients ingredientsData={ingredients} />
      </div>
    </div>
  );
}

// const MainContainer = (props) => (
// );

export default MainContainer;
