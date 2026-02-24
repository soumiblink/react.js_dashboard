# WorkFlow Pro - Employee Management System

<div align="center">

![WorkFlow Pro](https://img.shields.io/badge/WorkFlow-Pro-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646cff?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A premium, production-grade employee management system with stunning UI and comprehensive features**



</div>

---

## 🌟 Overview

WorkFlow Pro is a modern, full-featured employee management system built with React 18 and Vite. It features a premium dark theme UI with glassmorphism effects, smooth animations, and a comprehensive set of tools for managing employees, viewing analytics, and generating reports.

### ✨ Highlights

- 🎨 **Premium UI Design** - Stripe-level design quality with glassmorphism and smooth animations
- 📊 **Rich Analytics** - Interactive charts, maps, and comprehensive reports
- 📸 **Camera Integration** - Built-in webcam capture for employee photos
- 🔐 **Authentication System** - Secure login with demo and registration support
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Production Ready** - Clean code, proper architecture, and error handling

---

## 🚀 Features

### Core Features

#### 🔐 Authentication
- **Login System** - Secure authentication with session management
- **User Registration** - Create new accounts with validation
- **Demo Account** - Quick access with `testuser` / `Test123`
- **Protected Routes** - Automatic redirects for unauthorized access

#### 👥 Employee Management
- **Employee List** - View all employees with search functionality
- **Add Employees** - Form to add new employees with validation
- **Employee Details** - Comprehensive employee information display
- **Delete Employees** - Remove locally added employees
- **Search & Filter** - Find employees by name, email, or designation

#### 📊 Analytics & Reports
- **Dashboard** - Real-time statistics and metrics
- **Bar Charts** - Salary visualization for top 10 employees
- **Interactive Map** - Geographic distribution of employees
- **Reports** - Comprehensive statistics with CSV export
- **Recent Activity** - Track recent employee additions

#### 📸 Media Features
- **Camera Capture** - Take photos using webcam
- **Photo Preview** - View captured images
- **Photo Download** - Save photos locally

#### ⚙️ Settings
- **Profile Settings** - Manage user information
- **Notification Preferences** - Customize notifications
- **Appearance Settings** - Theme customization
- **Security Options** - Password management

---

## 🎨 UI/UX Features

### Design Elements
- ✨ **Glassmorphism Effects** - Frosted glass UI components
- 🌈 **Gradient Animations** - Smooth, animated gradients
- 💫 **Floating Elements** - Subtle floating animations
- 🎯 **Hover Effects** - Interactive hover states with scale transforms
- 🔮 **Glow Effects** - Elegant shadow and glow effects
- 📱 **Responsive Design** - Mobile-first approach

### Animations
- Floating card animations
- Pulsing logo effects
- Moving gradient backgrounds
- Scale transforms on hover
- Smooth page transitions
- Loading states

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.1.4** - Build tool and dev server
- **React Router v6** - Client-side routing
- **TailwindCSS 3.4.1** - Utility-first CSS framework

### Libraries & Tools
- **Axios** - HTTP client for API requests
- **Recharts** - Chart library for data visualization
- **React Webcam** - Webcam integration
- **React Leaflet** - Interactive maps
- **Leaflet** - Map rendering
- **Lucide React** - Beautiful icon library

### Development Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code linting

---

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser with webcam support (for camera features)

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd react.js_assignment_jotish
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 🎯 Usage

### Quick Start

1. **Login**
   - Use demo account: `testuser` / `Test123`
   - Or create a new account via registration

2. **Explore Dashboard**
   - View real-time statistics
   - Check recent activity
   - Use quick action buttons

3. **Manage Employees**
   - View employee list
   - Add new employees
   - Search and filter
   - View detailed information

4. **View Analytics**
   - Check salary charts
   - View employee locations on map
   - Generate reports
   - Export data to CSV

### Demo Credentials

```
Username: testuser
Password: Test123
```

---

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/login` | Login | User authentication |
| `/register` | Register | New user registration |
| `/` | Dashboard | Overview and statistics |
| `/list` | Employees | Employee list with search |
| `/details/:id` | Details | Employee details |
| `/add-employee` | Add Employee | Add new employee form |
| `/camera` | Camera | Webcam photo capture |
| `/photo-result` | Photo Result | Display captured photo |
| `/charts` | Analytics | Salary bar charts |
| `/map` | Map | Employee location map |
| `/reports` | Reports | Statistics and CSV export |
| `/settings` | Settings | User preferences |

---

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Top navigation bar
│   └── Sidebar.jsx     # Left sidebar navigation
├── context/            # React Context
│   └── AuthContext.jsx # Authentication state
├── layouts/            # Layout components
│   └── DashboardLayout.jsx
├── pages/              # Page components
│   ├── Login.jsx
│   ├── Register.jsx
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
├── services/           # API services
│   └── api.js
├── utils/              # Utility functions
│   └── storage.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

---

## 🔌 API Integration

### Endpoint
```
POST https://backend.sssssss.in/backend_dev/sssssss.php
```

### Request Body
```json
{
  "username": "test",
  "password": "123456"
}
```

### Response
Returns array of employee objects with fields:
- `id` - Employee ID
- `name` - Full name
- `email` - Email address
- `phone` - Phone number
- `city` - City location
- `designation` - Job title
- `salary` - Salary amount

---

## 💾 Data Storage

### localStorage Structure

```javascript
{
  // Authentication
  "authToken": "authenticated",
  "username": "testuser",
  
  // Registered Users
  "registeredUsers": [
    {
      "username": "john",
      "email": "john@example.com",
      "password": "password123",
      "createdAt": "2024-02-24T10:30:00.000Z"
    }
  ],
  
  // Local Employees
  "localEmployees": [
    {
      "id": "1234567890",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "city": "New York",
      "designation": "Software Engineer",
      "salary": "75000",
      "isLocal": true
    }
  ],
  
  // Selected Employee
  "selectedEmployee": { /* employee object */ },
  
  // Captured Photo
  "capturedPhoto": "data:image/jpeg;base64,..."
}
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--indigo-500: #6366f1
--indigo-600: #4f46e5
--purple-500: #a855f7
--purple-600: #7c3aed

/* Neutral Colors */
--neutral-950: #0a0a0a (background)
--neutral-900: #171717
--neutral-800: #262626
--neutral-400: #a3a3a3
--neutral-100: #f5f5f5 (text)

/* Accent Colors */
--emerald-400: #34d399 (success)
--red-400: #f87171 (error)
```

### Typography
- **Font Family**: System font stack
- **Headings**: Bold, gradient text effects
- **Body**: Regular weight, neutral colors
- **Small Text**: Lighter weight, muted colors

### Spacing
- **Base Unit**: 4px (0.25rem)
- **Card Padding**: 24px (1.5rem)
- **Section Spacing**: 24px (1.5rem)
- **Component Gap**: 16px (1rem)

---

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Build Output
- Output directory: `dist/`
- Optimized and minified
- Ready for deployment

---

## 🧪 Features Testing

### Authentication
- ✅ Login with demo account
- ✅ Login with registered account
- ✅ Registration with validation
- ✅ Logout functionality
- ✅ Protected routes

### Employee Management
- ✅ View employee list
- ✅ Search employees
- ✅ Add new employee
- ✅ View employee details
- ✅ Delete local employees

### Analytics
- ✅ Dashboard statistics
- ✅ Bar charts
- ✅ Interactive map
- ✅ Reports generation
- ✅ CSV export

### Media
- ✅ Camera access
- ✅ Photo capture
- ✅ Photo preview
- ✅ Photo download

---

## 🎯 Key Features Checklist

- ✅ User authentication (login/register)
- ✅ Employee CRUD operations
- ✅ Real-time statistics
- ✅ Interactive charts (Recharts)
- ✅ Interactive maps (Leaflet)
- ✅ Webcam integration
- ✅ CSV export
- ✅ Search functionality
- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design
- ✅ Premium UI/UX
- ✅ Smooth animations
- ✅ Glassmorphism effects

---



### Required Features
- CSS Grid & Flexbox
- CSS Animations
- Backdrop Filter (for glassmorphism)
- LocalStorage API
- Webcam API (for camera features)

---

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

---

## 👨‍💻 Development

### Code Style
- ESLint for code quality
- Consistent naming conventions
- Component-based architecture
- Functional components with hooks

### Best Practices
- ✅ Clean code structure
- ✅ Reusable components
- ✅ Proper error handling
- ✅ Loading states
- ✅ Form validation
- ✅ Responsive design
- ✅ Accessibility considerations



---



<div align="center">

**Built with ❤️ using React, Vite, and TailwindCSS**



</div>
