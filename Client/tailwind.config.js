/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,jsx}",
  ], // path to your files that contain the classes you want to purge from unused styles in production mode
  theme: {
    extend: {},
  },
  plugins: [],
}

