import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, User, Mail, Phone, MapPin, Briefcase, DollarSign } from 'lucide-react'

const AddEmployee = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    designation: '',
    salary: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    
    const existingEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
    
    
    const newEmployee = {
      id: Date.now().toString(),
      ...formData,
      isLocal: true, 
    }
    
    // Add to array
    const updatedEmployees = [newEmployee, ...existingEmployees]
    
    
    localStorage.setItem('localEmployees', JSON.stringify(updatedEmployees))
    
    
    alert(`Employee "${formData.name}" added successfully!`)
    
   
    navigate('/list')
  }

  const fields = [
    { name: 'name', label: 'Full Name', icon: User, type: 'text', placeholder: 'John Doe' },
    { name: 'email', label: 'Email', icon: Mail, type: 'email', placeholder: 'john@example.com' },
    { name: 'phone', label: 'Phone', icon: Phone, type: 'tel', placeholder: '+1 234 567 8900' },
    { name: 'city', label: 'City', icon: MapPin, type: 'text', placeholder: 'New York' },
    { name: 'designation', label: 'Designation', icon: Briefcase, type: 'text', placeholder: 'Software Engineer' },
    { name: 'salary', label: 'Salary', icon: DollarSign, type: 'number', placeholder: '50000' },
  ]

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/list')}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Employees</span>
      </button>

      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Add New Employee</h1>
        <p className="text-neutral-400">Fill in the details to add a new employee</p>
      </div>

      <form onSubmit={handleSubmit} className="card-premium p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">{field.label}</label>
              <div className="relative">
                <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-neutral-500 transition-all"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            <span>Add Employee</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/list')}
            className="px-8 py-4 bg-neutral-900 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800 text-white font-medium rounded-xl transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddEmployee
