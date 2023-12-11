<template>
  <div class="swiper-wrapper for_wap">
    <div class="swiper-slide  box1">
      <div class="videoImg" id="videoImg1">
      </div>
      <div class="sbox">
        <h1 class="tit">{{ $t("homePage.p1") }}</h1>
        <p class="text">{{ $t("homePage.p2") }}</p>
      </div>
    </div>
  </div>
  <div class="tbox longtxt">
    <div class="tbox-tit">{{ $t("homePage.p3") }}</div>
    <div class="tbox-content">{{ $t("homePage.p4") }}</div>
  </div>
  <div class="tbox">
    <div class="tbox-tit">{{ $t("homePage.p5") }}</div>
    <div class="tbox-content">{{ $t("homePage.p6") }}</div>
  </div>
  <a class="swiper-wrapper wireless-charge" href="#/product">
    <img class="banner-img" src="../../images/smartenergy.png">
    <div class="banner-shadow"></div>
  </a>
  <div class="tbox">
    <div class="tbox-tit">{{ $t("homePage.p7") }}</div>
    <div class="tbox-content">{{ $t("homePage.p8") }}</div>
  </div>
  <a class="smart-city" href="#/product">
    <img class="banner-img" src="../../images/smartcity.png">
  </a>
</template>
<script setup>
import { ref } from 'vue';
let playVisible = ref(true);
const videoRef = ref(null);
const playVideoFuc = () => {
  playVisible.value = false;
  if (videoRef.value) {
    videoRef.value.play(); 
  }
}
const pauseVideo = () => {
  if (videoRef.value && playVisible.value === false) {
    videoRef.value.pause();
    playVisible.value = true;
  }
};
</script>
<style scoped>
.swiper-slide {
  width: 100%;
  position: relative;
}

.box1 .sbox {
  position: absolute;
  width: 100%;
  left: 5%;
  bottom: 10%
}

.box3 .sbox {
  position: absolute;
}

.swiper-slide.box3 .icon {
  cursor: pointer;
  font-size: 4vh;
  line-height: 5vh;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

.swiper-slide.box3 .icon img {
  height: 5vh;
  vertical-align: top;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

.swiper-slide.box3 {
  background-color: #000;
  color: #fff;
}

.swiper-slide.box3 .sbox {
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  left: 50%;
  top: 50%;
  text-align: center;
}

video {
  object-fit: cover;
  width: 100%;
  height: 80vh;
}

.sbox .tit {
  font-family: AlibabaPuHuiTi-Medium;
  font-size: 10vh;
  color: hsl(0, 0%, 100%);
  line-height: 20vh;
  font-weight: 500;
}

.sbox .text {
  font-family: AlibabaPuHuiTi-Medium;
  font-size: 5vh;
  color: #FFFFFF;
  line-height: 5vh;
  font-weight: 400;
  opacity: 0.8;
}

.tbox {
  text-align: center;
  margin: 5vh auto;
}

.tbox .tbox-tit {
  font-size: 2vw;
  color: #000000;
  margin-bottom: 0.3vh;
  font-weight: 500;
  line-height: 5vh;
}

.tbox .tbox-content {
  font-weight: 400;
  font-size: 16px;
  width: 50%;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.8);
}

.smart-city img,
.swiper-wrapper.wireless-charge img {
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
}

.swiper-wrapper .banner-img {
  width: 100%;
}

.smart-city {
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(95, 60%, 78%);
}

.smart-city .banner-img {
  width: 35vw;
  height: 30vw;
  cursor: pointer;
}

.swiper-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.smart-city .banner-img:hover {
  transform: scale(1.2);
}

.swiper-container-android .swiper-slide,
.swiper-wrapper {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -o-transform: translate(0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}</style>