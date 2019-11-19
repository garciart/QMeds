import React, { Component } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles from './assets/styles';
import ScratchPage from './ScratchPage.js';
import AboutPage from './AboutPage.js';

function Spacer() {
  return <View style={styles.spacer} />;
}

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
          <Image source={require('./assets/qmaps_image_01.png')} style={styles.logo} />
          <Spacer />
          <Text style={styles.h1}>Welcome to Quick Maps!</Text>
          <Spacer />
          <View style={styles.stretchButton}>
            <Button
              title="Open a Map"
              onPress={() => { alert("You want to open a map!") }} />
            <Spacer />
            <Button
              title="Download a Map"
              onPress={() => { alert("You want to download a map!") }} />
            <Spacer />
            <Button
              title="About"
              onPress={() => { navigate('AboutPage') }} />
            <Spacer />
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
  AboutPage: { screen: AboutPage },
  ScratchPage: { screen: ScratchPage }
});

export default createAppContainer(AppNavigator);