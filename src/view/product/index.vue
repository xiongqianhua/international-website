<!--
 * @Author: qianhua.xiong
-->
<!--
 * @Author: qianhua.xiong
-->
<template>
  <div class="product-page">
    <component :is="MyComponent" />
  </div>
  
</template>
  
<script setup>
import {ref,onMounted} from 'vue';
import product1 from './product1.vue';
var MyComponent = ref(product1);
onMounted(async () => {
  try {
    const url = window.location.href;
    if (url && url.indexOf('.html') > 0 && url.indexOf('?product') > -1) {
      var pathStr = url.split('?')[1];
      if (pathStr) {
        const component = await import('./' + pathStr + '.vue')
        MyComponent.value = component.default;
      }
    }
  } catch (error) {
    console.error('Failed to load component:', error);
  }
});
</script>
  
<style scoped>
  .product-page{
    min-height: 50vh;
  }
</style>