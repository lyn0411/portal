export class ProxyObserve {
    static list: Set<Function> = new Set()
    observable = <T extends object>(params: T) => {
        const {proxy, revoke} = Proxy.revocable(params, 
            {
                set(target, key, value, receiver) {
                    const result = Reflect.set(target, key, value, receiver)
                    ProxyObserve.list.forEach(fn => fn())
                    return result
                }
            }   
        )
        // 取消监听
        const revokes = () => {
            revoke()
            ProxyObserve.list.clear()
        }
        return {
            proxy, revokes
        }
    } 
    autorun= <T>(cb: Function) => {
        if (cb) {
            ProxyObserve.list.add(cb)
        }
    }
}

// import {ProxyObserve} from '@/util/proxyObserva'
// const proxyServe = new ProxyObserve()
// // 监听数据
// const proxyData = proxyServe.observable<{
//     classification:Array<EventBus.EsParams>,
//     category:string
// }>({
//     classification:[],
//     category:''
// })
// const classification = ref<Array<EventBus.EsParams>>([])
// proxyServe.autorun<Array<EventBus.EsParams>>(()=>{
//     console.log('执行方法体');
// })