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

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return [value, onChange];
};

const AddIngredient = (props) => {
  // declare state
  const [item, itemOnChange] = useInput('');
  const [type, typeOnChange] = useInput('');
  const [quantity, quantityOnChange] = useInput('');
  const [unit, unitOnChange] = useInput('');
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
  //   setIngredients((newIngredient.item = event.target.value));
  //   console.log('newIngredient with item: ', newIngredient);
  // };
  // const quantityHandleChange = (event) => {
  //   console.log(event.target);
  // };
  // const unitHandleChange = (event) => {
  //   console.log(event.target);
  // };

  // declare an onclick function that will submit the state in the body of the fetch request to POST to the api router
  const saveIngredient = () => {
    console.log('clicked');
    const body = {
      item,
      type,
      quantity,
      unit,
      date,
    };

    // testbody
    // const testBody = {
    //   item: 'cheese',
    //   type: 'dairy',
    //   quantity: 10,
    //   unit: 'pound',
    //   date: new Date(),
    // };

    fetch('http://localhost:3000/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
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
      <div>
        <label htmlFor="new-type">Type: </label>
        <select name="new-type" id="new-type" onChange={typeOnChange}>
          <option>Select One:</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
          <option value="dairy">Dairy</option>
          <option value="grain">Grain</option>
        </select>
        <br />

        <label htmlFor="new-item">Item: </label>
        <input
          name="new-item"
          id="new-item"
          // value={newLocation}
          onChange={itemOnChange}
        />

        <br />

        <label htmlFor="new-quantity">Quantity: </label>
        <input
          name="new-quantity"
          id="new-quantity"
          // value={newLocation}
          onChange={quantityOnChange}
        />
        <br />
        <label htmlFor="new-unit">Unit: </label>
        <input
          name="new-unit"
          id="new-unit"
          // value={newLocation}
          onChange={unitOnChange}
          // onChange={(e) => updateLocation(e.target.value)}
        />
        <br />

        <button
          id="add-ingredient"
          className="primary"
          type="submit"
          onClick={saveIngredient}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default AddIngredient;
