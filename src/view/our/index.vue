<!--
 * @Author: qianhua.xiong
-->
<template>
    <div class="our_banner"></div>
    <div class="our-menu" :class="{ 'fixed-menu': isFixed }">
        <div class="out-menu-item" id="our-menu1" @click="scrollTop(1)">{{ $t("ourPage.p1") }}</div>
        <div class="out-menu-item" id="our-menu2" @click="scrollTop(2)">{{ $t("ourPage.p2") }}</div>
        <div class="out-menu-item" id="our-menu3" @click="scrollTop(3)">{{ $t("ourPage.p3") }}</div>
        <div class="out-menu-item" id="our-menu4" @click="scrollTop(4)">{{ $t("ourPage.p4") }}</div>
    </div>
    <div class="our-section1" ref="moduleToScroll1">
        <div class="section-box">
            <div class="section-box-title">{{ $t("ourPage.p5") }}</div>
            <div class="section-box-content">
                <div class="section-box-img1"></div>
                <div class="fontStyleSet">{{ $t("ourPage.p6") }}</div>
            </div>
            <div class="section-box-title">{{ $t("ourPage.p7") }}</div>
            <div class="section-box-content">
                <div class="section-box-img2"></div>
                <div class="fontStyleSet">{{ $t("ourPage.p8") }}</div>
            </div>
            <div class="section-box-title">{{ $t("ourPage.p9") }}</div>
            <div class="section-box-content">
                <div class="section-box-img3"></div>
                <div class="fontStyleSet">{{ $t("ourPage.p10") }}</div>
            </div>
            <div class="section-box-title">{{ $t("ourPage.p11") }}</div>
            <div class="section-box-content">
                <div class="section-box-img4"></div>
                <div class="fontStyleSet">{{ $t("ourPage.p12") }}</div>
            </div>
        </div>
        <div class="section-img"></div>
    </div>
    <div class="our-section2" :class="{ 'hidden': isHidden }" ref="moduleToScroll2">
        <div class="our-section-title">{{ $t("ourPage.p2") }}</div>
        <div class="our-section-develop-content">
            <div class="our-section-develop-conten-bg"></div>
            <el-timeline>
                <el-timeline-item :timestamp="$t('ourPage.p15')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p16.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p16.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p16.2") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p16.3") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p16.4") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p17')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p18.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p18.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p18.2") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p18.3") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p18.4") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p19')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p20.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p20.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p20.2") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p20.3") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p20.4") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p20.5") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p21')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p22.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p22.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p22.2") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p22.3") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p22.4") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p23')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p24.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p24.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p24.2") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p24.3") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p24.4") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p24.5") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p25')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p26.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p26.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p26.2") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p27')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p28.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p28.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p28.2") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p28.3") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p29')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p30.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p30.1") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p31')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p32.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p32.1") }}</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item :timestamp="$t('ourPage.p33')" placement="top" color="#73B130" size="large" type="success"
                    hollow=true>
                    <el-card>
                        <p class="fontStyleSet">{{ $t("ourPage.p34.0") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p34.1") }}</p><br> 
                        <p class="fontStyleSet">{{ $t("ourPage.p34.2") }}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
        <div :class="{ 'our-section2-more': isHidden, 'our-section2-more-visible': !isHidden }">
            <botton class="button-more" @click="knownMore">{{ $t("ourPage.more") }}</botton>
        </div>
    </div>
    <div class="our-section3" ref="moduleToScroll3">
        <div class="our-section-title">{{ $t("ourPage.p35") }}</div>
        <div class="our-section-content">
            <div class="our-section-content-img"></div>
            <div class="our-section-content-menu">
                <div class="our-section-menu-list">
                    <div class="our-section-menu-item" @click="changeTab(0)" :class="{ 'active': activeTab === 0 }">{{
                        $t("ourPage.p36.0") }}</div>
                    <div class="our-section-menu-item" @click="changeTab(1)" :class="{ 'active': activeTab === 1 }">{{
                        $t("ourPage.p36.1") }}</div>
                    <div class="our-section-menu-item" @click="changeTab(2)" :class="{ 'active': activeTab === 2 }">{{
            $t("ourPage.p36.2") }}</div>
                    <div class="our-section-menu-item" @click="changeTab(3)" :class="{ 'active': activeTab === 3 }">{{
                        $t("ourPage.p36.3") }}</div>
                </div>
                <div class="our-section-menu-content">
                    <div class="honour-section" v-if="activeTab === 0">
                        <p>{{ $t("ourPage.p37.0") }}</p>
                        <p>{{ $t("ourPage.p37.1") }}</p>
                        <p>{{ $t("ourPage.p37.2") }}</p>
                        <p>{{ $t("ourPage.p37.3") }}</p>
                        <p>{{ $t("ourPage.p37.4") }}</p>
                        <p>{{ $t("ourPage.p37.5") }}</p>
                        <p>{{ $t("ourPage.p37.6") }}</p>
                    </div>
                    <div class="mission-section" v-if="activeTab === 1">
                        <p>{{ $t("ourPage.p40") }}</p>
                    </div>
                    <div class="vision-section" v-if="activeTab === 2">
                        <p>{{ $t("ourPage.p41.0") }}</p>
                        <p>{{ $t("ourPage.p41.1") }}</p>
                    </div>
                    <div class="culture-section" v-if="activeTab === 3">
                        <p><span class="span1">{{ $t("ourPage.p42.0") }}</span><span class="span2">{{ $t("ourPage.p42.1")
                        }}</span></p>
                        <p><span class="span3">{{ $t("ourPage.p42.2") }}</span><span class="span4">{{ $t("ourPage.p42.3")
                        }}</span></p>
                        <p><span class="span5">{{ $t("ourPage.p42.4") }}</span></p>
                        <p><span class="span6">{{ $t("ourPage.p42.5") }}</span><span class="span7">{{ $t("ourPage.p42.6")
                        }}</span></p>
                        <p><span class="span8">{{ $t("ourPage.p42.7") }}</span></p>
                        <p><span class="span9">{{ $t("ourPage.p42.8") }}</span><span class="span10">{{ $t("ourPage.p42.9")
                        }}</span></p>
                    </div>
                </div>
                <div class="our-section-menu-border"></div>
            </div>
        </div>
    </div>
    <div class="our-section4" ref="moduleToScroll4">
        <div class="our-section-title">{{ $t("ourPage.p38") }}</div>
        <div class="our-section-parterner1"></div>
    </div>
    <div class="our-section5" ref="moduleToScroll5">
        <div class="our-section-title">{{ $t("ourPage.p39") }}</div>
        <div class="our-section-parterner2"></div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
let activeTab = ref(0);
let isHidden = ref(true);
const knownMore = () => {
    isHidden.value = false
}
const moduleToScroll1 = ref(null);
const moduleToScroll2 = ref(null);
const moduleToScroll3 = ref(null);
const moduleToScroll4 = ref(null);
const changeTab = (index) => {
    activeTab.value = index
}
const scrollTop = (num) => {
    switch (num) {
        case 1:
            moduleToScroll1.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break
        case 2:
            moduleToScroll2.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break
        case 3:
            moduleToScroll3.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break
        case 4:
            moduleToScroll4.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break
        default:
            moduleToScroll1.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break;
    }
}
const isFixed = ref(false);

const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    isFixed.value = scrollTop > window.innerHeight * 0.35;
};
onMounted(() => {
    const appDiv = document.getElementById('app');
    appDiv.addEventListener('scroll', handleScroll);
});
</script>
  
<style scoped>
.our-section2-more-visible {
    display: none
}

/* 菜单样式 */
.fixed-menu {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1000;
}

.our_banner {
    width: 100vw;
    height: 28vw;
    background: url('../../images/our-banner.png');
    background-size: 100% 100%;
}

.our-menu {
    width: 100vw;
    height: 7vh;
    display: flex;
    align-items: center;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
}

.out-menu-item {
    flex: 1;
    text-align: center;
    cursor: pointer;
}

.out-menu-item:hover {
    color: #73B131;
    padding: 1.5vh 0;
    border-radius: 2px;
    border-bottom: 2px solid #73B131;
}
.our-section2.hidden {
    position: relative;
    height: 80vh;
    overflow: hidden;
}
.our-section2,
.our-section3,
.our-section4 {
    padding: 5vh 0;
}
.our-section1,.our-section2,.our-section3{
    background-color: #F9F9F9;
}
.our-section2-more {
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
    text-align: center;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F9F9F9 56%);
    display: flex;
    justify-content: center;
    align-items: end;
}

