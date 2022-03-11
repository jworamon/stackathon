import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Map = (props) => {
    const cities = props.data;
    const markers = cities.map((city, idx) => {
        const description =
            `Ground-Level Ozone: ${city.data.current.air_quality.o3.toFixed(2)}\nCarbon Monoxide: ${city.data.current.air_quality.co.toFixed(2)}\nPM2.5: ${city.data.current.air_quality.pm2_5.toFixed(2)}\nPM10: ${city.data.current.air_quality.pm10.toFixed(2)}`;
        return (
            <Marker
                key={idx}
                coordinate={{ latitude: city.data.location.lat, longitude: city.data.location.lon }}
                pinColor={getcolor(city.data.current.air_quality.pm2_5)}
                title={city.data.location.name}
                description={description}
            />
        )
    })

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            // initialRegion={{
            //     latitude: 38.000,
            //     longitude: -97.000,
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421
            // }}
            >
                {markers}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

const getcolor = (value) => {
    switch (true) {
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

export default Map;