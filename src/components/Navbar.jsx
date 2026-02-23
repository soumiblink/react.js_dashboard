import { useNavigate } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const username = localStorage.getItem('username') || 'User'

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleProfileClick = () => {
    navigate('/settings')
  }

  return (
    <nav className="h-16 glass border-b border-white/10 px-6 flex items-center justify-between sticky top-0 z-10 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-white">Welcome back, <span className="gradient-text">{username}</span></h2>
      </div>
      
      <div className="flex items-center gap-3">
        <button
          onClick={handleProfileClick}
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer backdrop-blur-sm group"
          title="View account details"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-white">{username}</span>
        </button>
        
        <button
          onClick={handleLogout}
          className="p-2 rounded-xl hover:bg-neutral-900/50 border border-transparent hover:border-neutral-800 transition-all duration-300 text-neutral-400 hover:text-white group"
          title="Logout"
        >
          <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
