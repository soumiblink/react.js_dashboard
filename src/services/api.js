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
      
      console.log('=== API DEBUG ===')
      console.log('Raw API Response:', response.data)
      
      // Handle different response formats
      let employeeArrays = []
      
      if (Array.isArray(response.data)) {
        employeeArrays = response.data
      } else if (response.data?.TABLE_DATA) {
        const tableData = response.data.TABLE_DATA
        if (Array.isArray(tableData)) {
          employeeArrays = tableData
        } else if (typeof tableData === 'object') {
          employeeArrays = Object.values(tableData)
        }
      }
      
      console.log('Employee arrays found:', employeeArrays.length)
      
      // Check if we have an array of arrays (nested structure)
      if (employeeArrays.length === 1 && Array.isArray(employeeArrays[0]) && Array.isArray(employeeArrays[0][0])) {
        console.log('Detected nested array structure, flattening...')
        employeeArrays = employeeArrays[0]
      }
      
      // Convert array format to object format
      // Format: [name, designation, city, id, date, salary]
      const employees = employeeArrays.map((empArray, index) => {
        if (Array.isArray(empArray)) {
          return {
            id: empArray[3] || `api-${index}`, // Use ID from array or generate one
            name: empArray[0] || 'Unknown',
            designation: empArray[1] || 'N/A',
            city: empArray[2] || 'N/A',
            email: `${(empArray[0] || 'employee').toLowerCase().replace(/\s+/g, '.')}@company.com`,
            phone: `+1-555-${String(index).padStart(4, '0')}`,
            salary: (empArray[5] || '$0').replace(/[$,]/g, ''), // Remove $ and commas
            joinDate: empArray[4] || 'N/A',
            isLocal: false
          }
        }
        return empArray
      })
      
      console.log('Converted employees:', employees.length)
      console.log('First employee:', employees[0])
      console.log('=== END DEBUG ===')
      
      return employees
    } catch (error) {
      console.error('Error fetching employees:', error)
      throw error
    }
  },
}

export default apiClient
