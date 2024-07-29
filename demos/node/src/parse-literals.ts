import * as pl from '@literals/parser';

const templates = pl.parseLiterals(`
  render() {
    return html\`
      <h1>\${"Hello World"}</h1>
    \`;
  }
`);

console.log(templates);

export const parserOutput = templates;
