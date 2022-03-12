import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { getColor } from '../data';

const AQIRender = (props) => {
    const cityData = props.citydata.data;
    const { co, no2, o3, so2, pm2_5, pm10 } = cityData.current.air_quality;
    const currentEPA = epaConverter(cityData.current.air_quality['us-epa-index']);

    const color = getColor(pm2_5);

    return (
        <View style={{ ...styles.container, backgroundColor: `${color}` }}>
            <View style={styles.aqirender}>
                <Text style={{ ...styles.aqirender, fontSize: 20, fontWeight: 'bold'}}>{cityData.location.name.toUpperCase()}</Text>
                <Text style={{ ...styles.aqirender, fontWeight: 'bold' }}>Air Quality: {currentEPA}</Text>
                <Text>Ground-Level Ozone: {o3.toFixed(2)}</Text>
                <Text>Carbon Monoxide: {co.toFixed(2)}</Text>
                <Text>Nitrogen Dioxide: {no2.toFixed(2)}</Text>
                <Text>Sulfur Dioxide: {so2.toFixed(2)}</Text>
                <Text>PM 2.5: {pm2_5.toFixed(2)}</Text>
                <Text>PM10: {pm10.toFixed(2)}</Text>
            </View>

        </View>
    )
}

const epaConverter = (num) => {
    switch (true) {
        case num === 1:
            return 'Good'
        case num === 2:
            return 'Moderate'
        case num === 3:
            return 'Unhealthy for Sensitive Group'
        case num === 4:
            return 'Unhealthy'
        case num === 5:
            return 'Very Unhealthy'
        case num === 6:
            return 'Hazardous'
        default:
            return '';
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        flexDirection: 'column',
        borderRadius: 4,
        fontSize: 18,
        padding: 10,
        opacity: 0.8
    },
});

export default AQIRender;