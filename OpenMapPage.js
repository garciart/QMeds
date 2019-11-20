import React, { Component } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from './assets/styles';

export default class OpenMapPage extends Component {
    static navigationOptions = { title: 'Open a Map...' };

    constructor() {
        super();
        this.state = {

        }
        /* https://facebook.github.io/react-native/docs/network */
        fetch('https://github.com/garciart/TestMate/Tests', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'name'
            }),
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.openMapView}>
                    <Text style={styles.h1}>Select your map:</Text>
                    <FlatList
                        data={[
                            { key: 'Deer\'s Head Hospital Center' },
                            { key: 'Henry S. Parker Athletic Complex' },
                            { key: 'PRMC' },
                            { key: 'Salisbury University' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
            </ScrollView>
        )
    }
}