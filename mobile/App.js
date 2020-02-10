import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Source from './src';


export default function App() {
  return (
    <Source />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
