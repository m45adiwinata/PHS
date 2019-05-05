/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Routes from './Routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  logInScreen: {
    width: 360,
    height: 640
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bgLogInScreen: {
    width: 360,
    height: 408,
    opacity: 0.99,
    backgroundColor: "#92c3d2"
  }
});
