module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "standard",
        "standard-react",
    ],
    "plugins": [
        "jest",
    ],
    "env": {
        "jest/globals": true,
        "browser": true,
    },
    "rules": {
        "strict": 0,
        "comma-dangle": ["error", "always-multiline"],
    },
};
