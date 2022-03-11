import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AQIRender = (props) => {
    const cityData = props.citydata;
    const pm2_5 = cityData.current.air_quality.pm2_5;
    const city = cityData.location.name;
    
    const color = getcolor(pm2_5);
    
    return (
        <View style={{ ...styles.container, backgroundColor: `${color}` }}>
            <Text style={styles.text}>{city}</Text>
            <Text style={styles.text}>{parseInt(pm2_5)}</Text>
        </View>
    )
}

const getcolor = (value) => {
    switch(true) {
        case value < 12:
            return '#639735'
        case value >= 12 && value < 35:
            return '#EDB52D' 
        case value >= 35 && value < 55:
            return '#F57D01'
        case value >= 55 && value < 150:
            return '#BB3729'
        case value >= 150 && value < 250:
            return '#AD1457';
        case value >= 250:
            return '#870E4F';
        default:
            return '';
    }
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 50,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4
    },
    text: {
        fontSize: 30,
        color: '#EEEDED',
        textAlignVertical: 'bottom',
        padding: 8
    }
});

export default AQIRender;