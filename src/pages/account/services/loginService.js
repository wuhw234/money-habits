import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const login = async (credentials) => {
  console.log(credentials)
  try {
  const response = await axios.post(`${baseUrl}/api/login`, credentials)
  return response.data
  }
  catch (error) {
    console.log(error)
  }
}

export default login