/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ["Roboto", "sarif"],
        'Poppins': ["Poppins", "sarif"]

      },
    },
  },
  plugins: [],
}

