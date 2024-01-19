/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
    
}

declare interface Element{
	animated:Timeout,
}
