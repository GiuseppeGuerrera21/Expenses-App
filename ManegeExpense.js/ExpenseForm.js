import Input from "./ExpenseInput";
import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import Button from "../UI/Button";

function ExpensesForm({ onSubmit, onCancel, submitButtonLabel, defaultValues }) {
    const [inputs, setinputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        },
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setinputs((previousState) => {
            return {
                ...previousState,
                [inputIdentifier]: {
                    value: enteredValue,
                    isValid: true
                }
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };
        onSubmit(expenseData);

        const amountValidated = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateValidated = expenseData.date.toString() !== 'Invalid Date';
        const descriptionValidated = expenseData.description.trim().length > 0;

        if (!amountValidated || !dateValidated || !descriptionValidated) {
            setinputs((curInputs) => {
                return {
                    amount: {
                        value: curInputs.amount.value,
                        isValid: amountValidated
                    },
                    date: {
                        value: curInputs.date.value,
                        isValid: dateValidated
                    },
                    description: {
                        value: curInputs.description.value,
                        isValid: descriptionValidated
                    }
                }
            })
        }
    }

    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    invalid={!inputs.amount.isValid}
                    textinputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    invalid={!inputs.date.isValid}
                    textinputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        keyboardType: 'numeric',
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }}
                />
            </View>
            <Input
                label="Description"
                invalid={!inputs.description.isValid}
                textinputConfig={{
                    multiline: true,
                    textAlignVertical: 'top',
                    // autoCapitalize: 'none',
                    // autoCorrect: false , di default è true  
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value
                }}
            />
            {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your entered values!</Text>}
            <View style={styles.buttons}>
                <Button
                    style={styles.button}
                    mode="flat"
                    onPress={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    style={styles.button}
                    onPress={submitHandler}
                >
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default ExpensesForm

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        margin: 8
    }
})