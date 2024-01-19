import type { CSSProperties } from 'vue'
import { isClient } from '@vueuse/core'
import { camelize} from 'vue'
import type { Entries } from 'type-fest'
export declare const isObject: (val: unknown) => val is Record<any, any>;
const entriesOf = <T>(arr: T) => Object.entries(arr as  unknown as Array<T>) as Entries<T>
const keysOf = <T>(arr: T) => Object.keys(arr as unknown  as  Array<T>) as Array<keyof T>
export const getStyle = (
    element: HTMLElement,
    styleName: keyof CSSProperties
  ): string => {
    if (!isClient || !element || !styleName) return ''
    let key = camelize(styleName)
    if (key === 'float') key = 'cssFloat'
    try {
      const style = (element.style as any)[key]
      if (style) return style
      const computed: any = document.defaultView?.getComputedStyle(element, '')
      return computed ? computed[key] : ''
    } catch {
      return (element.style as any)[key]
    }
}
  
export const setStyle = (
    element: HTMLElement,
    styleName: CSSProperties | keyof CSSProperties,
    value?: string | number
) => {
if (!element || !styleName) return

if (isObject(styleName)) {
    entriesOf(styleName).forEach(([prop, value]) =>
    setStyle(element, prop, value)
    )
} else {
    const key: any = camelize(styleName)
    element.style[key] = value as any
}
}

export const removeStyle = (
    element: HTMLElement,
    style: CSSProperties | keyof CSSProperties
  ) => {
  if (!element || !style) return

  if (isObject(style)) {
      keysOf(style).forEach((prop) => removeStyle(element, prop))
  } else {
      setStyle(element, style, '')
  }
}