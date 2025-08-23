
/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Nima Motieifard",
    siteUrl: "https://example.com",
    description: "Portfolio, projects, writing, and contact for Nima Motieifard"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet"
  ],
  // Add favicon links
  flags: {
    FAST_DEV: true
  }
};
