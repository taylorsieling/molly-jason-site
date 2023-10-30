module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],  
  theme: {
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
          "accent": "#36484a",
          "neutral": "#1A1F20",
          "base-100": "#f6f6f9",
          "info": "#b2bec8",
          "success": "#808b6c",
          "warning": "#ca8a04",
          "error": "#ac8c9c",
        },
      }],
  },
  plugins: [require("daisyui"),]
}
