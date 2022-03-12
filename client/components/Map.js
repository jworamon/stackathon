import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Image } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Map = (props) => {
    const cities = props.data;
    const markers = cities.map((city, idx) => {
        const description = getDescription(city.data.current.air_quality);
        return (
            <Marker
                key={idx}
                coordinate={{ latitude: city.data.location.lat, longitude: city.data.location.lon }}
                // image={require('./870E4F.png')}
                pinColor={getcolor(city.data.current.air_quality.pm2_5)}
                title={`${city.data.location.name} - PM2.5: ${parseInt(city.data.current.air_quality.pm2_5)}`}
                description={description}
            />
        )
    })


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 46.6714,
                    longitude: -103.8521,
                    latitudeDelta: 5,
                    longitudeDelta: 50,
                }}
            >
                {markers}
            </MapView>
        </View>
    )
}

const getDescription = (aqiObj) => {
    return `Air Quality: ${epaConverter(aqiObj['us-epa-index'])}\nCarbon Monoxide: ${aqiObj.co.toFixed(2)}\nGround-Level Ozone: ${aqiObj.o3.toFixed(2)}\nPM10: ${aqiObj.pm10.toFixed(2)}`;
}

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: 400,
    },
});

export default Map;