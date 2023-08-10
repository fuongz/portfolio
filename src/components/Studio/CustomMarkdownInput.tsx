import { useMemo } from 'react'
import { MarkdownInput, MarkdownInputProps } from 'sanity-plugin-markdown'

export function CustomMarkdownInput(props: any) {
  const reactMdeProps: MarkdownInputProps['reactMdeProps'] = useMemo(() => {
    return {
      options: {
        toolbar: ['bold', 'italic'],
      },
    }
  }, [])

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />
}
