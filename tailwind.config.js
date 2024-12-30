/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#282A2C",
        "main": "#212121",
        "chat-box": "#202123",
        "gray-text": "#A8AAA9",
        "mute-foreground": "#757577",
        "icon": "#A0A3A1"
      },
      width: {
        "sidebar": "320px"
      }
    },
  },
  plugins: [],
}