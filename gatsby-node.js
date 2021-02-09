/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost( //　allContentfulモデル名（キャメルケース）となる
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach((post, index) => {
    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug
      },
    })
  })
}