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
      </View >
    );
  }
}