import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    setIsAuthenticated(!!token)
    setLoading(false)
  }, [])

  const login = (username, password) => {
    // Check demo account
    if (username === 'testuser' && password === 'Test123') {
      localStorage.setItem('authToken', 'authenticated')
      localStorage.setItem('username', username)
      setIsAuthenticated(true)
      return true
    }

    // Check registered users
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
      localStorage.setItem('authToken', 'authenticated')
      localStorage.setItem('username', username)
      setIsAuthenticated(true)
      return true
    }

    return false
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('username')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
