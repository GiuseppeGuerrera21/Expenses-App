import { View, FlatList, Text } from "react-native";
import ExpennseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {

    function renderExpenseItem(itemData) {
        return <ExpennseItem {...itemData.item} />
    }

    return (
        <View>
            <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
        </View>
    );
}

export default ExpensesList