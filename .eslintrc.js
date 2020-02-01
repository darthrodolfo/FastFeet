module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    //'plugin:react/recommended',
    'airbnb',
    'prettier',
    //'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
     //'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    //"global-require": "off",
   // "import/prefer-default-export": "off",
    //"no-unsued-expressions": ["error", { "allowTaggedTemplates":true}]
  },
};
