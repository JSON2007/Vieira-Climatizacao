/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111E", // Azul escuro profundo e gelado
          900: "#0B192C", 
          800: "#13253C", 
          700: "#1E3550"
        },
        brand: {
          blue: "#1692D6",      // Azul ciano principal da logo IceTec
          sky: "#38B2F8",       // Ciano claro luminoso da logo
          cyan: "#00B4D8",      // Ciano vivo
          darkBlue: "#0B6291",  // Azul marinho de contraste
          accent: "#00B4D8",    // Destaque alinhado ao ciano da logo
          green: "#25D366"      // Verde WhatsApp oficial
        }
      },
      fontFamily: {
        heading: ["Roboto Condensed", "Arial Narrow", "sans-serif"],
        body: ["Roboto", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: { soft: "0 12px 36px rgba(5, 12, 22, .12)" }
    }
  },
  plugins: []
};
