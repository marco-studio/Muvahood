module.exports = {
  siteMetadata: {
    title: `The Muvahood Pod`,
    description: `Welcome to Our Muvahood Pod. A safe place for all women to hear the good, the bad and the ugly side of Muvahood experienced through different black british mothers. Motherhood is a Woman's greatest gift and a Woman's greatest challenge. We are walking through Motherhood together. Twitter:@Themuvahoodpod Insta:@Themuvahoodpod`,
    author: ``,
    twitter: `https://www.twitter.com/themuvahoodpod/`,
    instagram: `https://www.instagram.com/themuvahoodpod/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1482281823?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6NzA2NzgyNTAyL3NvdW5kcy5yc3M=`,
    pocket: `https://pca.st/itunes/1482281823`,
    spotify: `https://open.spotify.com/show/527v1yVTnZ96Nw0LdfAjb3`,
    overcast: `https://overcast.fm/itunes1482281823`,
    castbox: `https://soundcloud.com/themuvahoodpod`,
    castro: `https://castro.fm/itunes/1482281823`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=http%3A%2F%2Ffeeds.soundcloud.com%2Fusers%2Fsoundcloud%3Ausers%3A706782502%2Fsounds.rss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://feeds.soundcloud.com/users/soundcloud:users:706782502/sounds.rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
