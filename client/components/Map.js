import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Image } from 'react-native-maps';
import { StyleSheet, View, Dimensions, TouchableHighlight } from 'react-native';
import { getColor } from '../data';

const Map = (props) => {
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

    const handleSelect = (city) => {
        props.selectCity(city);
    }

    return (
        <TouchableHighlight>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                // initialRegion={{
                //     latitude: 46.6714,
                //     longitude: -103.8521,
                //     latitudeDelta: 5,
                //     longitudeDelta: 50,
                // }}
                // onPress={() => handleSelect(null)}
                >
                    {markers}
                </MapView>
            </View>
        </TouchableHighlight>
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