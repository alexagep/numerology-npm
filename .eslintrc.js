export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'xo',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {indent: 'off', 'no-useless-constructor': 'off', 'no-return-await': 'off'},
};
