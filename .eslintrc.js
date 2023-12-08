module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: "@babel/eslint-parser",
  extends: "eslint:recommended",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2015,
    sourceType: "module",
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
    }
  },
  rules: {
    "prefer-const": ["error"]
  }
};
