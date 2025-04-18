import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { GetFormatDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({id, description, amount, date }) {
    const navigation = useNavigation();
    function expensePressHandler() {
        navigation.navigate('ManageExpenses', {
            expenseId: id
        });
    }
    return (
        <Pressable
            onPress={expensePressHandler}
            android_ripple={{ color: '#210644' }}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.description, styles.textBase]}>{description}</Text>
                    <Text style={styles.textBase}>{GetFormatDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 4,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        fontSize: 12,
        color: GlobalStyles.colors.primary500
    },
    pressed: {
        opacity: 0.7
    }
})