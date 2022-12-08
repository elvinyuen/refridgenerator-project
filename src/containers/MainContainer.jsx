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
import FoodContainer from './FoodContainer';
import AddIngredient from '../components/AddIngredient';
import fridge from '../assets/kawaii_fridge.jpg';

function MainContainer() {
  const [ingredients, setIngredients] = useState([]);

  function handleClick() {
    // should have the state to send back the data
    // access the data
    // map the array to create new div for each ingredient
  }

  // this is effectively the same as ComponentDidMount(fetching data)
  useEffect(() => {
    fetch('http://localhost:3000/api/')
      .then((res) => res.json())
      .then((ingredientsData) => {
        setIngredients(ingredientsData);
      })
      .catch((err) => console.log('error getting ingredients data', err));
  }, []);
  // console.log('ingredients data is: ', ingredients);

  return (
    <div className="mainContainer">
      <div className="leftBox">
        <h3>What's in your fridge?</h3>
        <img src={fridge} alt="" id="fridgeimg" />
        <Ingredients ingredientsData={ingredients} />
        <AddIngredient />
        {/* <form>
          <input type="text"></input>
          <button onClick={handleClick}></button>
        </form> */}
      </div>
      <div className="rightBox">
        <h3>Fresh Ingredients</h3>
        <FoodContainer ingredientsData={ingredients} />
      </div>
    </div>
  );
}

// const MainContainer = (props) => (
// );

export default MainContainer;
