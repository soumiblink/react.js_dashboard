import axios from 'axios'

const API_BASE_URL = 'https://backend.jotish.in/backend_dev'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const employeeService = {
  getEmployees: async () => {
    try {
      const response = await apiClient.post('/gettabledata.php', {
        username: 'test',
        password: '123456',
      })
      return response.data
    } catch (error) {
      console.error('Error fetching employees:', error)
      throw error
    }
  },
}

export default apiClient
