import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {},
  },
];
