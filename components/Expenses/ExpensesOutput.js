import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({ expenses, expensesPeriod }) {

    const DUMMY_EXPENSES = [
        {
            id: 'e1',
            description: 'A pair of shoes',
            amount: 59.99,
            date: new Date('2021-12-19'),
        },
        {
            id: 'e2',
            description: 'A pair of trousers',
            amount: 89.99,
            date: new Date('2021-12-19'),
        },
        {
            id: 'e3',
            description: 'Some bananas',
            amount: 5.99,
            date: new Date('2021-12-19'),
        },
        {
            id: 'e4',
            description: 'A book',
            amount: 14.99,
            date: new Date('2021-12-19'),
        },
    ]

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} period={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})