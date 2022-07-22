import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/expenses'

const getToken = newToken => {
    const token = `bearer ${newToken}`
    return token
}

const getAll = async (token) => {
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.get(baseUrl, config)
    console.log(response.data, 'data')
    return response.data
}

const postExpense = async (token, expense) => {
    const config = {
        headers: {Authorization: token},
    }
    const response = await axios.post(baseUrl, expense, config)
    return response.data
}

const deleteExpense = async (token, id) => {
    const config = {
        headers: {Authorization: token},
    }
    const response = await axios.delete(baseUrl + `?id=${id}`, config)
    return response.data
}
export default {getToken, getAll, postExpense, deleteExpense}