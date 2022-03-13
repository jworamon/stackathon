import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { getColor, epaConverter } from '../data';

const AQIRender = (props) => {
    const cityData = props.citydata.data;
    const { co, no2, o3, so2, pm2_5, pm10 } = cityData.current.air_quality;
    const currentEPA = epaConverter(cityData.current.air_quality['us-epa-index']);
    const color = getColor(pm2_5);

    return (
        <View style={{ ...styles.container, backgroundColor: `${color}` }}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{cityData.location.name.toUpperCase()} - {pm2_5.toFixed(2)}</Text>
                <Text style={{ fontWeight: 'bold' }}>Air Quality: {currentEPA}</Text>
                <Text>Ground-Level Ozone: {o3.toFixed(2)}</Text>
                <Text>Carbon Monoxide: {co.toFixed(2)}</Text>
                <Text>Nitrogen Dioxide: {no2.toFixed(2)}</Text>
                <Text>Sulfur Dioxide: {so2.toFixed(2)}</Text>
                <Text>PM10: {pm10.toFixed(2)}</Text>
                <Text>PM 2.5: {pm2_5.toFixed(2)}</Text>
            </View>
            <Pressable onPress={() => props.selectCity(null)} >
                <Text style={styles.button}>{'[close x]'}</Text>
            </Pressable>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 4,
        fontSize: 18,
        padding: 10,
        paddingRight: 0,
        opacity: 0.85
    },
    button: {
        fontSize: 15,
        paddingRight: 10,
        alignSelf: 'flex-end'
    }
});

export default AQIRender;