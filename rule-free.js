module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-mixed-spaces-and-tabs": "off",
        "no-empty":"off",
        "no-console":"off",
        "no-extra-semi":"off" // 禁止不必要的分号
    }
};