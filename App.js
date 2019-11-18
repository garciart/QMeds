import React, { Component } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles from './assets/styles'

class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  state = {
    heading: false,
    myState: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  }
  updateState = () => {
    this.state.heading = this.state.heading ? false : true;
  }
  render() {
    let headingStyle = this.state.heading ? styles.h1 : '';
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <Image source={require('./assets/qmaps_image_01.png')} style={styles.logo} />
          <Text style={styles.h1}>Welcome to Quick Maps!</Text>
          <Button
            title="Press Me"
            onPress={this.updateState} />
          <Text style={headingStyle}>{this.state.myState}</Text>
          <Button
            title="Go to Game"
            onPress={() => {
              navigate('Game')
            }} />
        </View >
      </ScrollView>
    );
  }
}

class GameScreen extends Component {
  static navigationOptions = {
    title: 'Hello!',
  };
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
  Game: { screen: GameScreen },
});

export default createAppContainer(AppNavigator);