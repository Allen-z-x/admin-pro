import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: [
      'node_modules',
      '*.md',
      '.vscode',
      '.idea',
      'dist',
      'public',
      'docs',
      '.husky',
      '.local',
      'bin',
      'Dockerfile'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        axios: 'readonly',
        Vue: 'readonly',
        // Vue 3 Composition API
        ref: 'readonly',
        reactive: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        onUpdated: 'readonly',
        onBeforeMount: 'readonly',
        onBeforeUnmount: 'readonly',
        onBeforeUpdate: 'readonly',
        nextTick: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        unref: 'readonly',
        isRef: 'readonly',
        isReactive: 'readonly',
        isReadonly: 'readonly',
        isProxy: 'readonly',
        markRaw: 'readonly',
        shallowRef: 'readonly',
        shallowReactive: 'readonly',
        triggerRef: 'readonly',
        customRef: 'readonly',
        provide: 'readonly',
        inject: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
      }
    },
    plugins: {
      vue,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...vue.configs.recommended.rules,
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index', 'Header', 'tag', 'Tag']
        }
      ],
      'vue/no-unused-vars': 'off',
      'vue/no-template-shadow': 'off',
      'vue/require-v-for-key': 'off',
      'vue/no-textarea-mustache': 'off',
      'vue/no-v-html': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      indent: [
        'error',
        4,
        {
          SwitchCase: 1
        }
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      semi: 'off',
      '@typescript-eslint/no-this-alias': 'off',
      'eslintno-debugger': 'off'
    }
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        axios: 'readonly',
        Vue: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      indent: [
        'error',
        4,
        {
          SwitchCase: 1
        }
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      semi: 'off',
      '@typescript-eslint/no-this-alias': 'off',
      'eslintno-debugger': 'off'
    }
  },
  prettier
]
