import { minifyHTMLLiterals } from '@literals/html-css-minifier';

const result = await minifyHTMLLiterals(
  `function render(title, items) {
    return html\`
      <style>
        .heading {
          color: blue;
        }
      </style>
      <h1 class="heading">\${title}</h1>
      <ul>
        \${items.map(item => {
          return getHTML()\`
            <li>\${item}</li>
          \`;
        })}
      </ul>
    \`;
  }`,
  {
    fileName: 'render.js',
  },
);

console.log(result?.code);

export const htmlMinifierOutput = result;
