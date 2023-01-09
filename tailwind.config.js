/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        breath: "breath 1s ease-in-out",
        jump: "jump 2s ease-in-out infinite",
        "gradient-xy": "gradient-xy 8s ease infinite",
      },

      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        breath: {
          "0%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(1)" },
        },
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(1rem)" },
          "100%": { transform: "translateY(0)" },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      }),
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
