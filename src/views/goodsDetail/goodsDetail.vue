<template>
  <div v-if="goodsList.length > 0">
    <!-- 导航 -->
    <t-nav></t-nav>
    <div class="swiper" :style="{'height': goodsHeight + 'px', 'line-height': goodsHeight + 'px'}">
      <img :src="goodsList[goodsId - 1].imgUrl " alt="">
    </div>
    <div class="detail">
      <span v-text="goodsList[goodsId - 1].goodsName"></span>
    </div>
    <div class="btn" @click.stop="download(goodsList[goodsId - 1])">
      <span>下载PDF</span>
    </div>
  </div>
</template>

<script>
  import api from './api'

  export default {
    data() {
      return {
        goodsHeight: '375',
        goodsId: '',
        goodsList: [],
      }
    },
    methods: {
      getSwiperHeight() {
        let width = document.body.clientWidth
        console.log(width)
        this.goodsHeight = width
      },
      queryAll() {
        api.queryList().then(res => {
          console.log(res)
          if (res.body.resCode == "00100000") {
            this.goodsList = res.body.obj
          }
        })
      },
      download(item) {
        console.log(item)
        // window.location.href = item.downLoadUrl
        this.$router.push({path: '/goodsDetail/' + item.key + '/pdf'})
      }
    },
    created() {
      this.goodsId = this.$route.params.id
      console.log(999, this.goodsId)
      this.getSwiperHeight()
      this.queryAll()
    },
  }
</script>

<style scoped>
.swiper {
  margin-top: .88rem;
  text-align: center;
  vertical-align:middle;
}
.swiper img {
  width: 100%;
}
.detail {
  font-size: .32rem;
  color:crimson;
  text-align: center;
}
.btn {
  width: 100%;
  height:.88rem;
  background: red;
  color: #fff;
  text-align: center;
  line-height: .88rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>