.button-more {
    color: #73B130;
    border: 3px solid #73B130;
    font-size: 2vw;
    cursor: pointer;
    font-weight: 500;
}

.section-box {
    padding: 5vw 8vw;
}

.section-box-title {
    font-weight: 500;
    font-size: 1.5vw;
    margin: 2vh 0;
    font-family: AlibabaPuHuiTi-Medium;
}
.fontStyleSet{
    font-family: AlibabaPuHuiTi-Regular;
    font-weight: 400;
    font-size: 1.4vw;
}
.section-img {
    width: 100vw;
    height: 28vw;
    background: url("../../images/our-img1.png");
    background-size: 100% 100%;
}

.section-box-content {
    width: 100%;
    display: flex;
    align-items: center;
}

.section-box-img1 {
    min-width: 50px;
    min-height: 50px;
    background: url("../../images/principle1.png");
    background-size: 100% 100%;
    margin-right: 20px;
}

.section-box-img2 {
    min-width: 50px;
    min-height: 50px;
    background: url("../../images/principle2.png");
    background-size: 100% 100%;
    margin-right: 20px;
}

.section-box-img3 {
    min-width: 50px;
    min-height: 50px;
    background: url("../../images/principle3.png");
    background-size: 100% 100%;
    margin-right: 20px;
}

