<template>
  <span class="page-back" v-if="visible" v-link="'/'">
    <i class="mintui mintui-back"></i>
  </span>
  <router-view></router-view>
</template>

<style lang="scss">
  /*@reset-global mobile;*/

  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  .page-back {
    display: inline-block;
    /*position: absolute 12px * * 10px;*/
    position: absolute;
    top: 12px;
    bottom: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>

<script type="text/babel">
  // import './mint/assets/font/iconfont.css';

  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
