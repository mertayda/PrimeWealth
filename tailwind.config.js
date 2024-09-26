const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  
  
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['Playfair Display', 'serif'],},
        keyframes:{
          "0%, 50% 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
  animation: {
    tilt: "tilt 10s infinite linear",
  }
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
