import type { Image } from 'sanity'
import { urlForImage } from './sanity/sanity.image'
import { Metadata } from 'next'

export function defineMetadata({
  baseTitle,
  description,
  image,
  title,
  keywords = '',
}: {
  baseTitle?: string
  description?: string
  image?: Image
  title?: string
  keywords?: string
}) {
  const metaTitle = [
    ...(title ? [title] : []),
    ...(baseTitle ? [baseTitle] : []),
  ].join(' | ')

  const imageUrl =
    image && urlForImage(image)?.width(1200).height(627).fit('crop').url()

  return {
    title: `${metaTitle} - fuongz - phuongphung.com`,
    description,
    keywords,
    openGraph: imageUrl
      ? {
          images: [imageUrl],
        }
      : undefined,
  } satisfies Metadata
}
