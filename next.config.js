const withSvgr = require(`next-svgr`)
const withPlugins = require(`next-compose-plugins`)
const rehypeShiki = require(`rehype-shiki`)
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: `./src/styles/material-theme-dark.json`,
          useBackground: false,
        },
      ],
    ],
  },
})



const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
}

module.exports = withPlugins(
  [
    withSvgr,
    withMDX({
      pageExtensions: [`ts`, `tsx`, `mdx`],
      remarkPlugins: [
        require(`remark-slug`),
        require(`remark-footnotes`),
        require(`remark-code-titles`),
      ],
      rehypePlugins: [],
    }),
  ],
  nextConfig,
)
