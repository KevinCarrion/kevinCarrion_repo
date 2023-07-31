const firstRequestUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4';
const searchPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
const defaultImageUrl =
  'https://laboratoriodesuenos.com/wp-content/uploads/2020/02/default.jpg';
const getRequest = async url => {
  try {
    const response = await fetch(url, {method: 'GET'});

    const data = response.json();
    return data;
  } catch (err) {
    return;
  }
};

export {getRequest, defaultImageUrl, firstRequestUrl, searchPokemonUrl};
