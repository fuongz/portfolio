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
  const r = await axios.get(url)
  if (opts.responseHeaders === true) return [r.data, { ...r.headers }]
  return r.data
}
