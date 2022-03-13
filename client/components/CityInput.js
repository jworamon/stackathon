import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { getAirQualityData, defaultCities} from '../data';
import AQIRender from './AQIRender';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CityInput = props => {
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

    // store each city being searched into localstorage
    const storeCity = async (value) => {
        try {
            const storageStrValue = await AsyncStorage.getItem('city');
            const storageValue = storageStrValue ? JSON.parse(storageStrValue) : [];
            
            // check if the city already exists on map
            if (storageValue.includes(value) || defaultCities.includes(value)) return;
            
            storageValue.push(value);
            const jsonValue = JSON.stringify(storageValue);
            await AsyncStorage.setItem('city', jsonValue)

        } catch (err) {
            console.log('error', err);
        }
    }

    const handleSubmit = async () => {
        const dataFromAPI = await getAirQualityData(cityOrZip);
        storeCity(cityOrZip);
        setCityData(dataFromAPI);
        setCityOrZip('');
        props.addCity(dataFromAPI);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setCityOrZip}
                value={cityOrZip}
                onSubmitEditing={handleSubmit}
                placeholder={'Enter City or Zipcode'}
            />
            {/* <View>{currentCityData ? <AQIRender citydata={currentCityData} /> : null}</View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 70,
        marginBottom: 15
    },
    input: {
        height: 40,
        width: Dimensions.get('window').width * 0.9,
        fontSize: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 4,
        textAlign: 'center',
    },
});

export default CityInput;
