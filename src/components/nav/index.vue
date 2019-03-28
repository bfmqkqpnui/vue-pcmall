<template>
  <div>
    <!-- 导航 -->
    <div class="nav">
      <!-- 左 -->
      <div class="left" @click="back"><div class="img"><img src="../css/i/icon_right@3x.png" alt=""></div></div>
      <!-- 中 -->
      <div class="middle" v-text="title"></div>
      <!-- 右 -->
      <div class="right" @click.stop="contact">联系我们</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '无锡瑞驰曼科技有限公司'
    }
  },
  methods: {
    contact() {
      this.$router.push({path: '/contact'})
    },
    back() {
      if (location.href.indexOf('/home') != -1) {
        window.history.go(-1)
      }
    }
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: #fff;
}

.nav .left {
  text-align: left;
  position: relative;
  width: .5rem;
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
  width: 1.4rem;
  position: absolute;
  right: .1rem;
}

.nav .middle {
  font-size: .32rem;
  width: 100%;
}
</style>
