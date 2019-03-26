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
          <li>
            <div class="product-item">
              <div class="common-bg lazy-box">
                <img @click="goProductsDetails(item)"  class="square-lazy" src="http://47.96.101.31:8000/static/img/slb.b4ab6f3.png"/>
              </div>
              <div class="desc">
                就离开是积分范德萨就看见发就离开是积分范德萨就看见发就离开是积分范德萨就看见发就离开是积分范德萨就看见发就离开是积分范德萨就看见发
              </div>
            </div>
          </li>
          <li>
            <div class="product-item">
              <div class="common-bg lazy-box">
                <img @click="goProductsDetails(item)"  class="square-lazy" src="./css/i/icon_right_body@2x.png"/>
              </div>
              <div class="desc">
                就离开是积分范德萨就看见发44
              </div>
            </div>
          </li>
          <li>
            <div class="product-item">
              <div class="common-bg lazy-box">
                <img @click="goProductsDetails(item)"  class="square-lazy" src="./css/i/icon_right_body@2x.png"/>
              </div>
              <div class="desc">
                就离开是积分范德萨就看见发33
              </div>
            </div>
          </li>
          <li>
            <div class="product-item">
              <div class="common-bg lazy-box">
                <img @click="goProductsDetails(item)"  class="square-lazy" src="./css/i/icon_right_body@2x.png"/>
              </div>
              <div class="desc">
                就离开是积分范德萨就看见发11
              </div>
            </div>
          </li>
          <li>
            <div class="product-item">
              <div class="common-bg lazy-box">
                <img @click="goProductsDetails(item)"  class="square-lazy" src="./css/i/icon_right_body@2x.png"/>
              </div>
              <div class="desc">
                就离开是积分范德萨就看见发22
              </div>
            </div>
          </li>
        </ul>
      </div>
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
    goProductsDetails() {
      console.log("详情页")
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
.title {
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
  color: #444444;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
