import axios from "axios";


const BAKEND_URL = 'https://recat-nati-default-rtdb.firebaseio.com/'
export async function storeExpense(expenseData) {
    const response = await axios.post(BAKEND_URL + 'expenses.json', expenseData);
    const id = response.data.name;
    return id
}

export async function fetchExpenses() {
    const response = await axios.get(BAKEND_URL + 'expenses.json')

    const expenses = [];
    for (const key in response.data) {
        expenses.push({
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        })
    }
    return expenses
}

export function updatableExpense(expenseId, expenseData) {
    return axios.put(BAKEND_URL + `expenses/${expenseId}.json`, expenseData)
}

export function deleteExpense(expenseId) {
    return axios.delete(BAKEND_URL + `expenses/${expenseId}.json`)
}