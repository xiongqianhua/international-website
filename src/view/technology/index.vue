<!--
 * @Author: qianhua.xiong
-->
<template>
  <div class="tech-wrapper">
    <div class="box">
      <div class="box-content">
        <div class="title">{{ $t("technologyPage.p1") }}</div>
        <div class="content">{{ $t("technologyPage.p2.0") }}</div>
        <div class="content">{{ $t("technologyPage.p2.1") }}</div>
      </div>
    </div>
    <div class="box1">
      <div class="box1-bg"></div>
      <div class="box1-content">
        <div class="title">{{ $t("technologyPage.p3") }}</div>
        <div class="content">
          <div class="sbox">
            <div class="sbox-img1"></div>
            <div class="sbox-title"> {{ $t("technologyPage.p4") }}</div>
          </div>
          <i class="fence"></i>
          <div class="sbox">
            <div class="sbox-img2"></div>
            <div class="sbox-title">{{ $t("technologyPage.p5") }}</div>
          </div>
          <i class="fence"></i>
          <div class="sbox">
            <div class="sbox-img3"></div>
            <div class="sbox-title">{{ $t("technologyPage.p6") }}</div>
          </div>
          <i class="fence"></i>
          <div class="sbox">
            <div class="sbox-img4"></div>
            <div class="sbox-title">{{ $t("technologyPage.p7") }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="videoImg">
        <video class="video" id="20210707_01.mp4" muted="" autoplay="autoplay" loop="loop" style="display: block;">
          <source src="../../images/video/20210707_01.mp4" type="video/mp4">
          {{ $t("tips") }}
        </video>
      </div>
    </div>
    <div class="box5">
      <div class="title">{{ $t("technologyPage.p8") }}</div>
      <div class="content">
          <div class="sbox">
            <div class="sbox-img5"></div>
            <div class="sbox-title"> {{ $t("technologyPage.p9") }}</div>
          </div>
          <i class="fence"></i>
          <div class="sbox">
            <div class="sbox-img6"></div>
            <div class="sbox-title">{{ $t("technologyPage.p10") }}</div>
          </div>
          <i class="fence"></i>
          <div class="sbox">
            <div class="sbox-img7"></div>
            <div class="sbox-title">{{ $t("technologyPage.p11") }}</div>
          </div>
        </div>
    </div>
    <div class="box3">
      <div class="tech-img6"></div>
    </div>
    <div class="box5">
      <div class="title">{{ $t("technologyPage.p12") }}</div>
      <div class="content">
          <div class="sbox">
            <div class="sbox-img8"></div>
            <div class="sbox-title"> {{ $t("technologyPage.p13") }}</div>
          </div>
          <i class="fence"></i>
          <div class="sbox">
            <div class="sbox-img9"></div>
            <div class="sbox-title">{{ $t("technologyPage.p14") }}</div>
          </div>
          <i class="fence"></i>
          <div class="sbox">
            <div class="sbox-img10"></div>
            <div class="sbox-title">{{ $t("technologyPage.p15") }}</div>
          </div>
        </div>
    </div>
    <div class="box4">
      <div class="tech-img8"></div>
      <div class="tech-img9"></div>
    </div>
    <div class="box3">
      <div class="tech-img7"></div>
    </div>
  </div>
</template>
    
  <script>
    export default {
      name: 'technology',
      data() {
        return {
        }
      },
      components: {},
    }
  </script>
    
  <style scoped>
   .tech-wrapper .box{
      width: 100vw;
      height: 80vh;
      position: relative;
      background: url("../../images/techbg1.png");
      background-size: 100% 100%;
    }
    .tech-wrapper .box .box-content{
      position: absolute;
      width: 50vw;
      right:5vw;
      bottom:10vh;
    }
    .tech-wrapper .box .box-content .title{
      font-size: 5vw;
      line-height: 10vw;
      font-weight: 500;
      text-align: left;
      font-family: AlibabaPuHuiTi-Regular;
      color: #FFFFFF;
    }
    .tech-wrapper .box1 .box1-content .title{
      font-family: AlibabaPuHuiTi-Regular;
      font-size: 1vh;
      color: #000000;
      text-align: center;
      font-weight: 400;
    }
    .tech-wrapper .box1 .box1-content .content{
      display: flex;
    }
    .tech-wrapper .box .box-content .content{
      font-size: 2vw;
      line-height: 3vw;
      font-weight: 400;
      text-align: left;
      font-family: AlibabaPuHuiTi-Regular;
      color: #FFFFFF;
    }
    .tech-wrapper .box1{
      width: 100vw;
      height: 60vh;
      display: flex;
    }
    .tech-wrapper .box1 .box1-bg{
      width: 100%;
      background: url("../../images/techbg2.png");
      background-size: 100% 100%;
    }
    .tech-wrapper .box1 .box1-content{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .tech-wrapper .box1 .box1-content .content{
      display: flex;
      justify-content: center;
      align-items: left;
    }
    .tech-wrapper .box1 .box1-content .title{
      width: 90%;
      font-family: AlibabaPuHuiTi-Regular;
      font-size: 1.5vw;
      color: #000000;
      text-align: center;
      font-weight: 400;
      margin-bottom: 5vh;
    }
    .tech-wrapper .box1 .box1-content .sbox{
      flex: 1;
    }
    .sbox-title{
      max-width: 90%;
      margin: 10px;
      font-family: AlibabaPuHuiTi-Regular;
      font-size: 10.82px;
      color: #000000;
      text-align: center;
      font-weight: 400;
    }
    .sbox-img1{
      width: 50px;
      height: 50px;
      background: url("../../images/tech-img1.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img2{
      width: 50px;
      height: 50px;
      background: url("../../images/tech-img2.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img3{
      width: 50px;
      height: 50px;
      background: url("../../images/tech-img3.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img4{
      width: 50px;
      height: 50px;
      background: url("../../images/tech-img4.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img5{
      width: 50px;
      height: 50px;
      background: url("../../images/sbox-img5.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img6{
      width: 50px;
      height: 50px;
      background: url("../../images/sbox-img6.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img7{
      width: 50px;
      height: 50px;
      background: url("../../images/sbox-img7.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img8{
      width: 50px;
      height: 50px;
      background: url("../../images/sbox-img8.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img9{
      width: 50px;
      height: 50px;
      background: url("../../images/sbox-img9.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .sbox-img10{
      width: 50px;
      height: 50px;
      background: url("../../images/sbox-img10.png");
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .fence{
      width: 1px;
      background-color: rgba(115,177,49,1);
      margin: 0 0 2.5vw 0;
    }
    .box3{
      width: 100vw;
    }
    .box3 .tech-img6{
      height: 50vw;
      background: url("../../images/tech-img6.png");
      background-size: 100% 100%;
    }
    .box3 .tech-img7{
      width: 100%;
      height: 70vh;
      background: url("../../images/tech-img7.png");
      background-size: 100% 100%;
      transition: all 0.3s;
    }
    .box3 .tech-img7:hover{
      transform: scale(1.2);
    }
    .videoImg {
      width: 80%;
      margin: 0 auto;
    }
    .videoImg video {
      width: 100%;
    }
    .box4{
      width: 100vw;
      display: flex;
    }
    .box4 .tech-img8{
      height: 50vh;
      flex:1;
      background: url("../../images/tech-img8.png");
      background-size: 100% 100%;
      transition: all 0.3s;
    }
    .box4 .tech-img9{
      flex:1;
      background: url("../../images/tech-img9.png");
      background-size: 100% 100%;
      transition: all 0.3s;
    }
    .box4 .tech-img9:hover{
      transform: scale(1.2);
    }
    .box4 .tech-img8:hover{
      transform: scale(1.2);
    }
    .box5 .title{
      width: 50vw;
      text-align: center;
      margin: 10px auto;
    }
    .box5 .content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box5 .sbox-title{
      width: 15vw;
    }
    .box3 , .box4{
      overflow: hidden;
    }
    .box4>div{
      overflow: hidden;
    }
  </style>