import {React, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  View,
} from 'react-native';

import {firstRequestUrl, searchPokemonUrl, getRequest} from '../api/constants';
import PokemonGrid from '../components/PokemonGrid';
import PokemonProfile from '../components/PokemonProfile';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  container2Columns: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  gridSearchBlock: {
    display: 'flex',
    flex: 6,
    flexDirection: 'column',
    minHeight: 400,
  },
  profileBlock: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    marginTop: 68,
    padding: 10,
    borderWidth: 2,
    borderColor: 'blueviolet',
    backgroundColor: 'cornflowerblue',
  },
  logo: {
    width: 100,
    height: 100,
  },
  titleText: {
    fontSize: 40,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  paginationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  paginationButton: {
    backgroundColor: 'aqua',
    fontColor: 'white',
    fontSize: 16,
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
});

const PokemonScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const paginate = async url => {
    setIsLoading(true);
    setPokemons([]);
    const pagination = await getRequest(url);
    setPagination(pagination);
    setPokemons(pagination.results);
  };
  useEffect(() => {
    if (pokemons === null) {
      paginate(firstRequestUrl);
    }
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, [pokemons]);
  const searchPokemon = async name => {
    try {
      if (!name) return;
      const url = searchPokemonUrl + name.trim();
      const response = await getRequest(url);

      if (response) {
        setSelectedPokemon({...response, url: url});
      }
    } catch (err) {}
  };
  useEffect(() => {
    searchPokemon(searchText);
  }, [searchText]);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Listado de Pokemon</Text>
      <View style={styles.container2Columns}>
        <View style={styles.gridSearchBlock}>
          <TextInput
            style={styles.input}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="Buscar"></TextInput>
          {isLoading && <ActivityIndicator />}
          <PokemonGrid
            setSelectedPokemon={setSelectedPokemon}
            pokemons={pokemons}></PokemonGrid>
        </View>
        <View style={styles.profileBlock}>
          <PokemonProfile selectedPokemon={selectedPokemon}></PokemonProfile>
        </View>
      </View>
      <View style={styles.paginationBar}>
        <Button
          disable={!pagination?.previous}
          title={'< Atrás'}
          style={styles.paginationButton}
          onPress={e => paginate(pagination?.previous)}></Button>
        <Button
          disable={!pagination?.next}
          title={'Siguiente >'}
          style={styles.paginationButton}
          onPress={e => paginate(pagination?.next)}></Button>
      </View>
    </ScrollView>
  );
};

export default PokemonScreen;