.section-box-img4 {
    min-width: 50px;
    min-height: 50px;
    background: url("../../images/principle4.png");
    background-size: 100% 100%;
    margin-right: 20px;
}

.our-section-title {
    width: 100vw;
    height: 3vh;
    padding: 1vh;
    border-left-width: 5px;
    border-left-style: solid;
    border-left-color: #73B131;
    text-align: left;
    padding-left: 5vw;
    font-size: 3vh;
}

.our-section-parterner1 {
    width: 100vw;
    height: 60vw;
    background: url("../../images/our-partner1.png");
    background-size: 100% 100%;
}

.our-section-parterner2 {
    width: 100vw;
    height: 60vw;
    background: url("../../images/our-partner2.png");
    background-size: 100% 100%;
}

.our-section-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.culture-section {
    height: 28vw;
    position: relative;
}

.culture-section .span1 {
    top: 5%;
    left: 10%;
    opacity: 0.6;
    line-height: 3vw;
    font-weight: 400;
    font-size: 3vw;
}

.culture-section .span2 {
    top: 5%;
    right: 30%;
    opacity: 0.7;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 3vw;
    color: #000000;
    line-height: 3vw;
    font-weight: 400;
}

.culture-section .span3 {
    top: 20%;
    left: 30%;
    opacity: 0.6;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 3vw;
    color: #000000;
    line-height: 3vw;
    font-weight: 400;
}

.culture-section .span4 {
    top: 20%;
    right: 10%;
    opacity: 0.5;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 2vw;
    color: #000000;
    line-height: 2vw;
    font-weight: 400;
}

.culture-section .span5 {
    right: 40%;
    bottom: 45%;
    opacity: 0.9;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 3.5vw;
    color: #000000;
    line-height: 3.5vw;
    font-weight: 400;
}

.culture-section .span6 {
    right: 1%;
    bottom: 30%;
    opacity: 0.5;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 3vw;
    color: #000000;
    line-height: 3vw;
    font-weight: 400;
}

.culture-section .span7 {
    left: 10%;
    bottom: 30%;
    opacity: 0.5;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 3vw;
    color: #000000;
    line-height: 3vw;
    font-weight: 400;
}

.culture-section .span8 {
    bottom: 15%;
    left: 40%;
    opacity: 0.4;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 2vw;
    color: #000000;
    line-height: 2vw;
    font-weight: 400;
}

.culture-section .span9 {
    bottom: 0;
    left: 10%;
    opacity: 0.7;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 3.2vw;
    color: #000000;
    line-height: 3.2vw;
    font-weight: 400;
}

.culture-section .span10 {
    bottom: 5%;
    right: 30%;
    opacity: 0.6;
    font-family: AlibabaPuHuiTi-Regular;
    font-size: 2.5vw;
    color: #000000;
    line-height: 2.5vw;
    font-weight: 400;
}

.culture-section>p>span {
    position: absolute;
    display: inline-block;
    height: 5vw;
}

.our-section-content-img {
    width: 40vw;
    height: 30vw;
    background: url("../../images/our-section-content-img.png");
    background-size: 100% 100%;
    margin: 5vw;
}

.our-section-content-menu {
    flex: 1;
}

.our-section-menu-list {
    display: flex;
}

.our-section-menu-item {
    flex: 1;
    font-size: 1.5vw;
    cursor: pointer;
    text-align: center;
    border-bottom: 2px solid #F9F9F9;
    font-weight: 500;
    margin: 0 1vw;
}

.our-section-menu-item:hover {
    color: #73B131;
    border-bottom: 2px solid #73B131;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}

.our-section-menu-item.active {
    color: #73B131;
    border-bottom: 2px solid #73B131;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}

.our-section-menu-content {
    height: 28vw;
    overflow-y: scroll;
}

.our-section-menu-border {
    width: 70%;
    height: 5px;
    background-color: #73B131;
    border-radius: 2px;
    margin-left: 5%;
}

.our-section-develop-content {
    width: 80%;
    min-height: 80vh;
    position: relative;
    margin: 5vh auto;
}

.our-section-develop-conten-bg {
    width: 20vw;
    height: 15vw;
    position: absolute;
    top: 10vh;
    right: 10vw;
    background: url("../../images/our-section-develop-conten-bg.png");
    background-size: 100% 100%;
}

.honour-section p {
    margin: 2% 5%;
}

.mission-section p {
    margin: 2% 5%;
    font-size: 1.5vw;
    font-weight: 400;
    line-height: 3vh;
}

.vision-section>:first-child {
    margin: 4% 5%;
    font-size: 3vw;
    font-weight: 400;
    line-height: 10vh;
}

.vision-section>:last-child {
    margin: 4% 0% 0% 40%;
    font-size: 3vw;
    font-weight: 400;
    line-height: 10vh;
}

.el-card {
    --el-card-bg-color: transparent;
    border: none;
}

.el-timeline-item__timestamp {
    font-size: 3vh;
}</style>