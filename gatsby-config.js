module.exports = {
  siteMetadata: {
    title: `Simple Soul`,
    description: `Simple Soul - Holistic, Personal, Simple`,
    author: `Bryce Campbell, Jonathan Hansen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simple Soul`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00707C`,
        theme_color: `#00707C`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ], 
}
