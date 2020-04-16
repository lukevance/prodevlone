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
          bucketName: 'prodevlone-personal-site',
          protocol: "https",
          hostname: "www.provolove.com",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151971789-1X",
      },
    },
  ],
}
