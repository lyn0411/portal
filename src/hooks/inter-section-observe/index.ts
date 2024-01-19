export const interObserver = (
    element: Element,
    fun:(entries:IntersectionObserverEntry[]) => void,
    threshold:number | number[] = 0,
    observerEle: HTMLElement | null = null
) => {
    const ob = new IntersectionObserver(fun,{
        root:observerEle,
        threshold:threshold
    })
    ob.observe(element)
}