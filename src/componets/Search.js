/* lest import Api from https://pokeapi.co/api/v2/pokemon/ditto/ 

import axios from 'axios';

// Create a function to get the data from the API
const getPokemon = async (pokemon) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  return response.data;
}

// export this function to be used in other files
export default getPokemon; */