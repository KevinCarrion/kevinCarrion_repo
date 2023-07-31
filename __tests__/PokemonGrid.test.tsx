/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonGrid from '../components/PokemonGrid';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';


it('renders correctly PokemonGrid', () => {
  renderer.create(<PokemonGrid />);
});
