<!--
 * @Author: qianhua.xiong
-->

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
