/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      daisyui: {
        themes: [
          {
            mytheme: {
              "primary": "#ffc4d3",
              "secondary": "#f285d6",
              "accent": "#6501ad",
              "neutral": "#1B1D23",
              "base-100": "#EDE6EF",
              "info": "#408BC4",
              "success": "#24BC85",
              "warning": "#A26F11",
              "error": "#F4627A",
            },
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
}
