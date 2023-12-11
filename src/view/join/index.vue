<!--
 * @Author: qianhua.xiong
-->
<template>
  <div class="joinWrapper">
    <div class="join-box1">
      <div class="box1-left"></div>
      <div class="box2-right">
        <div class="title">{{ $t("joinPage.p1") }}</div>
        <div class="content">{{ $t("joinPage.p2") }}</div>
        <div class="video-box">
          <span class="video-title">{{ $t("joinPage.p3") }}</span>
          <span class="video-img" @click="playVideoFuc"></span>
        </div>
      </div>
    </div>
    <div class="join-box2">
      <div class="join-box2-left">
        <div class="tag"></div>
        <div class="content">
          <div class="content-title">{{ $t("joinPage.p4") }}</div>
          <div class="content-box">
            <a href="https://zongmu.zhiye.com/alljob/?o=2">{{ $t("joinPage.p5") }}</a>
            <a href="https://zongmu.m.zhiye.com/#/jobs?jc=2">{{ $t("joinPage.p6") }}</a>
            <a href="https://zongmu.m.zhiye.com/#/jobs?jc=3">{{ $t("joinPage.p7") }}</a>
            <a href="https://neitui.italent.cn/zongmutech/jobs">{{ $t("joinPage.p8") }}</a>
          </div>
        </div>
      </div>
      <div class="join-box2-right"></div>
    </div>
    <div class="join-box3">
      <div class="join-box3-left">
        <div class="tag"></div>
        <div class="content">
          <div class="content-title">{{ $t("joinPage.p9") }}</div>
          <div class="content-box" v-if="joinus === '1'">
            <p>{{ $t("joinPage.p11.0") }}</p>
            <p>{{ $t("joinPage.p11.1") }}</p>
            <p>{{ $t("joinPage.p11.2") }}</p>
          </div>
          <div class="content-box" v-if="joinus === '2'">
            <p>{{ $t("joinPage.p12.0") }}</p>
            <p>{{ $t("joinPage.p12.1") }}</p>
            <p>{{ $t("joinPage.p12.2") }}</p>
          </div>
          <div class="content-box" v-if="joinus === '3'">
            <p>{{ $t("joinPage.p13.0") }}</p>
            <p>{{ $t("joinPage.p13.1") }}</p>
            <p>{{ $t("joinPage.p13.2") }}</p>
          </div>
          <div class="content-box" v-if="joinus === '4'">
            <p>{{ $t("joinPage.p14.0") }}</p>
            <p>{{ $t("joinPage.p14.1") }}</p>
            <p>{{ $t("joinPage.p14.2") }}</p>
          </div>
        </div>
      </div>
      <div class="join-box3-right">
        <div class="menu">
          <div class="menu-item" :class="{ 'active': joinus === '1' }" @click="change('1')">{{ $t("joinPage.p10.0") }}</div>
          <div class="menu-item" :class="{ 'active': joinus === '2' }" @click="change('2')">{{ $t("joinPage.p10.1") }}</div>
          <div class="menu-item" :class="{ 'active': joinus === '3' }" @click="change('3')">{{ $t("joinPage.p10.2") }}</div>
          <div class="menu-item" :class="{ 'active': joinus === '4' }" @click="change('4')">{{ $t("joinPage.p10.3") }}</div>
        </div>
        <div class="menu-img1" v-if="joinus === '1'"></div>
        <div class="menu-img2" v-if="joinus === '2'"></div>
        <div class="menu-img3" v-if="joinus === '3'"></div>
        <div class="menu-img4" v-if="joinus === '4'"></div>
      </div>
    </div>
    <div class="join-box4" ref="scrollContainer" @mousedown="onMouseDown">
      <div class="join-box4-item">
        <div class="top-img"></div>
        <div class="item-content">{{ $t("joinPage.p15") }}</div>
        <div class="down-img"></div>
      </div>
      <div class="join-box4-item">
        <div class="top-img"></div>
        <div class="item-content">{{ $t("joinPage.p16") }}</div>
        <div class="down-img"></div>
      </div>
      <div class="join-box4-item">
        <div class="top-img"></div>
        <div class="item-content">{{ $t("joinPage.p17") }}</div>
        <div class="down-img"></div>
      </div>
      <div class="join-box4-item">
        <div class="top-img"></div>
        <div class="item-content">{{ $t("joinPage.p18") }}</div>
        <div class="down-img"></div>
      </div>
      <div class="join-box4-item">
        <div class="top-img"></div>
        <div class="item-content">{{ $t("joinPage.p19") }}</div>
        <div class="down-img"></div>
      </div>
    </div>
    <div class="join-box5">
      <div class="join-box5-logo"></div>
      <div class="join-box5-title">{{ $t("joinPage.p20") }}</div>
      <div class="search-job"><a class="btn" target="_blank" href="https://zongmu.zhiye.com/search">{{
        $t("joinPage.p21") }}</a></div>
    </div>
  </div>
  <div class="video-template" v-if="videoShow" @click="hideVideo">
    <video class="video" id="video1" muted autoplay="autoplay" loop="loop" style="display: block;" ref="videoRef"
      controls="true" draggable="true" webkit-playsinline="true" playsinline="true" x-webkit-airplay="true"
      x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-ignore-metadata="true">
      <source src="../../images/video/joinSub.mp4" type="video/mp4">
      {{ $t("tips") }}
    </video>
  </div>
