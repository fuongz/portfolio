enum EnumNumberFormatOptionLocale {
  us = 'en-US',
  vn = 'vi-VN',
}

enum EnumNumberFormatOptionCurrency {
  us = 'USD',
  vn = 'VND',
}

type TNumberFormatOptionStyle = 'decimal' | 'currency' | 'percent' | 'unit'

export const number_format = (
  num: number | string,
  options?: {
    style?: TNumberFormatOptionStyle
    locale?: keyof typeof EnumNumberFormatOptionLocale | undefined
    digits?: number
  }
) => {
  const locale =
    options && options.locale
      ? EnumNumberFormatOptionLocale[options.locale]
      : EnumNumberFormatOptionLocale.us
  const currency =
    options && options.locale
      ? EnumNumberFormatOptionCurrency[options.locale]
      : EnumNumberFormatOptionCurrency.us
  const style = options && options.style ? options.style : 'decimal'
  const maximumSignificantDigits = (options && options.digits) || 5
  return typeof num === 'number'
    ? new Intl.NumberFormat(locale, {
        style,
        currency,
        maximumSignificantDigits,
      }).format(num)
    : num
}

export const round = (num: number) =>
  Math.round((num + Number.EPSILON) * 10000) / 10000
export const sum_by = (arr: Array<any>, key: string) =>
  arr.reduce((acc: any, cur: any) => acc + cur[key], 0) || 0
