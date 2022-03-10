import React from 'react';
import axios from 'axios';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CityInput = () => {
    const [city, setCity] = React.useState('');

    const handleSubmit = () => {
        const currentCity = city;
        const airQualityInfo = axios.get()
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setCity}
                value={city}
                onSubmit={handleSubmit}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 175,
        fontSize: 20,
        borderWidth: 1
    }
})

export default CityInput;