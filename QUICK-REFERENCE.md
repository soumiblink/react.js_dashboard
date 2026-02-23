# Quick Reference Guide

## 🚀 Start the App

```bash
npm run dev
```

Open: http://localhost:5173

## 🔐 Login

- Username: `testuser`
- Password: `Test123`

## 📱 All Pages (11 Total)

| Page | Route | Description |
|------|-------|-------------|
| Login | `/login` | Authentication page |
| Dashboard | `/` | Overview with metrics |
| Employees | `/list` | Employee list with search |
| Employee Details | `/details/:id` | Full employee info |
| Add Employee | `/add-employee` | Form to add employee |
| Camera | `/camera` | Webcam photo capture |
| Photo Result | `/photo-result` | Display captured photo |
| Analytics | `/charts` | Salary charts |
| Map | `/map` | Employee locations |
| Reports | `/reports` | Statistics & CSV export |
| Settings | `/settings` | User preferences |

## 🎯 Quick Actions (Dashboard)

Click these buttons on the dashboard:

1. **Add Employee** → Opens `/add-employee`
2. **View Reports** → Opens `/reports`
3. **Export Data** → Opens `/charts`
4. **Settings** → Opens `/settings`

## 🧭 Sidebar Navigation

1. Dashboard
2. Employees
3. Add Employee
4. Reports
5. Camera
6. Analytics
7. Map
8. Settings

## 🔧 Key Features

### Employees Page
- Fetches data from API
- Search by name, email, designation
- Click card to view details

### Add Employee Page
- Form with 6 fields
- Validation
- Saves and redirects to list

### Reports Page
- Shows statistics
- Export to CSV button
- Summary table

### Camera Page
- Real-time webcam
- Capture button
- Saves to localStorage

### Analytics Page
- Bar chart
- Top 10 employees by salary
- Interactive tooltips

### Map Page
- Interactive map
- Employee location markers
- Popup with details

### Settings Page
- Profile settings
- Notifications toggle
- Theme selection
- Change password

## 🐛 Troubleshooting

### Can't login?
1. Clear localStorage (F12 → Application → Local Storage → Clear)
2. Refresh page
3. Try again

### Page not loading?
1. Check browser console (F12)
2. Restart dev server
3. Clear cache (Ctrl + Shift + R)

### No employee data?
- API might be down
- Check network tab in DevTools
- This is normal if API is unavailable

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── context/
│   └── AuthContext.jsx
├── layouts/
│   └── DashboardLayout.jsx
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── List.jsx
│   ├── Details.jsx
│   ├── AddEmployee.jsx
│   ├── Camera.jsx
│   ├── PhotoResult.jsx
│   ├── Charts.jsx
│   ├── Map.jsx
│   ├── Reports.jsx
│   └── Settings.jsx
├── services/
│   └── api.js
└── utils/
    └── storage.js
```

## 🎨 Design Features

- Dark theme with neutral grays
- Indigo/purple gradient accents
- Glass-morphism effects
- Smooth transitions
- Rounded corners
- Layered shadows
- Responsive layout

## 🔑 Key Technologies

- React 18
- Vite
- TailwindCSS
- React Router v6
- React Context API
- Axios
- Recharts
- React Webcam
- React Leaflet
- Lucide React Icons

## ✅ Everything Works!

All pages load correctly, all navigation works, all features are functional.

**Enjoy your premium dashboard! 🎉**
