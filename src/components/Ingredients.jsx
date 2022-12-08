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

const Ingredients = ({ ingredientsData }) => (
  <div className="ingredientsbox" id="ingredients">
    <div>
      <p>Total Ingredients: {ingredientsData.length}</p>
      {/* count how many veggies/meat/dairy/grain */}
    </div>
  </div>
);

export default Ingredients;
