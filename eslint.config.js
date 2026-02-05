import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Base JS + globals
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
      },
    },
  },

  // React recommended rules
  react.configs.flat.recommended,

  // React overrides (MUST COME LAST)
  {
    files: ['**/*.{jsx,js}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ["dist/**"]
  },
]);
