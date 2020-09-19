module.exports = {
  // Do not delete:
  // Jest needs these presets to properly parse and run react unit tests.
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  // Do not delete:
  // Jest needs these plugins to properly parse import/ES6 syntax from react modules.
  plugins: ["@babel/plugin-transform-modules-commonjs"]
};