// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // Required for GitHub Pages project sites (username.github.io/repo-name).
  // Without these, asset links (CSS/JS) get built as if the site lives at
  // the domain root, and they 404 once GitHub serves it from /my_website/.
  site: 'https://shreycodezz.github.io',
  base: '/my_website',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
