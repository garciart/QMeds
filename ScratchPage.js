import React, { Component } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import styles from './assets/styles';

function Spacer() {
  return <View style={styles.spacer} />;
}

export default class ScratchPage extends Component {
  static navigationOptions = { title: 'My Scratch Page' };

  constructor() {
    super();
    this.state = {
      isHeading: false,
      textStyle: null,
      myText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }

  updateState = () => {
    this.setState({ isHeading: this.state.isHeading ? false : true });
    this.setState({ textStyle: this.state.isHeading ? styles.h1 : null });
    alert("State updated.");
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <Image source={require('./assets/qmaps_image_01.png')} style={styles.logo} />
          <Spacer />
          <Text style={styles.h1}>Welcome to Quick Maps!</Text>
          <Spacer />
          <Button
            title="Press Me"
            onPress={() => { this.updateState() }} />
          <Spacer />
          <Text style={this.state.textStyle}>{this.state.myText}</Text>
        </View >
      </ScrollView>
    );
  }
}
