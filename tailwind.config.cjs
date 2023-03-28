/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#485ed6",

          secondary: "#f2c7fc",

          accent: "#270c7a",

          neutral: "#272037",

          "base-100": "#333234",

          info: "#94D0E1",

          success: "#33DB90",

          warning: "#EC973C",

          error: "#EA2A53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
