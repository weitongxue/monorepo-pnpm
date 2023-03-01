module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/consistent-type-imports': 'off'
      }
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    './typescript'
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',

    // "vue/component-tags-order": ["error", {
    // order: ["script", "template", "style"],
    // }],
    'vue/no-multi-spaces': 'error',
    'vue/html-end-tags': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        // 多行 html 结束符需要换行
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2
        },
        multiline: {
          max: 1
          // allowFirstLine: false,
        }
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ]
  }
};
