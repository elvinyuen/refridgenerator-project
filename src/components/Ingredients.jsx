/**
 * ************************************
 *
 * @module  Ingredients
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ingredients = ({ ingredientsData }) => {
  return (
    <div className="ingredientsbox" id="ingredients">
      <div>
        <label>Total Ingredients:</label> {ingredientsData.length}
        {/* Veggies: Meats: Dairy: Grains: */}
        {/* count how many veggies/meat/dairy/grain */}
      </div>
    </div>
  );
};

export default Ingredients;
