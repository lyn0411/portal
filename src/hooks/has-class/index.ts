/**
 * 判断class 类名是否在dom对象中
 * @param el dom
 * @param cls class
 * @returns
 */
export const hasClass = (el: Element, cls: string): boolean => {
    if (!el || !cls) return false
    if (cls.includes(' ')) throw new Error('className should not contain space.')
    return el.classList.contains(cls)
}
export const classNameToArray = (cls = '') => cls.split(' ').filter((item) => !!item.trim())
/**
 * 添加class类名
 * @param el 
 * @param cls 
 * @returns 
 */
export const addClass = (el: Element, cls: string) => {
    if (!el || !cls.trim()) return
    el.classList.add(...classNameToArray(cls))
}
/**
 * 删除class 类名
 * @param el 
 * @param cls 
 * @returns 
 */
export const removeClass = (el: Element, cls: string) => {
    if (!el || !cls.trim()) return
    el.classList.remove(...classNameToArray(cls))
}
  