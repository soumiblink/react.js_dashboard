# 🚀 How to Run the Application

## ✅ Login Issue Has Been Fixed!

The authentication problem has been resolved. Follow these steps:

## Step 1: Clear Browser Storage (IMPORTANT!)

Before testing, you MUST clear your browser's localStorage:

1. Open DevTools: Press `F12` or `Ctrl + Shift + I`
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Click **Local Storage** in the left sidebar
4. Click on `http://localhost:5173`
5. Click **Clear All** or delete all items
6. Close DevTools

## Step 2: Start the Development Server

If not already running:

```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

## Step 3: Open the Application

Open your browser and go to: **http://localhost:5173**

## Step 4: Login

You'll see the premium login page.

**Enter these credentials:**
- Username: `testuser`
- Password: `Test123`

Click **"Sign In"**

## Step 5: Success! 🎉

You should immediately see:
- ✅ Dashboard page with summary cards
- ✅ Sidebar on the left with navigation
- ✅ Navbar at the top with your username
- ✅ Premium dark theme UI

## Navigation

Click on the sidebar items to explore:

- **Dashboard** - Overview with metrics
- **Employees** - List of employees (fetches from API)
- **Camera** - Capture photos with webcam
- **Analytics** - Salary charts
- **Map** - Employee locations on map

## Logout

Click the logout icon (↗) in the top-right corner of the navbar.

## Troubleshooting

### Still can't login?

1. **Hard refresh the page**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Check console for errors**: Open DevTools (F12) → Console tab
3. **Restart dev server**: Stop with `Ctrl + C`, then run `npm run dev` again
4. **Try incognito/private mode**: This ensures no cached data

### Page is blank?

Check the terminal where you ran `npm run dev` for any errors.

### Can't see employee data?

The app fetches data from an external API. If the API is down, you'll see an empty list. This is normal.

## What Was Fixed?

The authentication state is now properly managed using React Context API. All components share the same authentication state, so when you login, the entire app knows you're authenticated and redirects you immediately.

## Tech Stack

- React 18 + Vite
- TailwindCSS
- React Router v6
- Axios
- Recharts
- React Webcam
- React Leaflet
- Lucide React Icons

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

---

**Enjoy your premium dashboard! 🎨✨**
