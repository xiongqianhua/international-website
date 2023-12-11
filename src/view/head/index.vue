
<template>
    <div class="headerPage">
        <div class="logo-wrapper"><a href="/" class="header_logo"></a></div>
        <div class="flex-grow" /> 
        <div class="menu" id="router-menu">
            <div class="menu-item"><a href="/home.html" :class="{'a-active':locationPath('home.html')}">{{ $t("menu.home")}}</a></div>
            <div class="menu-item"><a href="/our.html" :class="{'a-active':locationPath('our.html')}">{{ $t("menu.our") }}</a></div>
            <div class="menu-item"><a href="/technology.html" :class="{'a-active':locationPath('technology.html')}">{{ $t("menu.technology") }}</a></div>
            <div class="menu-item"><a href="/product.html?product1" :class="{'a-active':locationPath('product.html/1')}" class="parentlink" @mouseleave="hideSubMenu" @mouseenter="showSubMenu">{{ $t("menu.product") }}</a></div>
            <div class="menu-item"><a href="/join.html" :class="{'a-active':locationPath('join.html')}">{{ $t("menu.join") }}</a></div>
            <div class="menu-item"><a href="/about.html" :class="{'a-active':locationPath('about.html')}">{{ $t("menu.about") }}</a></div>
            <div :class="{ 'submenu':true , visibleSubmenu:submenu }" @mouseenter="showSubMenu" @mouseleave="hideSubMenu" >
                <a href="/product.html?product1" :class="{'a-active':locationPath('product.html/1')}">{{ $t("productMenu.0") }}</a>
                <a href="/product.html?product2" :class="{'a-active':locationPath('product.html/2')}">{{ $t("productMenu.1") }}</a>
                <a href="/product.html?product3" :class="{'a-active':locationPath('product.html/3')}">{{ $t("productMenu.2") }}</a>
            </div>
        </div>
        <ChangeLang/>
    </div>
</template>
<script setup>
import ChangeLang from '../../component/changeLang.vue';
import { ref } from 'vue';
const submenu = ref(false);
const hideSubMenu = ()=>{
    submenu.value = false;
}
const showSubMenu = ()=>{
    submenu.value = true;
}
const locationPath = (params)=>{
  const url = window.location.href;
  var tag = false;
  if(url && url.indexOf('.html')>0){
    if(url.indexOf(params)>-1){
        tag = true
    }
  }
  return tag 
}
</script>

<style scoped>
.submenu {
    display: none;
}
.visibleSubmenu{
  display: block;
  top: 7vh;
  position: fixed;
  z-index: 999;
  transform: translate(50%,0%);
}
.visibleSubmenu a{
 line-height: 2vw;

}
.logo-wrapper{
    width: 13vw;
    height: 5vh;
}
.header_logo{
    width: 100%;
    height: 100%;
    display: inline-block;
    background: url("../../images/logo.png");
    background-size: 100% 100%;
}
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
    height: 7vh;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    background-color: #fff;
    overflow: hidden;
    padding:0 3vw ;
}
.menu {
    margin-right: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.menu .menu-item{
    min-width: 7vw;
    display: inline-block;
    text-align: center;
    border-bottom: 2px solid #fff;
    padding: 1vw 1.5vw;
    border-radius: 2px;
}
.submenu a{
    min-width: 8vw;
    text-decoration:none;
    font-family: AlibabaSansRegular;
    font-size: 1.2vw;
    color:#000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 0 1vw;
}
.submenu a:hover{
    /* background-color: rgba(0,0,0,0.05); */
}
.menu .menu-item:hover{
    border-bottom: 2px solid #73B131;
}
.menu a{
    text-decoration:none;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 1.4vw;
    color:#000;
}
.menu a:hover{
    color: #73B131
}
.a-active{
    border-bottom: 2px solid #73B131;
}
.a-active{
    color: #73B131 !important;
    padding: 1vw 1vw;
    border-radius: 2px;
    border-bottom: 2px solid #73B131;
}
.submenu .a-active{
    color: #73B131 !important;
    /* padding: 0 1vw; */
    border-radius: 2px;
    border-bottom: 2px solid #73B131;
}

</style>