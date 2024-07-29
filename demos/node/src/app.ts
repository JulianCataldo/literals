import { htmlMinifierOutput } from './html-css-minifier.ts';
import { parserOutput } from './parse-literals.ts';

console.log(htmlMinifierOutput);

console.log('--------------------------------------');

console.dir(parserOutput, { depth: null });
