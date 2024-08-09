import { StyleSheet } from "react-native";

export default StyleSheet.create({


    forecastItem: {
        marginHorizontal: 64,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginBottom: 16
    },
    dateContainer: {
        backgroundColor: '#FF6602',
        paddingVertical: 6,
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 16,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    temperatureContainer: {
        backgroundColor: "#cccccc",
        alignItems: 'center',
        justifyContent: "center",
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row'
    },
    temperatureText: {
        paddingVertical: 6,
        textAlign: 'center'
    },
    temperatureInnerContainer: {
        backgroundColor: "#cccccc",
        paddingVertical: 6,
        alignItems: 'center',
        flex: 1,
    },
    temperatureInnerLeftContainer: {
        backgroundColor: "#cccccc",
        paddingVertical: 6,
        borderRightWidth: 1,
        alignItems: 'center',
        flex: 1,
    },
    otherContainer: {
        alignItems: 'center',
        justifyContent: "center",
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row'
    },
    otherInnerContainer: {
        paddingVertical: 6,
        alignItems: 'center',
        flex: 1,
    },
    otherInnerLeftContainer: {
        paddingVertical: 6,
        borderRightWidth: 1,
        alignItems: 'center',
        flex: 1,
    }
});