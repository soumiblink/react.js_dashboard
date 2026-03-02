import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import List from './pages/List'
import Details from './pages/Details'
import Camera from './pages/Camera'
import PhotoResult from './pages/PhotoResult'
import Charts from './pages/Charts'
import Map from './pages/Map'
import Settings from './pages/Settings'
import AddEmployee from './pages/AddEmployee'
import Reports from './pages/Reports'
import ApiTest from './pages/ApiTest'
import DashboardLayout from './layouts/DashboardLayout'

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-950">
        <div className="text-white">Loading...</div>
      </div>
    )
  }
  
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/api-test" element={<ApiTest />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="list" element={<List />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="camera" element={<Camera />} />
        <Route path="photo-result" element={<PhotoResult />} />
        <Route path="charts" element={<Charts />} />
        <Route path="map" element={<Map />} />
        <Route path="settings" element={<Settings />} />
        <Route path="add-employee" element={<AddEmployee />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
