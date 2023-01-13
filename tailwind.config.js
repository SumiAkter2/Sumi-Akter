/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",

          secondary: "#701a75",

          accent: "#282c34",

          neutral: "#22d3ee",

          "base-100": "#FFFFFF",

          info: "#6b7280",

          success: "#facc15",

          warning: "#d97706",

          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
