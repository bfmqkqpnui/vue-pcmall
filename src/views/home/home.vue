<template>
  <div>
    <!-- 导航 -->
    <t-nav></t-nav>
    <!-- 商品列表 -->
    <div>
      <div class="title">
        <span>
          <img src="./css/i/icon_left_body@2x.png" alt="">
          <span class="titleContent">富林泰克</span>
          <img src="./css/i/icon_right_body@2x.png" alt="">
        </span>
      </div>
      <div class="product-list">
        <ul>
          <li v-for="(item, index) in goodsList" :key="index">
            <div class="product-item">
              <div class="common-bg lazy-box">
                <img @click="goProductsDetails(item)"  class="square-lazy" :src="item.imgUrl"/>
              </div>
              <div class="desc" v-text="item.goodsName"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api'

export default {
  data() {
    return {
      goodsList: [],
    }
  },
  methods: {
    goProductsDetails(item) {
      console.log("详情页", item)
      this.$router.push({path: '/goodsDetail/' + item.index})
    },
    queryAll() {
      api.queryList().then(res => {
        console.log(res)
        if (res.body.resCode == "00100000") {
          this.goodsList = res.body.obj
        }
      })
    },
  },
  created() {
    this.queryAll()
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
.title {
  margin-top: .88rem;
  text-align: center;
  background: #F8F8F8;
  height: 1rem;
  line-height: 1rem;
  font-size: .28rem;
}

.product-list {
  width: 100%;
}

.product-list ul{
  font-size: 0;
  overflow: hidden;
  margin-left: -0.3rem;
}

.product-list ul li {
  padding-left: 0.3rem;
  display: inline-block;
  margin-bottom: 0.3rem;
  width: 50%;
  vertical-align: top;
}

.product-list ul .product-item {
  background: #ffffff;
  font-size: 0.28rem;
}

.product-list .desc {
  padding: 0 .1rem;
  margin: 0.1rem 0;
  height: 0.7rem;
  line-height: 0.35rem;
  font-size: 0.24rem;
  color: rgb(179, 29, 79);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
