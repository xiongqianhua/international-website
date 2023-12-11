<!--
 * @Author: qianhua.xiong
-->
<template>
	<div class="language-menu">
        <div class="menu-item" @click="changeLang('fr')" :class="{'active':locale=== 'fr'}">FR</div><div class="jiange"></div>
    	<div class="menu-item" @click="changeLang('en')" :class="{'active':locale=== 'en'}">EN</div><div class="jiange"></div>
        <div class="menu-item" @click="changeLang('zh')" :class="{'active':locale=== 'zh'}">CN</div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const changeLang = (lang) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>
<style scoped>
    .jiange{
        font-size: 1.4vw;
        margin: 10px 2px;
    }
    .language-menu{
        display: flex;
        flex-direction: row-reverse;
        font-size: 1.4vw;
    }
    .language-menu .menu-item{
        margin: 10px 2px;
        font-size: 1.4vw;
        cursor: pointer;
    }
    .menu-item.active{
        color: #73B131;
    }
    .menu-item:hover{
        color: #73B131;
        cursor: pointer;
    }
</style>