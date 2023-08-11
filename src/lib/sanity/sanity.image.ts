import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './sanity.api'
import { Image } from 'sanity'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: Image) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}
