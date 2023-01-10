module.exports = {
  env: {
      browser: true,
      es2020: true,
      jest: true,
      node: true,
  },
  settings: {
      react: {
          version: 'detect',
      },
  },
  parser: '@typescript-eslint/parser',
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
  },
  rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
  },
}

