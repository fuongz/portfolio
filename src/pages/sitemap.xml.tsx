import { getAllPosts } from 'utils/content-helper'
const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_ROOT_URL

function generateSiteMap(paths: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/posts</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/posts?tag=mysql</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/posts?tag=php</loc>
     </url>
     ${paths
       .map((path) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/posts/${path}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps = ({ res }: any) => {
  const paths = getAllPosts()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(paths)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