</template>
    
<script setup>
import { ref, onMounted } from "vue";
let joinus = ref('1');
const scrollContainer = ref(null);
let videoShow = ref(false)
const change = (params) => {
  joinus.value = params
}
const videoRef = ref(null);
const playVideoFuc = () => {
  videoShow.value = true
  if (videoRef.value) {
    videoRef.value.play();
  }
}
const hideVideo = () => {
  videoShow.value = false
}
onMounted(() => {
  let isMouseDown = false;
  let startX;
  let scrollLeft;
  const scroll = scrollContainer.value
  scroll.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - scroll.offsetLeft;
    scrollLeft = scroll.scrollLeft;
  });

  scroll.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  scroll.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  scroll.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    const x = e.pageX - scroll.offsetLeft;
    const distanceX = x - startX;
    scroll.scrollLeft = scrollLeft - distanceX;
  });
});

</script>
    
<style>
.video-template {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 7vh;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
}

video {
  object-fit: cover;
  width: 80%;
  height: 80%;
  margin: 0 auto;
}

.join-box3-right .menu {
  width: 50vw;
  display: flex;
}

.join-box3-right .menu-item {
  width: 10vw;
  text-align: center;
  border-bottom: 3px solid transparent;
  margin: 1vh auto;
  padding: 1vh 0;
}

.join-box3-right .menu-item:hover {
  color: #73B131;
  border-bottom: 3px solid #73B131;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
}

.join-box3-right .menu-item.active {
  color: #73B131;
  border-bottom: 3px solid #73B131;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.join-box3-right .menu-img1 {
  width: 50vw;
  height: 30vw;
  background: url("../../images/joinus-encourage.png");
  background-size: 100% 100%;
  transition: all 2s;
}

.join-box3-right .menu-img2 {
  width: 50vw;
  height: 30vw;
  background: url("../../images/joinus-healthy.png");
  background-size: 100% 100%;
  transition: all 2s;
}

.join-box3-right .menu-img3 {
  width: 50vw;
  height: 30vw;
  background: url("../../images/joinus-vacation.png");
  background-size: 100% 100%;
  transition: all 2s;
}

.join-box3-right .menu-img4 {
  width: 50vw;
  height: 30vw;
  background: url("../../images/joinus-other.png");
  background-size: 100% 100%;
  transition: all 2s;
}

.top-img {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 3vw;
  height: 3vw;
  background: url("../../images/joinus-icon1.png");
  background-size: 100% 100%;
  z-index: 100;
}

.down-img {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 3vw;
  height: 3vw;
  background: url("../../images/joinus-icon2.png");
  background-size: 100% 100%;
  z-index: 100;
}

