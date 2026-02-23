# Premium Dashboard - Production-Grade React Application

A modern, enterprise-level dashboard application built with React 18, Vite, TailwindCSS, and premium UI components.

## ✅ All Issues Fixed!

- Login authentication working
- All pages loading correctly
- New features added: Settings, Add Employee, Reports

## Features

- **Authentication System**: Secure login with protected routes
- **Employee Management**: View, search, add, and manage employee data
- **Analytics Dashboard**: Interactive charts and data visualization
- **Camera Integration**: Capture and store photos using webcam
- **Interactive Maps**: Geographic visualization of employee locations
- **Reports**: Generate and export employee reports as CSV
- **Settings**: Manage user preferences and account settings
- **Premium UI**: Stripe-level design with dark theme, gradients, and smooth animations

## Quick Start

```bash
npm run dev
```

Login with: `testuser` / `Test123`

## All Pages

1. **Dashboard** - Overview with metrics and quick actions
2. **Employees** - List all employees with search
3. **Add Employee** - Form to add new employees
4. **Reports** - View statistics and export CSV
5. **Camera** - Capture photos with webcam
6. **Analytics** - Salary charts and visualizations
7. **Map** - Employee locations on interactive map
8. **Settings** - User preferences and account settings

## Navigation

The sidebar includes all pages:
- Dashboard
- Employees
- Add Employee
- Reports
- Camera
- Analytics
- Map
- Settings

## Quick Actions (Dashboard)

- Add Employee → Opens add employee form
- View Reports → Opens reports page
- Export Data → Opens analytics page
- Settings → Opens settings page

## Tech Stack

- React 18 + Vite
- TailwindCSS
- React Router v6
- React Context API (Auth)
- Axios
- Recharts
- React Webcam
- React Leaflet
- Lucide React Icons

## API Integration

Fetches employee data from:
- **Endpoint**: `https://backend.jotish.in/backend_dev/gettabledata.php`
- **Method**: POST
- **Body**: `{ "username": "test", "password": "123456" }`

## License

MIT
