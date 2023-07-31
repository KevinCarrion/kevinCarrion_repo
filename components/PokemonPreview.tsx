import {React, useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 175,
    width: 150,
    backgroundColor: 'aqua',
    borderWidth: 1,
    borderColor: 'darkcyan',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
  baseText: {
    fontSize: 16,
  },
});
import {defaultImageUrl, getRequest} from '../api/constants';

const PokemonPreview = props => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    if (props.url) {
      const a = async () => {
        const pokemonInfo = await getRequest(props.url);
        setPokemonInfo(pokemonInfo);
      };
      a();
    }
  }, [props?.url]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          try {
            props.setSelectedPokemon({...pokemonInfo, url: props.url});
          } catch (err) {
            return;
          }
        }}>
        <Image
          style={styles.logo}
          source={{
            uri: pokemonInfo?.sprites?.front_default
              ? pokemonInfo?.sprites?.front_default
              : defaultImageUrl,
          }}
        />
        <Text style={styles.baseText}># {pokemonInfo?.id}</Text>
        <Text style={styles.baseText}>{pokemonInfo?.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonPreview;
