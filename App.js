import React, { Component } from 'react';
import { Image, Spacer, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/qmaps_image_01.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: '50' }}>Welcome to Quick Maps!</Text>
      </View >
    );
  }
}
