import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Button({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            <Pressable onPress={onPress} android_ripple={{ color: '#210644' }} style={({ pressed }) => pressed && styles.pressed}>
                <View style={[styles.buttonContainer, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 8,
        borderRadius: 4
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
})