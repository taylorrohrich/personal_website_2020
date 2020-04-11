module.exports = {
  siteMetadata: {
    title: `Taylor Rohrich`,
    siteUrl: `https://taylorrohrich.com`,
    description: `Personal Site - Built With React.js`,
    author: `Taylor Rohrich`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `personal-site`,
        short_name: `personal`,
        start_url: `/`,
        background_color: `#282a36`,
        theme_color: `#44475a`,
        display: `minimal-ui`,
        icon: `src/images/taylor_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
