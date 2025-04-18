import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.buttonContainer}>
                <Ionicons
                    name={icon}
                    size={size}
                    color={color}
                />
            </View>
        </Pressable>
    );
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    },
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    }
})