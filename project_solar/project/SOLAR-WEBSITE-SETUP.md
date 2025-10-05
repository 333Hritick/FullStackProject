# Complete Solar Website Setup Guide

## 📁 Project Structure
Create this folder structure in your project:

```
your-project/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Subsidies.tsx
│   │   ├── Calculator.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── package.json
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── vite.config.ts
```

## 🚀 Setup Steps

1. **Create React + TypeScript + Vite project:**
```bash
npm create vite@latest solar-website -- --template react-ts
cd solar-website
```

2. **Install dependencies:**
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p
```

3. **Copy all the files from the sections below**

4. **Start development server:**
```bash
npm run dev
```

## 📋 Files to Copy

Copy each file content from the sections below into your project structure.