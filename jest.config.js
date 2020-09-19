module.exports = {
  // Do not delete:
	// Jest needs this in order to parse & stub css files. Required by module jest-transform-css.
	transform: {
		"^.+\\.js$": "babel-jest",
		".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
		".+\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
	},
	setupFilesAfterEnv: ["./jest.setup.js"],
};
  

	
