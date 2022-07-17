import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const signup = async (credentials) => {
  const response = await axios.post(`${baseUrl}/api/signup`, credentials)
  return response.data
}

export default signup