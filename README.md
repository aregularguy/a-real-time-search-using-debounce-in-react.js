# Real-Time Search Using Debounce in React

This project demonstrates how to implement real-time search functionality in React using the **debounce** technique.

---

## What is Debouncing?

**Debouncing** is a technique in programming that delays the execution of a function until after a specified period of inactivity. This ensures the function executes only once per meaningful user interaction, avoiding redundant computations and enhancing performance.

Here are common use cases in web apps:

### 1. Search Box Optimization
When users type something like `"cold brew coffee"`:
- ❌ **Without debouncing**: Triggers ~16 API calls (`"c"`, `"co"`, `"col"`, ...)
- ✅ **With debouncing**: Just 1 API call after typing stops  
→ Lets users finish their thought before triggering the search

### 2. Form Validation That Doesn't Annoy
For things like email or username checks:
- ❌ Validates on every keypress  
- ✅ Validates after 500ms of no typing  
→ Avoids annoying red errors while users are still typing

### 3. Button Click Protection
For payment or submit buttons:
- ❌ Double-click sends duplicate orders  
- ✅ 1-second lockout after first click  
→ Prevents accidental duplicate submissions

---

## Getting Started

### 1. Clone the Repository
\`\`\`bash
git clone git@github.com:kens-visuals/react-tailwind-boilerplate.git
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Update Project Name (Optional)
Edit the \`package.json\` file and update the project name to suit your setup.

### 4. Set Your Own Remote Repository
\`\`\`bash
git remote set-url origin https://git-repo/your-repository.git
\`\`\`

---

## Run the App

\`\`\`bash
npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Build for Production

\`\`\`bash
npm run build
\`\`\`

This will generate an optimized build in the \`build\` folder.

---

## Happy Hacking! 👨🏻‍💻✨
