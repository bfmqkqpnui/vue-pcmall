<template>
  <div>
    <!-- 导航 -->
    <t-nav></t-nav>
    <div class="contact">
      <div class="s_title">联系Flintec中国江苏授权代理 无锡瑞驰曼科技有限公司</div>
      <div>
        <ul>
          <li v-for="(item, index) in infoList" :key="index">
            <span class="lable" v-text="item.title"></span>
            <span class="content">
              <template v-if="item.tel">
                <a href="javascript:void(0)" @click.stop="call(item.tel)">{{item.content}}</a>
              </template>
              <template v-else>
                {{item.content}}
              </template>
            </span>
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
      infoList: []
    }
  },
  methods: {
    queryAll() {
      api.queryUsInfo().then(res => {
        console.log(res)
        if (res.body.resCode == "00100000") {
          this.infoList = res.body.obj
        }
      })
    },
    call(tel) {
      if (tel) {
        location.href = "tel:" + tel
      }
    }
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
.contact {
  width: 100%;
  margin-top: .88rem;
  padding: 0 .1rem;
  font-size: .32rem;
}

.contact .s_title {
  font-size: .28rem;
  font-weight: bold;
  padding: .1rem 0;
  border-bottom: .1rem solid red;
}

.contact ul {
  margin-top: .2rem;
}

.contact ul li {
  margin-bottom: .2rem;
}

.contact .lable {

}

.contact .content {
  font-size: .3rem;
  font-family: "宋体";
  font-weight: bold;
}
</style>
