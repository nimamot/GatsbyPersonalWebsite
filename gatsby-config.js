
/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Nima Motieifard",
    siteUrl: "https://nimamot.vercel.app/",
    description: "Nima Motieifard – UBC Cognitive Systems & Data Science student, Amazon SDE Intern. Portfolio website showcasing projects, skills, and experience in software development and data science.",
    authr: "Nima Motieifard"
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
