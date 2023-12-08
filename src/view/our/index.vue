<!--
 * @Author: qianhua.xiong
-->
<!--
 * @Author: qianhua.xiong
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ $t("menu.our") }}</span>
        <el-button class="button" text>{{ $t("menu.our") }}</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ o }}</div>
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ $t("menu.our") }}</span>
        <el-button class="button" text>{{ $t("menu.our") }}</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ o }}</div>
  </el-card>
  
</template>
<script>
export default {
    name: 'our',
    data() {
      return {}
    },
    components: {}
  }
</script>
  
<style scoped>
 .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  margin: 100px;
}
</style>