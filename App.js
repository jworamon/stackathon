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
		// await AsyncStorage.removeItem('city');
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
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<Text style={styles.header}>Air Quality Index</Text>
				<CityInput addCity={addCityToData} />
				<Map data={cityData} />
				{/* {
        defaultData.length !== 0 ? defaultData.map((city, idx) => (
          <AQIRender key={idx} citydata={city.data} />
        )) : null
      } */}


			</View>
		</TouchableWithoutFeedback>



	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		margin: 50
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		margin: 10
	}
});

export default App;