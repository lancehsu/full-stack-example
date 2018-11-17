module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "no-use-before-define": 0,
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
      "no-console": ["error", { allow: ["log", "error", "warn"]}],
      "no-unused-vars": ["error", {"args": "none"}],
      "no-underscore-dangle": 0,
      "no-param-reassign": 0,
      "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }]
    }
};