import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  List, 
  Camera, 
  BarChart3, 
  Map as MapIcon,
  Layers,
  Settings as SettingsIcon,
  UserPlus,
  FileText
} from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/list', icon: List, label: 'Employees' },
    { to: '/add-employee', icon: UserPlus, label: 'Add Employee' },
    { to: '/reports', icon: FileText, label: 'Reports' },
    { to: '/camera', icon: Camera, label: 'Camera' },
    { to: '/charts', icon: BarChart3, label: 'Analytics' },
    { to: '/map', icon: MapIcon, label: 'Map' },
    { to: '/settings', icon: SettingsIcon, label: 'Settings' },
  ]

  return (
    <aside className="w-64 bg-gradient-to-b from-neutral-900 to-neutral-950 border-r border-neutral-800/50 flex flex-col relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 animate-gradient"></div>
      
      <div className="relative z-10">
        <div className="p-6 border-b border-neutral-800/50">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110 animate-pulse-slow">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">WorkFlow</h1>
              <p className="text-xs text-neutral-400">Pro</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `sidebar-item ${
                  isActive
                    ? 'sidebar-item-active'
                    : 'sidebar-item-inactive'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        
        
        <div className="p-4 border-t border-neutral-800/50">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <p className="text-xs text-neutral-400 mb-1">Need help?</p>
            <p className="text-sm text-white font-medium">Contact Support</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
