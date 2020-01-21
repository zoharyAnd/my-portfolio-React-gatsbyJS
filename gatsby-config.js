module.exports = {
  siteMetadata: {
    title: `Zohary Andrianome Portfolio`,
    description: `This is my portfolio of realisations built with Gatsby and React.`,
    author: `@Zohary Andrianome`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typename: `Json`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#041155`,
        theme_color: `#041155`,
        display: `minimal-ui`,
        icon: `public/images/apple-icon.png`, // This path is relative to the root of the site.
      },
    },
    { 
      resolve: 'gatsby-plugin-material-ui', 
        // If you want to use styled components you should change the injection order. 
        options: { 
          stylesProvider: { 
            injectFirst: true, 
          }
        }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
