import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CityInput from './client/CityInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter City or Zipcode</Text>
      <CityInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  }
});
