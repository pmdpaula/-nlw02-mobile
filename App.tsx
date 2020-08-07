import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/pages/Landing';

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  }
});
