import axios from 'axios';

function generateRecipe() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('fridge').innerHTML = res.data.joke;
  });
}

export default generateRecipe;
