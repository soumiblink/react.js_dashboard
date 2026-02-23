# Quick Start Guide

## Installation Complete! ✅

All dependencies have been installed successfully.

## Run the Application

```bash
npm run dev
```

The application will start at: **http://localhost:5173**

## Login Credentials

- **Username**: `testuser`
- **Password**: `Test123`

## What's Included

✅ Premium dark theme UI with Stripe-level design quality
✅ Authentication system with protected routes
✅ Employee list with search functionality
✅ Employee details page
✅ Camera integration for photo capture
✅ Analytics charts (Recharts)
✅ Interactive map (React Leaflet)
✅ Responsive sidebar navigation
✅ Glass-morphism navbar
✅ API integration with Axios
✅ Clean folder architecture

## Project Structure

```
src/
├── components/       # Navbar, Sidebar
├── layouts/          # DashboardLayout
├── pages/            # All page components
├── services/         # API service layer
├── hooks/            # useAuth hook
└── utils/            # Storage utilities
```

## Features

1. **Login Page** - Premium authentication UI
2. **Dashboard** - Summary cards and metrics
3. **Employee List** - Searchable employee cards with API data
4. **Employee Details** - Full employee information
5. **Camera** - Webcam integration for photo capture
6. **Photo Result** - Display and download captured photos
7. **Charts** - Salary analytics with Recharts
8. **Map** - Geographic employee distribution

## API Endpoint

The app fetches data from:
- **URL**: https://backend.jotish.in/backend_dev/gettabledata.php
- **Method**: POST
- **Body**: `{ "username": "test", "password": "123456" }`

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

**Ready to go! Run `npm run dev` to start developing.**
