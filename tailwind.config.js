/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Skrinshotdagi kabi dasturchilar shriftini ulash
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        // Hacker rejimida tugmalar va terminal atrofida neon yashil porlash effekti
        'neon-green': '0 0 15px rgba(16, 185, 129, 0.3)',
        'neon-blue': '0 0 15px rgba(59, 130, 246, 0.3)',
      }
    },
  },
  plugins: [],
}