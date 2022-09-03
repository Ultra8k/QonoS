/* eslint-disable no-undef */
module.exports = {
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "prettier/prettier": "error",
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "@typescript-eslint/explicit-member-accessibility": "error",
  },
};
