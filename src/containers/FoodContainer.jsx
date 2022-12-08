/**
 * ************************************
 *
 * @module  FoodContainer
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { useState } from 'react';
import Ingredient from '../components/Ingredient';

Ingredient;
const FoodContainer = ({ ingredientsData }) => {
  return (
    <div className="foodContainer" id="food">
      <div classname="ingredientsContainer" id="ingredientsBox">
        <Ingredient ingredientsData={ingredientsData} />
      </div>
    </div>
  );
};

export default FoodContainer;
