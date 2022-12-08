/**
 * ************************************
 *
 * @module  Ingredient
 * @author
 * @date
 * @description populates a card for each ingredient
 *
 * ************************************
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Ingredient = ({ ingredientsData }) => {
  // console.log('ingredientsData in the Ingredient is: ', ingredientsData);
  // declare a state here to store the id of the ingredient card that was just clicked
  const [id, setId] = useState([]);
  // declare a function that handles your onclick here
  const deleteClickHandler = async (event) => {
    setId(event.target.id);

    fetch('http://localhost:3000/api/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) =>
        console.log('DeleteIngredient fetch DELETE FROM api: ERROR: ', err)
      );
  };

  // fetch method with delete
  // send the state which holds the id with your fetch request
  return (
    <>
      {ingredientsData.map((element) => {
        const { id, item, type, quantity, unit, date } = element;

        // onclick handler function to send a fetch delete request to api
        const deleteIngredient = (event) => {
          console.log(event.target);
        };

        return (
          <div className="ingredientcard" id={id} key={id}>
            <div>
              <p>Item: {item}</p>
              <p>Type: {type}</p>
              <p>Quantity: {quantity}</p>
              <p>Unit: {unit}</p>
              <p>Date: {date.slice(0, 10)}</p>
              {/* need to add an onclick feature for this */}
              <button onClick={deleteClickHandler} id={id}>
                Delete
              </button>
              {/* count how many veggies/meat/dairy/grain */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Ingredient;
