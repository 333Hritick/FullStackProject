# Tailwind CSS Setup Guide

## Method 1: Setup with Vite + React (Recommended)

### Step 1: Create a new React project with Vite
```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
npm install
```

### Step 2: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Configure Tailwind (tailwind.config.js)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4: Add Tailwind directives to CSS (src/index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Start using Tailwind classes
```jsx
// src/App.tsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Hello Tailwind CSS!
        </h1>
        <p className="text-gray-600">
          Tailwind CSS is now working in your React project.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
          Click me
        </button>
      </div>
    </div>
  )
}

export default App
```

## Method 2: Add to Existing React Project

### Step 1: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Configure tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 3: Create/Update postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Step 4: Add Tailwind to your CSS
Replace your main CSS file content with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Method 3: Using CDN (Quick Start - Not Recommended for Production)

Add this to your HTML head:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

## Common Tailwind Classes Examples

### Layout & Spacing
```jsx
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-6 m-4">Content</div>
  </div>
</div>
```

### Colors & Typography
```jsx
<h1 className="text-4xl font-bold text-blue-600 mb-4">
  Large Blue Heading
</h1>
<p className="text-gray-600 leading-relaxed">
  Gray paragraph text with relaxed line height
</p>
```

### Buttons & Interactive Elements
```jsx
<button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
  Interactive Button
</button>
```

### Responsive Design
```jsx
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
  Responsive width
</div>
```

### Flexbox & Grid
```jsx
<div className="flex items-center justify-between">
  <div className="flex-1">Left content</div>
  <div>Right content</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
</div>
```

## Customizing Tailwind

### Extend the theme in tailwind.config.js
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
        'brand': {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        'custom': ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}
```

### Using custom values
```jsx
<div className="bg-brand-500 text-custom-blue font-custom p-72">
  Custom styled content
</div>
```

## Useful Tailwind Extensions

### Install additional plugins
```bash
npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

### Add to tailwind.config.js
```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

## Development Tips

### 1. Use Tailwind CSS IntelliSense (VS Code Extension)
- Auto-completion for class names
- Hover previews
- CSS class sorting

### 2. Purge unused CSS in production
Tailwind automatically removes unused styles when building for production.

### 3. Use @apply for component styles
```css
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors;
}
```

### 4. Responsive design breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## Troubleshooting

### Styles not applying?
1. Check that Tailwind directives are in your CSS
2. Verify content paths in tailwind.config.js
3. Restart your development server
4. Check for typos in class names

### Build size too large?
1. Ensure proper content configuration
2. Use PurgeCSS (included by default)
3. Remove unused plugins

## Next Steps

1. Explore the [Tailwind CSS documentation](https://tailwindcss.com/docs)
2. Try [Tailwind UI](https://tailwindui.com/) for pre-built components
3. Use [Headless UI](https://headlessui.dev/) for accessible components
4. Check out [Tailwind CSS playground](https://play.tailwindcss.com/)

Your Tailwind CSS setup is now complete! Start building beautiful, responsive interfaces with utility-first CSS.