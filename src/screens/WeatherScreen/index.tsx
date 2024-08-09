import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Pressable } from 'react-native';
import WeatherService from '../../services/WeatherService';
import styles from './styles';
import WeatherItem from '../../containers/WeatherItem';

const WeatherScreen = () => {
    const [city, setCity] = useState('Visakhapatnam');
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState("");

    const fetchForecast = async () => {
        try {
            const data = await WeatherService.getForecastByCityName(city);
            setForecast(data);
        } catch (err) {
            console.log('log err', err)
            setError('Could not fetch weather data');
        }
    };

    useEffect(() => {


        let timerId: NodeJS.Timeout;
        timerId = setTimeout(() => {
            // Call your API here using the searchTerm
            if (city) {
                fetchForecast();
            }
        }, 2000);


        // Cleanup function to clear the timer
        return () => clearTimeout(timerId);

    }, [city]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather in your city</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
            />
            <Pressable onPress={fetchForecast} style={styles.button}>
                <Text style={styles.btnText}>Search</Text>
            </Pressable>
            {error && <Text style={styles.error}>{error}</Text>}
            <FlatList
                style={styles.list}
                data={forecast}
                keyExtractor={(item: any) => item.dt.toString()}
                renderItem={({ item }) => (
                    <WeatherItem item={item} />
                )}
            />
        </View>
    );
};

export default WeatherScreen;
