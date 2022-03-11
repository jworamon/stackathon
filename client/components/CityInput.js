import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { getCurrentAirQuality } from '../data';
import AQIRender from './AQIRender';

const CityInput = () => {
    const [cityOrZip, setCityOrZip] = React.useState('');
    const [currentCityData, setCurrentCityData] = React.useState('');
    const [cityData, setCityData] = React.useState(null);

    useEffect(() => {
        if (cityData) {
            // setPm25(cityData.current.air_quality.pm2_5);
            // setCurrentCity(cityData.location.name);
            setCurrentCityData(cityData);
        }
    }, [cityData]);

    const handleSubmit = async () => {
        const dataFromAPI = await getCurrentAirQuality(cityOrZip);
        setCityData(dataFromAPI);
        setCityOrZip('');

    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setCityOrZip}
                value={cityOrZip}
                onSubmitEditing={handleSubmit}
                placeholder={'Enter City or Zipcode'}
            ></TextInput>
            <View>{currentCityData ? <AQIRender citydata={currentCityData} /> : null}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
        marginBottom: 15
    },
    input: {
        height: 30,
        width: 200,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
        textAlign: 'center',
    },
});

export default CityInput;
