module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
  },
}
