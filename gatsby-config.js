module.exports = {
  siteMetadata: {
    title: 'UX Thailand',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'UX Thailand',
        short_name: 'uxth',
        start_url: '/',
        background_color: '#098bd5',
        theme_color: '#098bd5',
        display: 'minimal-ui',
        icon: './static/icons/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        sourceMap: true,
        autoLabel: true,
      },
    },
  ],
}
