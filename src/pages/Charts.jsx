import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { employeeService } from '../services/api'
import { Loader2 } from 'lucide-react'

const Charts = () => {
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchChartData()
  }, [])

  const fetchChartData = async () => {
    try {
      setLoading(true)
      const data = await employeeService.getEmployees()
      // Ensure data is an array
      const apiEmployees = Array.isArray(data) ? data : (data?.data || [])
      
      // Get locally added employees
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      
      // Combine both
      const allEmployees = [...localEmployees, ...apiEmployees]
      
      const top10 = allEmployees.slice(0, 10).map((emp) => ({
        name: emp.name || 'N/A',
        salary: parseInt(emp.salary) || 0,
      }))
      setChartData(top10)
    } catch (error) {
      console.error('Failed to fetch chart data:', error)
      // Even if API fails, show local employees
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      const top10 = localEmployees.slice(0, 10).map((emp) => ({
        name: emp.name || 'N/A',
        salary: parseInt(emp.salary) || 0,
      }))
      setChartData(top10)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto" />
          <p className="text-neutral-400">Loading chart data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-neutral-400">Salary distribution for top 10 employees</p>
      </div>

      <div className="card-premium p-8">
        <h2 className="text-xl font-semibold text-white mb-6">Employee Salary Chart</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <defs>
                <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis 
                dataKey="name" 
                stroke="#737373" 
                tick={{ fill: '#a3a3a3' }}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis 
                stroke="#737373" 
                tick={{ fill: '#a3a3a3' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#171717',
                  border: '1px solid #262626',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Legend 
                wrapperStyle={{ color: '#a3a3a3' }}
              />
              <Bar 
                dataKey="salary" 
                fill="url(#colorSalary)" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Charts
