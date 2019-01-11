module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "no-console": "warn",
        "jsx-a11y/label-has-for": [2, {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
        "jsx-a11y/label-has-associated-control": [2, {
            "labelComponents": ["label"],
            "labelAttributes": ["htmlFor"],
            "controlComponents": ["input"]
        }],
        "react/destructuring-assignment": ["enabled", "always", { "ignoreClassFields": "boolean" }]
    },
    "globals": {
        "document": true,
        "localStorage": true,
        "XMLHttpRequest": true,
        "fetch": true
    }
};
