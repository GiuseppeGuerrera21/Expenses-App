import { View, FlatList, Text } from "react-native";

function ExpensesList({ expenses }) {

    function renderExpenseItem(itemData) {
        return (
                <Text>{itemData.item.description}</Text>
        )
    }

    return (
        <View>
            <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
        </View>
    );
}

export default ExpensesList