/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonPreview from '../components/PokemonPreview';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';


it('renders correctly PokemonPreview', () => {
  renderer.create(<PokemonPreview />);
});
