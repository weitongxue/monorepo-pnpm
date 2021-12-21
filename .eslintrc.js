module.exports = {
  env: {
    "node": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    "ecmaVersion": 12,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    'max-len': ['error', { code: 150 }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-namespace": "off",
    "no-use-before-define": "off",
    'no-console': 'off',
    'prefer-promise-reject-errors': 'off',
    'linebreak-style': 'off', // 回车换行风格
    'no-trailing-spaces': 1, // 禁用行尾空格
    'no-param-reassign': 'off', // 禁止对函数参数再赋值
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off', // 不强制花括号内换行
    'arrow-body-style': 'off', // 箭头函数不强制以用块体（用花括号表示）
    'import/named': 'off', // 停用 import/named 校验
    'no-unused-expressions': 'off', // 禁止使用未使用的表达式
    "class-methods-use-this": "off",
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    "space-infix-ops": ["error", {"int32Hint": false}],
    // 默认不能使用一元运算符++和--
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-underscore-dangle': 'off',
    'import/order': 'off',
    'prefer-object-spread': 'off',
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'no-async-promise-executor': 'off',
    'vue/no-multi-spaces': 'error', // 不允许有多余的空格
    'vue/html-end-tags': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],'vue/html-closing-bracket-newline': [
      'error',
      {
        // 多行 html 结束符需要换行
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
  },
};
