export const getCanonicalUrl = (path: string, slug: string | null = null) => {
  return `${process.env.NEXT_PUBLIC_ROOT_URL}/${path}${slug && `/${slug}`}`
}

export const getPageTitle = (title: string) => {
  return `${title} - fuongz`
}
