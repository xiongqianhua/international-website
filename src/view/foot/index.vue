<template>
    <div class="foot-wrapper">
      <div class="box">
        <div class="logo"></div>
        <div class="content">{{  $t("foot.p1.0") }}</div>
        <div class="content">{{  $t("foot.p1.1") }}</div>
      </div>
      <div class="box">
        <div class="title">{{  $t("foot.p2") }}</div>
        <div class="content">info@zongmutech.com</div>
      </div>
      <div class="box">
        <div class="title">{{  $t("foot.p4") }}</div>
        <div class="content">pr@zongmutech.com</div>
        <div class="content">{{  $t("foot.p6") }}</div>
      </div>
      <div class="box">
        <div class="title">{{  $t("foot.p7") }}</div>
        <div class="content">{{  $t("foot.p8") }}</div>
      </div>
      <div class="box">
        <div class="title">{{  $t("foot.p9") }}</div>
        <div class="contact" @mouseenter="qrClick(1)" @mouseleave="qrOut">
          <div class="weixinlogo"></div>
          <div>{{  $t("foot.p10") }}</div>
        </div>
        <div class="contact" @mouseenter="qrClick(2)" @mouseleave="qrOut">
          <div class="weixinlogo"></div>
          <div>{{  $t("foot.p11") }}</div>
        </div>
        <div class="contact" @mouseenter="qrClick(3)" @mouseleave="qrOut">
          <div class="zhihulogo"></div>
          <div>{{  $t("foot.p12") }}</div>
        </div>
        <div class="contact-weixin" v-if="qrSelect === 1"></div>
        <div class="contact-gongzonghao" v-if="qrSelect === 2"></div>
        <div class="contact-zhihu" v-if="qrSelect === 3"></div>
      </div>
    </div>
    <div class="icp-content">{{$t("ICP")}}</div>
</template>

<script setup>
import { ref } from 'vue';
let qrSelect = ref(0)
const  qrClick = (type)=>{
    qrSelect.value = type
}
const qrOut = ()=>{
    qrSelect.value = 0
}
</script>

<style>
.icp-content{
  opacity: 0.5;
  font-family: AlibabaPuHuiTi-Regular;
  font-size: 1vw;
  color: #000000;
  text-align: center;
  line-height: 4vh;
  font-weight: 400;
  margin: 0 auto;
}
.contact-weixin{
    position: fixed;
    right:3%;
    bottom: 28%;
    width: 10vw;
    height: 10vw;
    background: url("../../images/weixinqr.png");
    background-size: 100% 100%;
}
.contact-gongzonghao{
    position: fixed;
    right:3%;
    bottom: 28%;
    width: 10vw;
    height: 10vw;
    background: url("../../images/zhaopin.png");
    background-size: 100% 100%;
}
.contact-zhihu{
    position: fixed;
    right:3%;
    bottom: 28%;
    width: 10vw;
    height: 10vw;
    background: url("../../images/zhihuqr.png");
    background-size: 100% 100%;
}
.foot-wrapper{
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-items: center;
  align-items: center;
}
.box{
  width: 20vw;
  height: 20vh;
}
.box .logo{
  width: 5vw;
  height: 5vw;
  background: url("../../images/logo2.png");
  background-size: 100% 100%;
  margin: 0 auto;
}
.box .title{
  text-align: center;
  font-family: AlibabaPuHuiTi-Medium;
  font-size: 1.5vw;
  color: #000000;
  line-height: 5vh;
  font-weight: 500;
}
.box .content{
  text-align: center;
  opacity: 0.8;
  font-family: AlibabaPuHuiTi-Regular;
  font-size: 1vw;
  color: #000000;
  font-weight: 400;
  line-height: 1.5vw;
}
.box .contact{
  max-width: 9vw;
  width: fit-content;
  margin: 10px auto;
  border: 1.03px solid rgba(0,0,0,1);
  border-radius: 17.84px;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5vw;
  cursor: pointer;
  font-size: 1vw;
}
.box .weixinlogo{
  min-width: 2vw;
  min-height: 2vw;
  background: url('../../images/weixin.png');
  background-size: 100% 100%;
  margin: 0.1vw;
}
.box .zhihulogo{
  min-width: 2vw;
  min-height: 2vw;
  background: url('../../images/zhihu.png');
  background-size: 100% 100%;
  margin: 0.1vw;
}
</style>