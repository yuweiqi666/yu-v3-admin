module.exports = {
  // eslint 配置的根节点 不会再往上级目录找
  root: true,
  env: {
    browser: true,
    // 支持高版本的全局变量  和parserOptions.ecmaVersion 配合
    es2024: true
  },
  // 定义需要使用的全局变量
  globals: {},
  // 继承别人写好的规则配置 后面的规则会覆盖前面的规则
  extends: [
    // eslint 检测js的核心推荐规则配置
    'eslint:recommended',
    // eslint 检测ts的推荐规则配置
    'plugin:@typescript-eslint/recommended',
    // @typescript-eslint/eslint-recommended ：该配置集禁用 eslint:recommended 配置集中已经由 typeScript 处理的规则，防止eslint和typescript之间的冲突。
    'plugin:@typescript-eslint/eslint-recommended',
    // 检测vue3文件的规则配置
    'plugin:vue/vue3-essential',
    // eslint-config-prettier 关闭eslint所有可能与prettier冲突的规则 确保放在最后来覆盖其他配置集
    'prettier'
  ],
  // 指定.eslintrc.{js,cjs}文件使用特定配置 支持node环境
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  // eslint默认只支持es5的语法 parserOptions可以配置指定高版本的语法校验
  parserOptions: {
    ecmaVersion: 15,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {}
  },
  // 表明使用的插件 即使没有显式指定plugins字段，ESLint仍然可以通过其他方式检测到并使用插件。但是为了确保配置的一致性和可维护性，最佳实践是在配置文件中明确列出所使用的插件和规则
  plugins: [
    '@typescript-eslint', // 实际引入@typescript-eslint/eslint-plugin
    'vue', // 实际引入eslint-plugin-vue
    'prettier' // 实际引入 eslint-plugin-prettier
  ],
  rules: {
    // eslint-plugin-vue -> vue/multi-word-component-names
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] //需要忽略的组件名
      }
    ],
    // @typescript-eslint/eslint-plugin -> @typescript-eslint/no-explicit-any
    '@typescript-eslint/no-explicit-any': ['off'],
    indent: ['error', 2, { SwitchCase: 1 }], // SwitchCase 用于配置对switch语句的缩进
    'quote-props': ['error', 'as-needed'],
    'prettier/prettier': 'error', // 将prettier规则转化为 eslint规则 在selint中使用prettier规则进行校验
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  }
}
