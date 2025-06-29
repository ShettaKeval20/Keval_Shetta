module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      blur: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        xl: "12px",
      },
      animation: {
        'fade-down': 'fadeDown 0.3s ease-out',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'pulse-slower': 'pulse 10s ease-in-out infinite',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
