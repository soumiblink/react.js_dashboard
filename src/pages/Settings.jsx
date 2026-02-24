import { useState } from 'react'
import { Save, User, Bell, Shield, Palette } from 'lucide-react'

const Settings = () => {
  const [settings, setSettings] = useState({
    username: localStorage.getItem('username') || 'testuser',
    email: 'user@example.com',
    notifications: true,
    darkMode: true,
    language: 'en',
  })

  const handleSave = () => {
    localStorage.setItem('username', settings.username)
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-neutral-400">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
       
        <div className="card-premium p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-300 mb-2 block">Username</label>
              <input
                type="text"
                value={settings.username}
                onChange={(e) => setSettings({ ...settings, username: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-300 mb-2 block">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>
          </div>
        </div>

        
        <div className="card-premium p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white">Notifications</h2>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-neutral-900 border border-neutral-800">
            <div>
              <p className="text-white font-medium">Enable Notifications</p>
              <p className="text-neutral-400 text-sm">Receive updates about your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>

        
        <div className="card-premium p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white">Appearance</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-300 mb-2 block">Theme</label>
              <select
                value={settings.darkMode ? 'dark' : 'light'}
                onChange={(e) => setSettings({ ...settings, darkMode: e.target.value === 'dark' })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              >
                <option value="dark">Dark Mode</option>
                <option value="light">Light Mode</option>
              </select>
            </div>
          </div>
        </div>

       
        <div className="card-premium p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white">Security</h2>
          </div>

          <button className="w-full py-3 bg-neutral-900 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800 text-white font-medium rounded-lg transition-all duration-200">
            Change Password
          </button>
        </div>

        
        <button
          onClick={handleSave}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  )
}

export default Settings
