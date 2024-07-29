// example for using with Lit

import { defineConfig } from 'vite';
import { literalsHtmlCssMinifier } from '@literals/rollup-plugin-html-css-minifier';

export default defineConfig({
  plugins: [literalsHtmlCssMinifier()],

  build: { target: 'esnext' }
});
