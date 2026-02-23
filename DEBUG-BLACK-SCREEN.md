# 🐛 Black Screen Debug Guide

## Issue
After login, clicking on navigation items shows a black screen.

## What I've Done

### 1. Created Simple Test Pages
I've created simplified versions of pages with bright colored backgrounds to help debug:

- `DashboardSimple.jsx` - White and indigo boxes
- `ListSimple.jsx` - Green box
- `Test.jsx` - Red box

These pages have HIGH CONTRAST colors so you can see if they're rendering.

### 2. Updated App.jsx
Temporarily using simple pages to test routing.

### 3. Added Background Colors
Added explicit `bg-neutral-950` to all layout elements.

## How to Debug

### Step 1: Clear Everything
1. Stop the dev server (Ctrl + C)
2. Clear browser cache and localStorage:
   - Open DevTools (F12)
   - Application → Local Storage → Clear All
   - Application → Cache Storage → Delete All
3. Close browser completely
4. Restart browser

### Step 2: Restart Dev Server
```bash
npm run dev
```

### Step 3: Open Browser Console
1. Open http://localhost:5173
2. Press F12 to open DevTools
3. Go to Console tab
4. Look for any RED errors

### Step 4: Login
- Username: `testuser`
- Password: `Test123`

### Step 5: What You Should See

#### If Dashboard Loads:
You should see:
- **WHITE BOX** with "DASHBOARD IS LOADING!"
- **BLUE/INDIGO BOX** below it
- Sidebar on the left (dark)
- Navbar on top

#### If You See Black Screen:
1. Check browser console for errors
2. Try navigating to `/test` manually in URL bar
3. Check if sidebar is visible (should be on left side)

### Step 6: Test Navigation
Click "Employees" in sidebar:
- Should see **GREEN BOX** with "EMPLOYEES PAGE"

### Step 7: Check Console
Look for these types of errors:
- `Cannot read property...` - JavaScript error
- `Failed to fetch` - API error (this is OK)
- `Module not found` - Import error
- `Unexpected token` - Syntax error

## Common Causes

### 1. Tailwind Not Loading
**Symptom**: No styles at all
**Fix**: Check if `npm run dev` shows any errors

### 2. React Router Issue
**Symptom**: Pages don't change
**Fix**: Check browser URL - does it change when you click?

### 3. Component Error
**Symptom**: Black screen with console error
**Fix**: Look at the error message in console

### 4. CSS Conflict
**Symptom**: Everything is black
**Fix**: The simple pages have bright colors, so you'll see them

## What to Report Back

Please tell me:

1. **Do you see the sidebar?** (dark panel on left with menu items)
2. **Do you see the navbar?** (top bar with username)
3. **What color is the main area?** (should see white/blue/green boxes)
4. **Any errors in console?** (copy the error message)
5. **Does the URL change?** (when you click navigation items)

## Quick Tests

### Test 1: Direct URL
Try typing these URLs directly:
- `http://localhost:5173/test` - Should see RED box
- `http://localhost:5173/` - Should see WHITE and BLUE boxes
- `http://localhost:5173/list` - Should see GREEN box

### Test 2: Inspect Element
1. Right-click on the black area
2. Click "Inspect"
3. Look at the HTML structure
4. Tell me what elements you see

### Test 3: Different Browser
Try opening in a different browser (Chrome, Firefox, Edge)

## If Still Black

The simple test pages have BRIGHT COLORS specifically to debug this issue:
- White background with black text
- Green background with white text  
- Red background with white text
- Blue/Indigo background with white text

If you still see only black, it means:
1. Pages aren't rendering at all (check console)
2. CSS isn't loading (check network tab)
3. JavaScript error preventing render (check console)

## Next Steps

Once you tell me what you see (or don't see), I can fix the exact issue!
