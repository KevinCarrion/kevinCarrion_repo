/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonProfile from '../components/PokemonProfile';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';


it('renders correctly PokemonProfile', () => {
  renderer.create(<PokemonProfile />);
});
