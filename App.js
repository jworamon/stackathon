import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDefaultAirQuality } from './client/data';
import CityInput from './client/components/CityInput';
import AQIRender from './client/components/AQIRender';
import Map from './client/components/Map';

const App = () => {
  const [defaultData, setDefaultData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (defaultData.length === 0) {
      loadData();
    }
  }, [defaultData]);

  const loadData = async () => {
    const dataFromAPI = await getDefaultAirQuality();
    setDefaultData(dataFromAPI);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Air Quality</Text>
      <CityInput />
      {/* {
        defaultData.length !== 0 ? defaultData.map((city, idx) => (
          <AQIRender key={idx} citydata={city.data} />
        )) : null
      } */}

      <Map data={defaultData} />
    </View>




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