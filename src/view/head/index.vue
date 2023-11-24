
<template>
    <div class="headerPage">
        <div class="logo-wrapper">{{ $t("name") }}</div>
        <div class="flex-grow" /> 
        <div class="menu">
            <router-link to="/home">{{ $t("menu.home")}}</router-link>
            <router-link to="/product">{{ $t("menu.product") }}</router-link>
            <router-link to="/our">{{ $t("menu.our") }}</router-link>
            <router-link to="/about">{{ $t("menu.about") }}</router-link>
        </div>
        <ChangeLang/>
        <el-switch v-model="value1" 
        :active-action-icon="Sunny"
        :inactive-action-icon="Moon" @change="Change"/>
    </div>
</template>
<script setup>
import ChangeLang from '../../component/changeLang.vue';
import { ref } from 'vue';
import { Moon, Sunny } from '@element-plus/icons-vue';

const value1 = ref(true)
const Change = (params)=>{
    if(params){
        document.documentElement.setAttribute('class','')
    }else{
        document.documentElement.setAttribute('class','dark')
    }
}
</script>

<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.flex-grow {
  flex-grow: 1;
}
.headerPage{
    width: 100vw;
    height: 5vh;
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}
.logo-wrapper{
    font-size: 24px;
    font-weight: 600;
    margin: 0 20px;
}
.menu {
    margin-right: 50px;
}
.menu a{
    display: inline-block;
    text-align: center;
    padding: 10px;
    margin: 0 20px;
    text-decoration:none;
}
.menu a:hover{
    border-bottom: 2px solid var(--el-menu-active-color);
    color: var(--el-menu-active-color)
}
</style>