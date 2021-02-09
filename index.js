allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
    edges {
      node {
        slug // text pathタイプ
        date(formatString: "MMMM DD, YYYY")　// 日付
        title // sort text
        description // long text
        category { // relation category model
          name
        }
        avatar { // image
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        cover { // image
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        body { // rich text
          json // jsonで
        }
      }
    }
  }