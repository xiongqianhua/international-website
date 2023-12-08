<!--
 * @Author: qianhua.xiong
-->
<template>
    <HeadContent/>
    <div class="pageContent">
      <router-view></router-view>
    </div>
    <FootContent/>
</template>
<script>
import HeadContent from './view/head/index.vue';
import FootContent from './view/foot/index.vue';
export default {
    name: 'App',
    data() {
      return {}
    },
    components: {HeadContent,FootContent}
}
</script>