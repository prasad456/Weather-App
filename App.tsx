import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WeatherScreen from './src/screens/WeatherScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default App;
