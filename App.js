import React, { Component } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles from './assets/styles';
import OpenMapPage from './OpenMapPage.js';
import AboutPage from './AboutPage.js';
import ScratchPage from './ScratchPage.js';

class App extends Component {
  static navigationOptions = { title: 'Quick Maps!' };

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.h1}>Welcome to Quick Maps!</Text>
          <View style={styles.spacer} />
          <Image source={require('./assets/qmaps_image_01.png')} style={styles.logo} />
          <View style={styles.spacer} />
          <View style={[{width:"70%"}]}>
            <Button
              title="Open a Map"
              onPress={() => { navigate('OpenMapPage') }} />
            <View style={styles.spacer} />
            <Button
              title="Download a Map"
              onPress={() => { alert("You want to download a map!") }} />
            <View style={styles.spacer} />
            <Button
              title="About"
              onPress={() => { navigate('AboutPage') }} />
            <View style={styles.spacer} />
            <Button
              title="Scratch Page"
              onPress={() => { navigate('ScratchPage') }} />
          </View>
        </View >
      </ScrollView>
    );
  }
}

class Hello extends Component {
  static navigationOptions = { title: 'Hello!' };
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.h1}>Hello, World!</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: App },
  OpenMapPage: { screen: OpenMapPage },
  AboutPage: { screen: AboutPage },
  ScratchPage: { screen: ScratchPage }
});

export default createAppContainer(AppNavigator);