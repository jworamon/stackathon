import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAirQualityData, defaultCities } from './client/data';
import CityInput from './client/components/CityInput';
import AQIRender from './client/components/AQIRender';
import Map from './client/components/Map';

const App = () => {
	const [cities, _setCities] = useState(defaultCities);
	const [cityData, setCityData] = useState([]);
	const [selectedCity, setSelectedCity] = useState(null);

	useEffect(() => {
		if (cities.length === defaultCities.length) {
			loadCitiesData();
		}
	}, [cityData]);

	const citiesRef = useRef(cities);
	const setCities = cities => {
		citiesRef.current = cities;
		_setCities(cities);
	}

	const getCityFromStorage = async () => {
		const jsonValue = await AsyncStorage.getItem('city');
		if (jsonValue) {
			const cityArr = JSON.parse(jsonValue);
			setCities([...citiesRef.current, ...cityArr]);
		}
	}

	const loadCitiesData = async () => {
		try {
			await getCityFromStorage();
			const cityDataPromises = citiesRef.current.map(async (city) => {
				const data = await getAirQualityData(city);
				return data;
			});

			const [...cityPromiseResult] = await Promise.all(cityDataPromises);
			setCityData([...cityData, ...cityPromiseResult]);

		} catch (err) {
			console.log('error', err);
		}
	}

	const addCityToData = (data) => {
		setCityData([...cityData, data]);
		setSelectedCity(data);
	}

	const selectCity = (data) => {
		setSelectedCity(data);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<Map data={cityData} selectCity={selectCity} />
				<CityInput addCity={addCityToData} />
				{/* <View style={styles.header}>
					<Text style={styles.headerText}>Air Quality Index</Text>
					
				</View> */}
				{selectedCity
					? <AQIRender style={{ ...styles.aqirender }} citydata={selectedCity} />
					: null}
			</View>
		</TouchableWithoutFeedback>



	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		color: '#EEEDED',
	},
	header: {
		width: 300,
		height: 75,
		margin: 45,
		backgroundColor: '#fff',
		borderRadius: 4
	},
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	aqirender: {
		color: '#EEEDED'
	}
});

export default App;