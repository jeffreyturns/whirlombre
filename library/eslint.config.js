import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
        parser: parserTs
    },
    rules: {
      '@stylistic/ts/semi': ['error', 'never'],
      '@stylistic/ts/comma-dangle': ['error', 'never'],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/object-curly-spacing': ['error', 'always'],
      '@stylistic/ts/func-call-spacing': ['error', 'never']
    }
  }
]