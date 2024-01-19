import { setStyle } from "@/hooks/has-style"
export default function (){
   
} 
/**
 * 判断当前顺序
 * @param el 
 * @returns 
 */
export const getIndex = (el:Element | null) => {
    let index = 0
    if(!el || !el.parentNode){
        return -1
    }
    while(el && (el = el.previousElementSibling!)){
        index ++ 
    }
    return index
}
/**
 * 触发动画
 * @param prevRect 
 * @param target 
 * @param ms 
 */
export const animate = (prevRect: DOMRect, target: HTMLElement, ms:number=300) => {
    if(ms){
        const currentRect = target.getBoundingClientRect()
        setStyle(target,'transition','none')
        setStyle(target,'transform','translate3d(' +
            (prevRect.left - currentRect.left) + 'px,' +
            (prevRect.top - currentRect.top) + 'px,0)'
        );
        target.offsetWidth;
        setStyle(target, 'transition', 'all ' + ms + 'ms');
        setStyle(target, 'transform', 'translate3d(0,0,0)');

        clearTimeout(target.animated);
        target.animated = setTimeout(function() {
            setStyle(target, 'transition', '');
            setStyle(target, 'transform', '');
            target.animated = false;
        }, ms);
    }
}