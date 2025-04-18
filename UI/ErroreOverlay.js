import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "./Button";

function ErrorOverlay({ message, onConfirm }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.text]}>An occured!</Text>
            <Text style={styles.text}>{message}</Text>
            <Button onConfirm={onConfirm}>Okay</Button>
        </View>
    );
}

export default ErrorOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    message:{
        fontSize: 14,
    }
})