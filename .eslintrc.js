module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'next/core-web-vitals', 'prettier'],
  env: {
    browser: true,
    es2022: true,
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],
    'no-unused-vars': 'error',
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          'CallExpression[callee.object.name="console"][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
    indent: ['error', 2],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'next/core-web-vitals',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'no-undef': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
        'react/function-component-definition': [
          2,
          {
            namedComponents: ['function-declaration', 'arrow-function'],
          },
        ],
        'no-unused-vars': 'error',
        'no-console': 'off',
        'no-restricted-syntax': [
          'error',
          {
            selector:
              'CallExpression[callee.object.name="console"][callee.property.name!=/^(log|warn|error|info|trace)$/]',
            message: 'Unexpected property on console object was called',
          },
        ],
        indent: ['error', 2],
      },
    },
  ],
}
