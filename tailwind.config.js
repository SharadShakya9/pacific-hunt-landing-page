/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate90: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        rotateback90: {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'rotate-icon': 'rotate90 0.3s ease-in-out forwards',
        'rotate-icon-back': 'rotateback90 0.3s ease-in-out forwards',
      },
      colors: {
        light: {
          1: "#FFFFFF",
          2: "#F5F6F6",
          3: "#EFFAFF",
          4: "#E6E7E7",
          5: "#86888A",
        },
        dark: {
          1: "#000000",
          2: "#252527",
          3: "#3C3D3D",
          4: "#4E4F50",
          5: "#6B6D6F",
        },
        blue: {
          1: "#01A3E0",
          2: "#2DC9FF",
          3: "#04334D",
          4: "#0072AA",
        }
      },
      fontFamily: {
        beVietnamPro: ['"Be Vietnam Pro"', "sans-serif"],
      },
      backgroundImage: {
        "hero": "url('/src/assets/images/herobg.png')",
      },
      boxShadow: {
        "search": "0px 2px 5px 2px #BECCFF",
        "card": "0px 10px 32px 0px #ACBCF5",
      }
    },
  },
  plugins: [],
}



