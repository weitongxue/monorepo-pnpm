module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    '@typescript-eslint/explicit-module-boundary-types': {
        "allowExpressions": true
    },
    "import/no-cycle": [2, { maxDepth: 1 }],
    "no-use-before-define": "off",
    'no-console': 'off',
    "@typescript-eslint/no-namespace": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-promise-reject-errors': 'off',
    'linebreak-style': 'off', // 回车换行风格
    'no-trailing-spaces': 1, // 禁用行尾空格
    'no-param-reassign': 'off', // 禁止对函数参数再赋值
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off', // 不强制花括号内换行
    'arrow-body-style': 'off', // 箭头函数不强制以用块体（用花括号表示）
    'import/named': 'off', // 停用 import/named 校验
    'no-unused-expressions': 'off', // 禁止使用未使用的表达式
    'max-len': ['error', { code: 150 }],
  }
};
                 