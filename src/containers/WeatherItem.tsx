import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import styles from "./styles";
import moment from "moment";

interface Props {
    item: any
}

const WeatherItem = ({ item }: Props) => (
    <View style={styles.forecastItem}>
        <View style={styles.dateContainer}>
            <Text style={styles.date}>Date: {moment(item.dt_txt).format("DD/MM/YYYY")}</Text>
        </View>
        <View style={styles.temperatureContainer}>
            <Text>Temperature</Text>
        </View>
        <View style={styles.temperatureContainer}>
            <View style={styles.temperatureInnerLeftContainer}>
                <Text>Min</Text>
            </View>
            <View style={styles.temperatureInnerContainer}>
                <Text>Max</Text>
            </View>
        </View>
        <View style={styles.temperatureContainer}>
            <View style={styles.temperatureInnerLeftContainer}>
                <Text>{item.main.temp_min}°C</Text>
            </View>
            <View style={styles.temperatureInnerContainer}>
                <Text>{item.main.temp_max}°C</Text>
            </View>
        </View>


        <View style={styles.otherContainer}>
            <View style={styles.otherInnerLeftContainer}>
                <Text>Pressure</Text>
            </View>
            <View style={styles.otherInnerContainer}>
                <Text>{item.main.pressure}</Text>
            </View>
        </View>
        <View style={styles.otherContainer}>
            <View style={styles.otherInnerLeftContainer}>
                <Text>Humidity</Text>
            </View>
            <View style={styles.otherInnerContainer}>
                <Text>{item.main.humidity}</Text>
            </View>
        </View>
    </View>
)
export default WeatherItem;
