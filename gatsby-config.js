module.exports = {
  siteMetadata: {
    title: `Luke Vance`,
    description: `Welcome to my personal site, an archive of case studies and creations, and several failures.`,
    author: `@lukevance`,
    contentLinks: [
      {
        name: `LinkedIn`,
        link: `https://linkedin.com/in/lukevance`
      },
      {
        name: `Github`,
        link: `https://github.com/lukevance`
      },
      {
        name: `Medium`,
        link: `https://medium.com/@lukevance`
      },
      {
        name: `Mail`,
        link: `mailto:lukealanv@gmail.com`
      }
    ]
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lv-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'prodevlone-personal-site'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
