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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ingredient = ({ ingredientsData }) => {
  // console.log('ingredientsData in the Ingredient is: ', ingredientsData);

  return (
    <>
      {ingredientsData.map((element) => {
        const { id, item, type, quantity, unit, date } = element;

        // onclick handler function to send a fetch delete request to api
        const deleteIngredient = (event) => {
          console.log(event.target.key);
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
              <button onClick={deleteIngredient} key={id}>
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
