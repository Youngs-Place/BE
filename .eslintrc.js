module.exports = {
  env: {
    node: true, // Node.js 환경을 설정
    es6: true, // ES6+ 기능을 사용할 수 있게 설정
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-require-imports': 'off', // require 사용 허용
  },
  ignorePatterns: ['dist/'], // dist 폴더 무시
};
