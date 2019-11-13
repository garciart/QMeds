import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'powderblue' }}>
        <Image source={require('./assets/qmaps_image_01.png')} style={{ height: 300, width: 300 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Welcome to Quick Maps!</Text>
        <Button onPress={() => {
          alert('You tapped the button!');
        }}
          title="Press Me" />
      </View >
    );
  }
}