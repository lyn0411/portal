import { Ref } from 'vue';
import { setStyle } from '@/hooks/has-style';
export const  switchAnimation = (itemBox:HTMLElement | null = null,switchIndex:number = 0,timeOut:Ref<boolean>,percentIndex:number = 1) => {
    const fontSize =parseInt(getComputedStyle(window.document.documentElement).fontSize.split('px')[0])
    timeOut.value = false
    requestAnimationFrame(function fn(){
        let width = 0 
        if(percentIndex!=1){
          width = (percentIndex * switchIndex *  ((itemBox!.children[Math.abs(switchIndex)].clientWidth) + parseInt(getComputedStyle(itemBox!.children[Math.abs(switchIndex)]).marginRight.split('px')[0]))) / fontSize
        }else{
            width = ( switchIndex *  ((itemBox!.children[Math.abs(switchIndex)].clientWidth) + parseInt(getComputedStyle(itemBox!.children[Math.abs(switchIndex)]).marginRight.split('px')[0]))) / fontSize
        }
        // const width = ( switchIndex *  ((itemBox!.children[Math.abs(switchIndex)].clientWidth) + parseInt(getComputedStyle(itemBox!.children[Math.abs(switchIndex)]).marginRight.split('px')[0]))) / fontSize
        setStyle(itemBox!,'transform','translateX(' + width + 'rem)')
    })
    itemBox?.addEventListener("transitionend",()=>{
        timeOut.value = true
    },{
        once:true
    })
}