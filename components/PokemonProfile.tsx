import React from 'react';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, Image, View} from 'react-native';

import PokemonPreview from '../components/PokemonPreview';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 1,
  },
  carrousel: {
    minHeight: 50,
  },
  movesSection: {
    maxHeight: 200,
  },
});

const PokemonGrid = props => {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <PokemonPreview
          name={props?.selectedPokemon?.name}
          url={props?.selectedPokemon?.url}></PokemonPreview>
      </View>
      <View style={styles.containerLeft}>
        <Text style={styles.titleText}>Types</Text>
        <Text>
          {(props?.selectedPokemon?.types || [])?.reduce(
            (accumulator, currentValue, index) =>
              accumulator + ' ' + currentValue?.type?.name,
            '',
          )}
        </Text>
        <Text style={styles.titleText}>Peso</Text>
        <Text>
          {props?.selectedPokemon?.weight
            ? props?.selectedPokemon?.weight + 'kg'
            : ''}
        </Text>
        <Text style={styles.titleText}>Sprites</Text>
        <ScrollView horizontal={true} style={styles.carrousel}>
          {Object.keys(props?.selectedPokemon?.sprites || {})
            .filter(
              sprite =>
                !['other', 'versions'].includes(sprite) &&
                props?.selectedPokemon?.sprites[sprite],
            )
            .map(sprite => {
              return (
                <Image
                  style={styles.logo}
                  alt={sprite}
                  source={{
                    uri: props?.selectedPokemon?.sprites[sprite],
                  }}></Image>
              );
            })}
        </ScrollView>
        <Text style={styles.titleText}>Movimientos</Text>
        <ScrollView style={styles.movesSection}>
          <Text>
            {(props?.selectedPokemon?.moves || [])?.reduce(
              (accumulator, currentValue, index) =>
                accumulator + ' ' + currentValue?.move?.name,
              '',
            )}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default PokemonGrid;
