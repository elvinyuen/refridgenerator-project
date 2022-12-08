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
import { useHistory } from 'react-router-dom';

const Ingredient = ({ ingredientsData }) => {
  // console.log('ingredientsData in the Ingredient is: ', ingredientsData);
  // declare a state here to store the id of the ingredient card that was just clicked
  const [id, setId] = useState([]);
  const history = useHistory();

  // declare a function that handles your onclick here
  const deleteClickHandler = (event) => {
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
      .then(() => {
        history.push('/');
      })
      .catch((err) =>
        console.log('DeleteIngredient fetch DELETE FROM api: ERROR: ', err)
      );
  };

  const imgObj = {
    avocado: 'https://i.imgur.com/RUqmOxW.jpg',
    beef: 'https://i.imgur.com/vQk0VQG.jpg',
    broccoli: 'https://i.imgur.com/EVZZ7mO.png',
    bread: 'https://i.imgur.com/qV3iRTu.jpg',
    cheese:
      'https://thumbs.dreamstime.com/b/isolated-kawaii-cheese-icon-fill-design-food-restaurant-menu-dinner-lunch-cooking-meal-theme-vector-illustration-163853574.jpg',
    chicken: 'https://i.imgur.com/EqAKEID.png',
    chili: 'https://i.imgur.com/YcdoWDj.png',
    milk: 'https://i.imgur.com/YfPgO8O.png',
    peas: 'https://image.spreadshirtmedia.net/image-server/v1/designs/157487864,width=178,height=178.png',
    pork: 'https://i.imgur.com/EIMvo5c.png',
    potato:
      'https://www.seekpng.com/png/full/6-61293_kawaii-potato-by-hashtagpony-d7xbs1t-cartoon-potato-transparent.png',
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

        const imgURL = imgObj[item];
        console.log(imgURL);

        return (
          <div className="ingredientcard" id={id} key={id}>
            <div>
              <label>Item:</label> {item}
              <br />
              <label>Type:</label> {type}
              <br />
              <label>Quantity:</label> {quantity}
              <br />
              <label>Unit: </label> {unit}
              <br />
              <label>Date: </label> {date.slice(0, 10)}
              <br />
              {/* need to add an onclick feature for this */}
              {/* count how many veggies/meat/dairy/grain */}
              <button onClick={deleteClickHandler} id={id}>
                Remove
              </button>
            </div>
            <img src={imgURL} alt="" className="ingredientImg" />
          </div>
        );
      })}
    </>
  );
};

export default Ingredient;
