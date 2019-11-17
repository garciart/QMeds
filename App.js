import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';
import styles from './assets/styles'

export default class App extends Component {
  render() {
    return (
      <View style={ styles.mainView }>
        <Image source={require('./assets/qmaps_image_01.png')} style={ styles.logo } />
        <Text style={ styles.h1 }>Welcome to Quick Maps!</Text>
        <Button onPress={() => {
          alert('You tapped the button!');
        }}
          title="Press Me" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View >
    );
  }
}