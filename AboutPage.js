import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './assets/styles';

function Spacer() {
    return <View style={styles.spacer} />;
}

export default class AboutPage extends Component {
    static navigationOptions = { title: 'About Quick Maps...' };

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let aboutTitle = "QUICK MAPS® VERSION 1.0";
        let aboutCopyright = "Copyright © 1993-" + new Date().getFullYear() + " Rob Garcia. All rights reserved.";
        let aboutText = "The Quick Map Reference allows drivers to quickly look up maps of institutions, such as hospitals and universities, that are not shown on Google Maps or the Computer Aided Dispatch (CAD) system.";
        let aboutWarning = "Warning: This computer program is protected by copyright law and international treaties. Unauthorized reproduction or distribution of this program, or any portion of it, may result in severe civil or criminal penalties, and will be prosecuted under the maximum extent possible under law.";
        return (
            <ScrollView>
                <View style={styles.aboutView}>
                    <Text style={styles.h1}>{aboutTitle}</Text>
                    <View style={styles.mainView}>
                        <Image source={require('./assets/qmaps_image_01.png')} style={styles.logo} />
                    </View>
                    <Text>{aboutCopyright}</Text>
                    <View style={styles.hr} />
                    <Text>{aboutText}</Text>
                    <View style={styles.hr} />
                    <Text>{aboutWarning}</Text>
                </View >
            </ScrollView>
        );
    }
}
