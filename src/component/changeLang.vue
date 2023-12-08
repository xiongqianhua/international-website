<!--
 * @Author: qianhua.xiong
-->
<!--
 * @Author: qianhua.xiong
-->
<template>
	<div class="language-menu">
    	<div class="menu-item" @click="changeLang('en')">English</div>
    	<div class="menu-item" @click="changeLang('zh')">中文</div>
        <div class="menu-item" @click="changeLang('fr')">法语</div>
        
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const changeLang = (lang) => {
  locale.value = lang
  localStorage.setItem('lang', lang)// 重要！下面遇到问题里解释
}
</script>