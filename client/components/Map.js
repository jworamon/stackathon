import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { getColor } from '../data';

const Map = (props) => {
    const region = props.selectedCity;
    const cities = props.data;
    const markers = cities.map((city, idx) => {
        return (
            <Marker
                key={idx}
                coordinate={{ latitude: city.data.location.lat, longitude: city.data.location.lon }}
                // image={require('./870E4F.png')}
                pinColor={getColor(city.data.current.air_quality.pm2_5)}
                tappable={true}
                onPress={() => handleSelect(city)}
                onDeselect={() => handleSelect(null)}
            />
        )
    })

    const handleSelect = city => {
        props.selectCity(city);
    }

    const handleRegionChange = region => {
        if (region) {
            return {
                latitude: region.data.location.lat,
                longitude: region.data.location.lon,
                latitudeDelta: 0,
                longitudeDelta: 0
            }
        }
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 35.7128,
                    longitude: -104.0060,
                    latitudeDelta: 38,
                    longitudeDelta: 38,
                }}
                animateToRegion={{
                    region: handleRegionChange(region),
                    duration: 1000
                }}
                followsUserLocation={true}
            >
                {markers}
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute'
    },
});

export default Map;