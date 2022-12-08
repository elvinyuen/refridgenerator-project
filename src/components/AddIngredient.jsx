/**
 * ************************************
 *
 * @module  AddIngredient
 * @author
 * @date
 * @description component that accepts user inputs to add new ingredients
 *
 * ************************************
 */

import React, { useState, useEffect } from 'react';

// const useInput = (init) => {
//   const [value, setValue] = useState(init);
//   const onChange = (e) => {
//     console.log(e.target.value);
//     setValue(e.target.value);
//   };
//   return [value, onChange];
// };

const AddIngredient = () => {
  const [item, setItem] = useState([]);
  const [type, setType] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [unit, setUnit] = useState([]);

  const date = new Date();
  // const [newIngredient, setIngredients] = useState({});
  // const [type, updateType] = useState({});
  // const [item, updateItem] = useState([]);
  // const [quantity, updateQuantity] = useState([]);
  // const [unit, updateUnit] = useState([]);
  // console.log('newIngredient is: ', newIngredient);

  // declare an onchange handler function that will take the user inputs and set it to the state
  // const typeHandleChange = (event) => {
  //   // console.log(event.target.value);
  //   setIngredients((newIngredient.type = event.target.value));
  //   console.log('newIngredient with type: ', newIngredient);
  // };

  // const itemHandleChange = (event) => {
  //   console.log(event.target.value);
    // setIngredients(event.target.value);
  //   console.log('newIngredient with item: ', newIngredient);
  // };
  // const quantityHandleChange = (event) => {
  //   console.log(event.target);
  // };
  // const unitHandleChange = (event) => {
  //   console.log(event.target);
  // };

  // declare an onclick function that will submit the state in the body of the fetch request to POST to the api router
  // const saveIngredient = () => {
  //   console.log('clicked');
  //   const body = {
  //     item,
  //     type,
  //     quantity,
  //     unit,
  //     date,
  //   };

  //   testbody
  //   const testBody = {
  //     item: 'cheese',
  //     type: 'dairy',
  //     quantity: 10,
  //     unit: 'pound',
  //     date: new Date(),
  //   };

  //   fetch('http://localhost:3000/api/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'Application/JSON',
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) =>
  //       console.log('AddIngredient fetch POST to api: ERROR: ', err)
  //     );
  // };

  const handleFormSubmit = (event) => {
    console.log('button clicked');
    fetch('http://localhost:3000/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ type, item, quantity, unit, date }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) =>
        console.log('AddIngredient fetch POST to api: ERROR: ', err)
      );
  };

  return (
    <div>
      <h3>Add an Ingredient</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          Type:
          <select
            name="type"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option>Select One:</option>
            <option value="vegetable">Vegetable</option>
            <option value="meat">Meat</option>
            <option value="dairy">Dairy</option>
            <option value="grain">Grain</option>
          </select>
        </label>
        <br />

        <label>
          Item:
          <input
            name="item"
            id="item"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
        </label>
        <br />

        <label>
          Quantity:
          <input
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>
        <br />
        <label>
          Unit:
          <input
            name="unit"
            id="unit"
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
          />
        </label>

        <br />
        <input id="formButton" type="submit" value="Add Ingredient" />
        {/* 
        <button
          id="add-ingredient"
          className="primary"
          type="submit"
        >
          Add Ingredient
        </button> */}
      </form>
    </div>
  );
};

export default AddIngredient;
