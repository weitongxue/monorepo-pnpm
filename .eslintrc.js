module.exports = {
  root: true,
  extends: 'standard',
  rules: {
    'no-console': 'off',
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
    'max-len': ['error', { code: 120 }],
    'no-dupe-args': 2, // 函数参数不能重复
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    // 默认不能使用一元运算符++和--
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'import/no-cycle': 'off',
    'no-underscore-dangle': 'off',
    'import/order': 'off',
    'prefer-object-spread': 'off',
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'no-async-promise-executor': 'off',
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    semi: [2, 'always']
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended']
    }
  ],
  parser: 'vue-eslint-parser', // 检验vue文件必须要的
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['eslint-plugin-import']
};
