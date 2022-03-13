import React, { useState, useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { getColor } from '../data';
import CircleMarker from './CircleMarker';

const Map = (props) => {
    const mapCity = props.mapCity;
    const cities = props.data;
    console.log('CITY LENGTH: ', cities.length);
    const markers = cities.map((city, idx) => {
        // console.log('CITY: ', city.data.location.name);
        return (
            <Marker
                key={idx}
                coordinate={{ latitude: city.data.location.lat, longitude: city.data.location.lon }}
                // pinColor={getColor(city.data.current.air_quality.pm2_5)}
                anchor={{ x: 0.2, y: 0.4 }}
                onPress={() => handleSelect(city)}
                tracksViewChanges={false}
            >
                <View>
                    <CircleMarker
                        fill={getColor(city.data.current.air_quality.pm2_5)}
                        pm25={parseInt(city.data.current.air_quality.pm2_5)}
                    />
                </View>
            </Marker>
        )
    })
    console.log('MARKER LENGTH: ', markers.length);
    const [map, _setMap] = useState(null);
    const mapRef = useRef(map);
    const setMap = map => {
        mapRef.current = map;
        _setCities(map);
    }

    useEffect(() => {
        if (mapCity) {
            changeRegion(mapCity);
        }
    }, [mapCity])

    const handleSelect = city => {
        props.selectCity(city);
    }

    // animate map to newly searched/added region
    const changeRegion = (region) => {
        const latitude = region.data.location.lat;
        const longitude = region.data.location.lon;
        mapRef.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        });
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
                ref={mapRef}
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