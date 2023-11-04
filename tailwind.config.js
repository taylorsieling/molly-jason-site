module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],  
  theme: {
    minWidth: {
      '3': '340px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [{
        mytheme: {
          "primary": "#8c9cac",
          "secondary": "#d0b08b",
          "accent": "#c78665",
          "neutral": "#2f2e2a",
          "base-100": "#ffffff",
          "info": "#dde1e2",
          "success": "#808b6c",
          "warning": "#7d5c58",
          "error": "#c78665",
          // "warning": "#ca8a04",
          // "error": "#ac8c9c",
        },
      }],
  },
  plugins: [require("daisyui"),]
}
