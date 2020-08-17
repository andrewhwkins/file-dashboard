module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    parser: "babel-eslint",
    rules: {
        "no-debugger": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-filename-extension": "off",
        "linebreak-style": "off",
        "react/prop-types": "warn",
        "prefer-destructuring": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "react/jsx-wrap-multilines": [
            "error",
            {
                declaration: "parens",
                assignment: "parens",
                return: "parens",
                arrow: "parens",
                condition: "parens",
                logical: "parens",
                prop: "ignore",
            },
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight", "to"],
                aspects: ["noHref", "invalidHref", "preferButton"],
            },
        ],
        "import/no-extraneous-dependencies": "off",
    },
    extends: [
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "plugin:jest/recommended",
        "prettier",
        "prettier/react",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "jest"],
};
