import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { employeeService } from '../services/api'
import { Loader2 } from 'lucide-react'
import L from 'leaflet'


delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Map = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    try {
      setLoading(true)
      const data = await employeeService.getEmployees()
      // Ensure data is an array
      const apiEmployees = Array.isArray(data) ? data : (data?.data || [])
      
      
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      
     
      const allEmployees = [...localEmployees, ...apiEmployees]
      
      setEmployees(allEmployees)
    } catch (error) {
      console.error('Failed to fetch employees:', error)
     
      const localEmployees = JSON.parse(localStorage.getItem('localEmployees') || '[]')
      setEmployees(localEmployees)
    } finally {
      setLoading(false)
    }
  }

  
  const getCityCoordinates = (city) => {
    const coordinates = {
      'New York': [40.7128, -74.0060],
      'London': [51.5074, -0.1278],
      'Tokyo': [35.6762, 139.6503],
      'Paris': [48.8566, 2.3522],
      'Sydney': [-33.8688, 151.2093],
    }
    return coordinates[city] || [20.5937, 78.9629] // Default to India center
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto" />
          <p className="text-neutral-400">Loading map data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Employee Locations</h1>
        <p className="text-neutral-400">Geographic distribution of employees</p>
      </div>

      <div className="card-premium p-8">
        <div className="h-[600px] rounded-xl overflow-hidden">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {employees.slice(0, 20).map((employee, index) => {
              const coords = getCityCoordinates(employee.city)
              return (
                <Marker key={index} position={coords}>
                  <Popup>
                    <div className="text-sm">
                      <p className="font-semibold">{employee.name}</p>
                      <p className="text-gray-600">{employee.designation}</p>
                      <p className="text-gray-600">{employee.city}</p>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Map
