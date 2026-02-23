import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { employeeService } from '../services/api'
import { Search, Loader2, User, Trash2 } from 'lucide-react'

const List = () => {
  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchEmployees()
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filtered = employees.filter((emp) =>
        emp.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.designation?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredEmployees(filtered)
    } else {
      setFilteredEmployees(employees)
    }
  }, [searchTerm, employees])

  const fetchEmployees = async () => {
    try {
      setLoading(true)
      const data = await employeeService.getEmployees()
      // Ensure data is an array
      const apiEmployees = Array.isArray(data) ? data : (data?.data || [])
      
      // Get locally added employees
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      
      // Combine both (local employees first)
      const allEmployees = [...localEmployees, ...apiEmployees]
      
      setEmployees(allEmployees)
      setFilteredEmployees(allEmployees)
    } catch (error) {
      console.error('Failed to fetch employees:', error)
      // Even if API fails, show local employees
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      setEmployees(localEmployees)
      setFilteredEmployees(localEmployees)
    } finally {
      setLoading(false)
    }
  }

  const handleEmployeeClick = (employee) => {
    localStorage.setItem('selectedEmployee', JSON.stringify(employee))
    navigate(`/details/${employee.id}`)
  }

  const handleDeleteEmployee = (e, employeeId) => {
    e.stopPropagation() // Prevent navigation when clicking delete
    
    if (confirm('Are you sure you want to delete this employee?')) {
      // Get local employees
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      
      // Filter out the deleted employee
      const updatedEmployees = localEmployees.filter(emp => emp.id !== employeeId)
      
      // Save back to localStorage
      localStorage.setItem('localEmployees', JSON.stringify(updatedEmployees))
      
      // Refresh the list
      fetchEmployees()
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto" />
          <p className="text-neutral-400">Loading employees...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Employees</h1>
          <p className="text-neutral-400">{filteredEmployees.length} total employees</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, or designation..."
          className="w-full pl-12 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-neutral-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            onClick={() => handleEmployeeClick(employee)}
            className="card-premium p-6 hover:scale-105 hover:border-indigo-500 transition-all duration-200 cursor-pointer group relative"
          >
            {employee.isLocal && (
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-2 py-1 text-xs bg-green-500/20 border border-green-500/30 text-green-400 rounded">
                  New
                </span>
                <button
                  onClick={(e) => handleDeleteEmployee(e, employee.id)}
                  className="p-1 rounded bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-colors"
                  title="Delete employee"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1 truncate group-hover:text-indigo-400 transition-colors">
                  {employee.name || 'N/A'}
                </h3>
                <p className="text-neutral-400 text-sm mb-2 truncate">{employee.designation || 'N/A'}</p>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700">
                    {employee.city || 'N/A'}
                  </span>
                  <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    ${employee.salary || '0'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-400">No employees found</p>
        </div>
      )}
    </div>
  )
}

export default List
