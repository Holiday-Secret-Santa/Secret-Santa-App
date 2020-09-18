module.exports = {
  // Do not delete:
  // Jest needs this in order to parse & stub css files. Required by module jest-transform-css.
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  // transformIgnorePatterns: [
  //   "node_modules/(?!(antd/dist/antd.css)/)"
  // ]
};