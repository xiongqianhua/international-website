<!--
 * @Author: qianhua.xiong
-->
<template>
    <HeadContent/>
    <div class="pageContent">
      <component :is="MyComponent" />
    </div>
    <FootContent/>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import HeadContent from './view/head/index.vue';
import FootContent from './view/foot/index.vue';
const getUrlPath = ()=>{
  const url = window.location.href;
  var name = 'home';
  if(url && url.indexOf('.html')>0){
    var pathStr = url.split('.html')[0];
    const  pathList = ['home','join','our','product','technology','about']
    pathList.forEach(item=>{
      if(pathStr.indexOf(item)>-1){
        name = item
      }
    })
  }
  return name 
}
var MyComponent = ref(null);
onMounted(async () => {
  try {
    const component = await import('./view/'+ getUrlPath() +'/index.vue')
    MyComponent.value = component.default;
  } catch (error) {
    console.error('Failed to load component:', error);
  }
});
</script>
  <style>
  * {
    margin: 0;
  }
  #app {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .pageContent{
    margin-top: 7vh;
  }
  </style>