import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, MapPin, Briefcase, DollarSign, Camera } from 'lucide-react'

const Details = () => {
  const navigate = useNavigate()
  const employee = JSON.parse(localStorage.getItem('selectedEmployee') || '{}')

  const details = [
    { icon: Mail, label: 'Email', value: employee.email || 'N/A' },
    { icon: Phone, label: 'Phone', value: employee.phone || 'N/A' },
    { icon: MapPin, label: 'City', value: employee.city || 'N/A' },
    { icon: Briefcase, label: 'Designation', value: employee.designation || 'N/A' },
    { icon: DollarSign, label: 'Salary', value: `$${employee.salary || '0'}` },
  ]

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/list')}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to list</span>
      </button>

      <div className="card-premium p-8">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
            {employee.name?.charAt(0) || 'N'}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{employee.name || 'N/A'}</h1>
            <p className="text-neutral-400 text-lg">{employee.designation || 'N/A'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <detail.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-sm">{detail.label}</p>
                <p className="text-white font-medium">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800">
          <button
            onClick={() => navigate('/camera')}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5" />
            <span>Capture Photo</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details
