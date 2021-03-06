module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    webextensions: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base', '@vue/prettier'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js'
      },
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.vue'],
      },
    }
  },
  // add your custom rules here
  rules: {
    'arrow-body-style': 'off',
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: false,
    }],
    // disallow default export over named export
    'import/prefer-default-export': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: false
    }],

    'prettier/prettier': ['error', {
      useTabs: false,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 100,
      htmlWhitespaceSensitivity: 'ignore',
    }],
  },
  globals: {
    "API_KEY": true,
  },
}
