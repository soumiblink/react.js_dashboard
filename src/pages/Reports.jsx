import { useState, useEffect } from 'react'
import { employeeService } from '../services/api'
import { Download, FileText, TrendingUp, Users, DollarSign, Loader2 } from 'lucide-react'

const Reports = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    total: 0,
    avgSalary: 0,
    totalSalary: 0,
    cities: 0,
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await employeeService.getEmployees()
      // Ensure data is an array
      const apiEmployees = Array.isArray(data) ? data : (data?.data || [])
      
      // Get locally added employees
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      
      // Combine both
      const allEmployees = [...localEmployees, ...apiEmployees]
      
      setEmployees(allEmployees)
      
      // Calculate statistics
      const total = allEmployees.length
      const totalSalary = allEmployees.reduce((sum, emp) => sum + (parseInt(emp.salary) || 0), 0)
      const avgSalary = total > 0 ? Math.round(totalSalary / total) : 0
      const cities = new Set(allEmployees.map(emp => emp.city)).size

      setStats({ total, avgSalary, totalSalary, cities })
    } catch (error) {
      console.error('Failed to fetch data:', error)
      // Even if API fails, show local employees
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      setEmployees(localEmployees)
      
      const total = localEmployees.length
      const totalSalary = localEmployees.reduce((sum, emp) => sum + (parseInt(emp.salary) || 0), 0)
      const avgSalary = total > 0 ? Math.round(totalSalary / total) : 0
      const cities = new Set(localEmployees.map(emp => emp.city)).size
      
      setStats({ total, avgSalary, totalSalary, cities })
    } finally {
      setLoading(false)
    }
  }

  const handleExport = () => {
    // Create CSV content
    const headers = ['Name', 'Email', 'Phone', 'City', 'Designation', 'Salary']
    const rows = employees.map(emp => [
      emp.name || '',
      emp.email || '',
      emp.phone || '',
      emp.city || '',
      emp.designation || '',
      emp.salary || '',
    ])

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `employee-report-${Date.now()}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto" />
          <p className="text-neutral-400">Loading reports...</p>
        </div>
      </div>
    )
  }

  const reportCards = [
    {
      title: 'Total Employees',
      value: stats.total,
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Average Salary',
      value: `$${stats.avgSalary.toLocaleString()}`,
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Total Payroll',
      value: `$${stats.totalSalary.toLocaleString()}`,
      icon: DollarSign,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Cities',
      value: stats.cities,
      icon: FileText,
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
          <p className="text-neutral-400">View and export employee reports</p>
        </div>
        <button
          onClick={handleExport}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportCards.map((card, index) => (
          <div key={index} className="card-premium p-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{card.value}</h3>
            <p className="text-neutral-400 text-sm">{card.title}</p>
          </div>
        ))}
      </div>

      <div className="card-premium p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Employee Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left py-3 px-4 text-neutral-400 font-medium">Name</th>
                <th className="text-left py-3 px-4 text-neutral-400 font-medium">Designation</th>
                <th className="text-left py-3 px-4 text-neutral-400 font-medium">City</th>
                <th className="text-left py-3 px-4 text-neutral-400 font-medium">Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.slice(0, 10).map((emp, index) => (
                <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
                  <td className="py-3 px-4 text-white">{emp.name || 'N/A'}</td>
                  <td className="py-3 px-4 text-neutral-300">{emp.designation || 'N/A'}</td>
                  <td className="py-3 px-4 text-neutral-300">{emp.city || 'N/A'}</td>
                  <td className="py-3 px-4 text-emerald-400">${emp.salary || '0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {employees.length > 10 && (
          <p className="text-neutral-500 text-sm mt-4 text-center">
            Showing 10 of {employees.length} employees. Export CSV for full report.
          </p>
        )}
      </div>
    </div>
  )
}

export default Reports
