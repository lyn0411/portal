
import { DirectiveBinding} from 'vue'
const map = new WeakMap()
const ob =new ResizeObserver((entries) => {
    for (const entry of entries) {
        const handle:(pix:Pix) =>void  = map.get(entry.target)
        handle && 
            handle(
                {
                    width:entry.borderBoxSize[0].inlineSize,
                    height:entry.borderBoxSize[0].blockSize,
                }
            )
    }
})
export default {
    mounted(el:HTMLElement,binding:DirectiveBinding) {
        map.set(el,binding.value)
        ob.observe(el)
    },
    unmounted(el:HTMLElement) {
        ob.unobserve(el)
    },
}
export interface Pix{
    height:number
    width:number
}