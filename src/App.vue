<!--
 * @Author: qianhua.xiong
-->
<template>
    <HeadContent/>
    <div class="pageContent">
      <router-view></router-view>
    </div>
    <FootContent/>
</template>
<script>
import HeadContent from './view/head/index.vue';
import FootContent from './view/foot/index.vue';
export default {
    name: 'App',
    data() {
      return {}
    },
    components: {HeadContent,FootContent}
}
</script>
<style>
  * {
    margin: 0;
  }
  #app {
    box-sizing: border-box;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .pageContent{
    width: 100vw;
    height: 80vh;
  }
  </style>