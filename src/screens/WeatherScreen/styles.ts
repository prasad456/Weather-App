import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: "#D26C22"
    },
    input: {
        borderColor: '#D26C22',
        borderWidth: 1,
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 8,
    },
    button: {
        width: 100,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: "#D26C22"
    },
    btnText: {
        color: "#fff"
    },
    list: {
        marginTop: 16
    }
});