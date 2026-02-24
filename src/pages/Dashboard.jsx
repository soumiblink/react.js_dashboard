import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { employeeService } from '../services/api'

const Dashboard = () => {
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalSalary: 0,
    avgSalary: 0,
    localEmployees: 0,
  })
  const [recentEmployees, setRecentEmployees] = useState([])

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const data = await employeeService.getEmployees()
      const apiEmployees = Array.isArray(data) ? data : (data?.data || [])
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      const allEmployees = [...localEmployees, ...apiEmployees]

      const total = allEmployees.length
      const totalSalary = allEmployees.reduce((sum, emp) => sum + (parseInt(emp.salary) || 0), 0)
      const avgSalary = total > 0 ? Math.round(totalSalary / total) : 0

      setStats({
        totalEmployees: total,
        totalSalary: totalSalary,
        avgSalary: avgSalary,
        localEmployees: localEmployees.length,
      })

      
      const recent = [...localEmployees, ...apiEmployees].slice(0, 4)
      setRecentEmployees(recent)
    } catch (error) {
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      const total = localEmployees.length
      const totalSalary = localEmployees.reduce((sum, emp) => sum + (parseInt(emp.salary) || 0), 0)
      const avgSalary = total > 0 ? Math.round(totalSalary / total) : 0

      setStats({
        totalEmployees: total,
        totalSalary: totalSalary,
        avgSalary: avgSalary,
        localEmployees: localEmployees.length,
      })

      setRecentEmployees(localEmployees.slice(0, 4))
    }
  }

  const statCards = [
    {
      title: 'Total Employees',
      value: stats.totalEmployees.toLocaleString(),
      change: stats.localEmployees > 0 ? `+${stats.localEmployees} new` : 'No change',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Total Salary',
      value: `$${stats.totalSalary.toLocaleString()}`,
      change: '+8.2%',
      icon: DollarSign,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Average Salary',
      value: `$${stats.avgSalary.toLocaleString()}`,
      change: '+4.3%',
      icon: TrendingUp,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'New Employees',
      value: stats.localEmployees.toString(),
      change: 'This session',
      icon: Activity,
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-neutral-400">Overview of your business metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="card-premium p-6 card-hover cursor-pointer group relative overflow-hidden"
          >
          
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-emerald-400 text-sm font-medium px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">{stat.value}</h3>
              <p className="text-neutral-400 text-sm">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-premium p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          {recentEmployees.length > 0 ? (
            <div className="space-y-4">
              {recentEmployees.map((employee, index) => (
                <div 
                  key={employee.id || index} 
                  className="flex items-center gap-4 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500 transition-colors cursor-pointer"
                  onClick={() => {
                    localStorage.setItem('selectedEmployee', JSON.stringify(employee))
                    navigate(`/details/${employee.id}`)
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {employee.name?.charAt(0) || '?'}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{employee.name || 'Unknown'}</p>
                    <p className="text-neutral-400 text-sm">{employee.designation || 'No designation'}</p>
                  </div>
                  {employee.isLocal && (
                    <span className="px-2 py-1 text-xs bg-green-500/20 border border-green-500/30 text-green-400 rounded">
                      New
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-neutral-500">
              <p>No employees yet</p>
              <button
                onClick={() => navigate('/add-employee')}
                className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
              >
                Add First Employee
              </button>
            </div>
          )}
        </div>

        <div className="card-premium p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/add-employee')}
              className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800 transition-all duration-200 text-white font-medium"
            >
              Add Employee
            </button>
            <button
              onClick={() => navigate('/reports')}
              className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800 transition-all duration-200 text-white font-medium"
            >
              View Reports
            </button>
            <button
              onClick={() => navigate('/charts')}
              className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800 transition-all duration-200 text-white font-medium"
            >
              Export Data
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800 transition-all duration-200 text-white font-medium"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
