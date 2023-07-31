import React from 'react';
import {StyleSheet, View} from 'react-native';

import PokemonPreview from '../components/PokemonPreview';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

const PokemonGrid = props => {
  return (
    <View style={styles.container}>
      {props?.pokemons &&
        props?.pokemons.map((poke, i) => {
          return (
            <PokemonPreview
              id={i}
              setSelectedPokemon={props?.setSelectedPokemon}
              name={poke.name}
              url={poke.url}></PokemonPreview>
          );
        })}
    </View>
  );
};

export default PokemonGrid;
