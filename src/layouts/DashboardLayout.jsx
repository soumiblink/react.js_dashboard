import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-neutral-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-neutral-950">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-neutral-950">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
