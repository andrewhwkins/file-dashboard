module.exports = {
    testRegex: "resources/js/.*.test.js$",
    moduleFileExtensions: ["js", "json", "jsx"],
    setupFiles: ["<rootDir>/enzyme.config.js"],
    transform: {
        "^.+.js$": "<rootDir>/node_modules/babel-jest"
    }
};
