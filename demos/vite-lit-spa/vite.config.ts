// example for using with Lit

import { defineConfig } from 'vite';
import rollupPluginHtmlCssMinifier from '@literals/rollup-plugin-html-css-minifier';

console.log(rollupPluginHtmlCssMinifier);

export default defineConfig({
  // HACK: We have to use `.default` until better ESM compat. or full ESM migration
  // @ts-expect-error
  plugins: [rollupPluginHtmlCssMinifier.default()],

  build: { target: 'esnext' }
});
