<!--
 * @Author: qianhua.xiong
-->
<template>
      <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    name: 'home',
    data() {
      return {}
    },
    components: {}
  }
</script>
