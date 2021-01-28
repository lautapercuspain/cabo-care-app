const withSvgr = require(`next-svgr`)
const withBundleAnalyzer = require(`@next/bundle-analyzer`)
const withPlugins = require(`next-compose-plugins`)
const rehypeShiki = require(`rehype-shiki`)
const checkEnv = require(`@47ng/check-env`).default
const withImages = require(`next-images`)
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


checkEnv({
  required: [`NEXT_PUBLIC_DEPLOYMENT_URL`],
})


const IMAGE_HOST_DOMAINS = [
  `is3-ssl.mzstatic.com`,
]

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: IMAGE_HOST_DOMAINS,
  },
}

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === `true`,
    }),
    withSvgr,
    withImages(),
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
