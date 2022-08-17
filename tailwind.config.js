/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      theme: {
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
        spacing: {
          '1': '8px',
          '2': '12px',
          '3': '16px',
          '4': '24px',
          '5': '32px',
          '6': '48px',
        },
        fontFamily: {
          mdi: ["Material Design Icons"],
          poppins: ["Poppins, sans-serif"],
        },
        colors: ({ colors }) => ({
          ...colors,
          "primary-1": "#00B09E",
          "primary-3": "#344563",
          "primary-4": "#FFFFFF",
          "primary-6": "#2684FF",
        })
      }
    },
  },
  plugins: [],
}
