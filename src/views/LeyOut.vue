<template> 
    <div v-resize-ob="handleSize" class="div">
        ddddd
    </div>
</template>

<script setup lang="ts">
import vResizeOb,{type Pix} from '@/directives/resizeObserver'

const handleSize = (e:Pix) => {
    console.log(e);
}
</script>


<style lang="scss" scoped>
.div{
    width: 100%;
    height: 200px;
    background: red;
}
</style>