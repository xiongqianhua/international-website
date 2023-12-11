
<template>
    <div class="videoImg">
        <video class="video" muted loop="loop" style="display: block;" ref="videoRef" @click="pauseVideo">
          <source src="../../images/video/products01.mp4" type="video/mp4">
          {{ $t("tips") }}
        </video>
    </div>
</template>
    
  <script>
    export default {
      name: 'product2',
      data() {
        return {
        }
      },
      components: {},
    }
  </script>
    
  <style scoped>
    
  </style>