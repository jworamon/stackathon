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
	const [mapCity, setMapCity] = useState(null);
	const [test, setTest] = useState(false);

	useEffect(async () => {
		await loadCitiesData();		
		setTest(true);
	}, []);

	useEffect(() => {
		if (test) {
			setCityData([...cityData]);
			setTest(false);
		}
	}, [test]);
	
	const citiesRef = useRef(cities);
	const setCities = cities => {
		citiesRef.current = cities;
		_setCities(cities);
	}

	// get city names from async strage
	const getCityFromStorage = async () => {
		const jsonValue = await AsyncStorage.getItem('city');
		if (jsonValue) {
			const cityArr = JSON.parse(jsonValue);
			setCities([...citiesRef.current, ...cityArr]);
		}
	}

	// get all city names (default + async storage) and get data from API calls
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

	// handle when a new city is added/being searched; adds new marker + shows AQIRender
	const addCityToData = (data) => {
		setCityData([...cityData, data]);
		setSelectedCity(data);
	}

	// handle when a user presses on existing markers; shows AQIRender
	const selectCity = (data) => {
		setSelectedCity(data);
	}

	// handle when a new city is added/being searched; mapview follows to the city coordinate
	const changeMapCity = (data) => {
		setMapCity(data);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<Map data={cityData} selectCity={selectCity} mapCity={mapCity} />
				<CityInput addCity={addCityToData} changeMapCity={changeMapCity} />
				{selectedCity
					? <AQIRender style={{ ...styles.aqirender }} citydata={selectedCity} selectCity={selectCity} />
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
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		flexDirection: 'column',
		alignContent: 'flex-end'
	},
	aqirender: {
		color: '#EEEDED'
	}
});

export default App;