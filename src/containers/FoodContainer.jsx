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
    <div className="container" id="food">
      <Ingredient ingredientsData={ingredientsData} />
    </div>
  );
};

export default FoodContainer;
