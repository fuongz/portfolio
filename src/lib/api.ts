const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  content {
    json
  }
  slug
`

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ['articles'] },
    }
  ).then((response) => response.json())
}

function extractArticleEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items
}

export async function getAllArticles(locale = 'vi-VN') {
  const articles = await fetchGraphQL(
    `query {
      blogPostCollection(locale: "${locale}") {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractArticleEntries(articles)
}

export async function getArticle(
  slug: string,
  isDraftMode = false,
  locale = 'vi-VN'
) {
  const article = await fetchGraphQL(
    `query {
        blogPostCollection(locale:"${locale}", where:{slug: "${slug}"}, limit: 1, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  )
  return extractArticleEntries(article)[0]
}
