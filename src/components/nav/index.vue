<template>
  <div>
    <!-- 导航 -->
    <div class="nav">
      <!-- 左 -->
      <div class="left"><div class="img"><img src="../css/i/icon_right@3x.png" alt=""></div></div>
      <!-- 中 -->
      <div class="middle">我是首页</div>
      <!-- 右 -->
      <div class="right">联系我们</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  },
  mounted() {

  },
  filters: {

  },
  components: {

  }
}
</script>

<style scoped>
.nav {
  display: flex;
  height: .88rem;
  text-align: center;
  line-height: .88rem;
}

.nav .left,.nav .middle,.nav .right {
  flex: 1;
}

.nav .left {
  text-align: left;
  position: relative;
}
.nav .left .img {
  width: .4rem;
  height: .4rem;
  position: absolute;
  left: 0;
  top: .24rem;
}

.nav .left .img img {
  width: 100%;
  display: block;
  transform:rotate(180deg);
  -ms-transform:rotate(180deg); 	/* IE 9 */
  -moz-transform:rotate(180deg); 	/* Firefox */
  -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
  -o-transform:rotate(180deg); 
}
.nav .right {
  text-align: right;
  font-size: .28rem;
  color: #ff0000;
  padding-right: .2rem
}

.nav .middle {
  font-size: .32rem;
}
</style>
