let lastTime = 0
const prefixes = [
    'webkit',
    'moz',
    'ms',
    '0'
]
let requestAnimationFrame:Function
let cancelAnimationFrame:Function

// 判断是否是服务器环境
const isServer = typeof window === 'undefined'
if (isServer) {
    requestAnimationFrame = function () {
        return
    }
    cancelAnimationFrame = function () {
        return
    }
} else {
    requestAnimationFrame = window.requestAnimationFrame || undefined
    cancelAnimationFrame = window.cancelAnimationFrame
    // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
    for (const prefix of prefixes) {
        const dd:string = prefix+'RequestAnimationFrame'
        if (requestAnimationFrame && cancelAnimationFrame) { break }
        requestAnimationFrame = requestAnimationFrame || (window as any).dd
        cancelAnimationFrame = cancelAnimationFrame || (window as any)[prefix + 'CancelAnimationFrame'] || (window as any)[prefix + 'CancelRequestAnimationFrame']
    }

    // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function (callback:Function) {
            const currTime = new Date().getTime()
            // 为了使setTimteout的尽可能的接近每秒60帧的效果
            const timeToCall = Math.max(0, 16 - (currTime - lastTime))
            const id = window.setTimeout(() => {
                callback(currTime + timeToCall)
            }, timeToCall)
            lastTime = currTime + timeToCall
            return id
        }

        cancelAnimationFrame = function (id:number) {
            window.clearTimeout(id)
        }
    }
}

export { requestAnimationFrame, cancelAnimationFrame }