export const getAssetsFile = (item:string,url: string,suffix:string = 'png') => {
    return new URL(`../assets/images/${item}/${url}.${suffix}`, import.meta.url).href
}