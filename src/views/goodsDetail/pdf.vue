<template>
  <div>
    <!-- 导航 -->
    <t-nav></t-nav>
    <div class="pdfBody">
      {{currentPage}} / {{pageCount}}
      <pdf :src="src" @num-pages="pageCount = $event"
      :page="currentPage"
			@page-loaded="currentPage = $event"
      @loaded="loadPdfHandler"></pdf>
    </div>
    <div class="btn">
      <button class="l_btn" :disabled="lDisabled" @click.stop="next('up')">上一页</button><button class="r_btn" :disabled="rDisabled" @click.stop="next('down')">下一页</button>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  data() {
    return {
      currentPage: 1, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: 'pdf', // 文件类型
      src: '', // pdf文件地址
      lDisabled: false,
      rDisabled: false
    }
  },
  methods: {
    init(key) {
      this.src = 'static/pdf/' + key.toUpperCase() + '.pdf'
    },
    // pdf加载时
    loadPdfHandler (e) {
      this.currentPage = 1 // 加载的时候先加载第一页
    },
    next(type) {
      console.log(type, this.currentPage, this.pageCount)
      if ("up" == type) {
        if (this.currentPage > 1) {
          this.rDisabled = false
          this.currentPage -= 1
          if (this.currentPage <= 1) {
            this.lDisabled = true
          } else {
            this.lDisabled = false
          }
        } else {
          this.lDisabled = true
          if (this.pageCount > 0) {
            this.rDisabled = false
          }
        }
      } else if ("down" == type) {
        if (this.currentPage < this.pageCount) {
          this.currentPage += 1
          this.lDisabled = false
          if (this.currentPage >= this.pageCount) {
            this.rDisabled = true
          }
        } else {
          this.rDisabled = true
        }
      }
    }
  },
  created() {
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    // this.src = pdf.createLoadingTask(this.src)
    console.log(this.$route.params.id)
    let key = this.$route.params.id
    this.init(key)
  },
  mounted() {
    console.log(666, this.currentPage, this.pageCount)
    this.currentPage >= 1 ? this.lDisabled = true : this.lDisabled = false
  },
  filters: {

  },
  components: {
    pdf
  },
  watch: {
    '$route'(to,from) {
      if (this.$route.params.id) {
        let key = this.$route.params.id
        this.init(key)
      }
    }
  }
}
</script>

<style scoped>
.pdfBody {
  width: 100%;
  margin-top: .88rem;
}

.btn {
  display: flex;
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

.btn .l_btn, .btn .r_btn {
  flex: 1;
  border: 0;
  background: blue;
  color:#fff
}


.btn .l_btn:active, .btn .l_btn:focus {
  border: 0;
}

.btn .r_btn {

}

.btn .l_btn:disabled,.btn .r_btn:disabled {
  background: #999;
  color:#f8f8f8
}
</style>