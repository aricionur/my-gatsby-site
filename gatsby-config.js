module.exports = {
  siteMetadata: {
    title: "MyGatsbySite",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud", //
    "gatsby-plugin-image", //
    "gatsby-plugin-sharp", //
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
}
