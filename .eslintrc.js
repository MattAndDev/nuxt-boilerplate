module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'quotes': [2, 'single'],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'strict': 0,
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'no-multiple-empty-lines': [2 ,   { 'max': 4,   'maxEOF': 1, 'maxBOF': 3 } ],
    'padded-blocks': [0,'never'],
    'eol-last': [0],
    'no-mixed-requires': [0],
    'no-underscore-dangle': [0]
  },
  globals: {}
}
