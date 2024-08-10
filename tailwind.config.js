/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-bg-start': 'hsl(192, 100%, 67%)',
        'check-bg-end': 'hsl(280, 87%, 65%)',
        'light-gray': '/* Your light gray color */',
        'light-grayish-blue': '/* Your light grayish blue color */',
        'light-grayish-blue-hover': '/* Your light grayish blue hover color */',
        'dark-grayish-blue': '/* Your dark grayish blue color */',
        'very-dark-grayish-blue': '/* Your very dark grayish blue color */',
        'very-dark-blue': '/* Your very dark blue color */',
        'very-dark-desaturated-blue': '/* Your very dark desaturated blue color */',
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    },
  },
  plugins: [],
}
