export function mc(...arrays: Array<Array<string>>) {
  if (arrays.length === 0) return ''
  if (arrays.length === 1) {
    if (arrays[0].length === 0) return ''
    if (arrays[0].length === 1) return arrays[0][0]
    return arrays[0].join(' ')
  }
  return [...new Set(arrays.flat(1))].join(' ')
}
