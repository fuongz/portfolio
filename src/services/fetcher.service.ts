import axios from 'axios'

export default async function fetcher(
  url: string,
  options: { responseHeaders?: boolean } | null = null
) {
  const opts = {
    responseHeaders: false,
  }
  if (options) {
    if (typeof options.responseHeaders !== 'undefined') {
      opts.responseHeaders = options.responseHeaders
    }
  }
  const r = await axios.get(url, {
    headers: {
      Authorization: 'Bearer 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',
    },
  })
  if (opts.responseHeaders === true) return [r.data, { ...r.headers }]
  return r.data
}
