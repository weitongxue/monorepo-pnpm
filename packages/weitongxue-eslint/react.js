module.exports = {
  extends: [
    'plugin:react/recommended',
    './typescript'
  ],
  settings: {
    react: {
      version: '17.0'
    }
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off'
  }
};