.item-content {
  position: absolute;
  margin: 1vw 2vw;
  z-index: 101;
  top: 10%;
  left: 2%
}

.search-job a {
  display: block;
  width: fit-content;
  height: 5vh;
  font-family: AlibabaPuHuiTi-Regular;
  font-size: 1.6vw;
  color: #FFFFFF;
  line-height: 5vh;
  font-weight: 400;
  border: 1.8px solid rgba(255, 255, 255, 1);
  margin: 5vh auto;
  padding: 0 1vh;
  cursor: pointer;
  text-decoration: none;
}

.join-box5-logo {
  width: 10vw;
  height: 10vw;
  background: url("../../images/joinus-logo.png");
  background-size: 100% 100%;
  margin: 0 auto;
  margin-bottom: 10px;
}

.join-box5-title {
  width: 50vw;
  font-family: AlibabaPuHuiTi-Regular;
  font-size: 2vw;
  color: #FFFFFF;
  text-align: center;
  font-weight: 2vw;
  margin: 0 auto;
}

.join-box4-item {
  min-width: 30vw;
  min-height: 20vw;
  background: #F7F8F7;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 0 2vw;
  z-index: 100;
  font-size: 1.2vw;
}

.joinWrapper {
  background: #F7F8F7;
  font-family: AlibabaPuHuiTi-Regular;
}

.join-box2-left,
.join-box3-left {
  width: 45vw;
  display: flex;
}

.tag {
  width: 1vw;
  height: 10vh;
  background: #73B130;
}

.content {
  margin: 0 5vw;
}

.content-title {
  font-family: AlibabaPuHuiTi-Medium;
  font-size: 2.5vw;
  color: #000000;
  font-weight: 500;
  margin-bottom: 5vh;
}

.join-box4 {
  overflow-x: hidden;
}

.content-box {
  transition: all 2s;
}

.content-box p,
.content-box a {
  display: block;
  width: fit-content;
  font-family: AlibabaPuHuiTi-Medium;
  font-size: 2vw;
  color: #000000;
  line-height: 3vw;
  font-weight: 2vw;
  border-bottom: 3px solid transparent;
  text-decoration: none;
}

.content-box p::before {
  content: "•";
  margin-right: 1vw;
  color: #73B130;
}


.join-box2 .content-box p:hover,
.content-box a:hover {
  color: #73B131;
  border-bottom: 3px solid #73B131;
  cursor: pointer;
}

.join-box1 {
  align-items: center;
}

.join-box1,
.join-box2,
.join-box3,
.join-box4 {
  display: flex;
}

.join-box2,
.join-box4 {
  background-color: #fff;
}

.join-box2,
.join-box4,
.join-box3 {
  padding: 10vh 0;
}

.join-box5 {
  width: 100vw;
  height: 50vw;
  background: url('../../images/joinus-overall.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.box2-right .title {
  font-family: AlibabaPuHuiTi-Medium;
  font-size: 4vw;
  color: #000000;
  line-height: 15vh;
  font-weight: 3vw;
}

.box1-left {
  width: 50vw;
  height: 40vw;
  background: url("../../images/joinup.png");
  background-size: 100% 100%;
  transition: all 2s;
}

.box2-right .content {
  width: 30vw;
  font-family: AlibabaPuHuiTi-Light;
  font-size: 2vw;
  color: #000000;
  font-weight: 200;
  margin-left: 0;
}

.video-box .video-title {
  display: inline-block;
  font-family: AlibabaPuHuiTi-Regular;
  font-size: 2vw;
  color: #000000;
  line-height: 10vh;
  font-weight: 400;
}

.video-box {
  display: flex;
  align-items: center;
}

.video-img {
  width: 2vw;
  height: 2vw;
  display: inline-block;
  background: url("../../images/video2.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.join-box2-right {
  width: 50vw;
  height: 30vw;
  display: inline-block;
  background: url("../../images/join-box2.png");
  background-size: 100% 100%;
  transition: all 2s;
}
</style>