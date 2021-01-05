module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": 2,
    "no-console": "off",
    "no-debugger": "off",
    "no-irregular-whitespace": "off",
    "no-unused-vars": 1,
    "vue/require-prop-type-constructor": "off",
    "no-irregular-whitespace": "off",
    "prettier/prettier": "off",
    "no-prototype-builtins": "off",
  },
};
