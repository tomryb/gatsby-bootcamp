const path = require('path');

// nie potrzebujemy tego, tworzymy slug z contentful

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNode, createNodeField } = actions
//   if (node.internal.type === 'MarkdownRemark') {

//     const slug = path.basename(node.fileAbsolutePath, '.md')
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.tsx');

  //do wyświetlania postów z repo

  //   const res = await graphql(`
  // query {
  //   allMarkdownRemark {
  //     edges {
  //       node {
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // }
  // `)

  // res.data.allMarkdownRemark.edges.forEach((edge) => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${edge.node.fields.slug}`,
  //     context: {
  //       slug: edge.node.fields.slug
  //     }
  //   })
  // })

  const res = await graphql(`
query {
  allContentfulBlogPost {
  edges {
    node {
      slug
    }
  }
  }
}
`)
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
