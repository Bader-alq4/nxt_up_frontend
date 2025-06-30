// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // ← the Tailwind PostCSS plugin (v4+)
    autoprefixer: {},             // ← vendor prefixes
  },
};
