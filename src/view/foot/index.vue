<template>
    <div class="foot-box"><span>{{ $t("name") }}</span><span>{{ $t('ICP') }}</span></div>
</template>

<script>
export default {
  name: 'footContent',
  data() {
    return {
    }
  },
  components: {}
}
</script>

<style>
.foot-box{
    width: 100vw;
    height: 5vh;
    text-align: center;
    font-size: 14px;
}
.foot-box span{
    margin: 0 20px;
}
</style>