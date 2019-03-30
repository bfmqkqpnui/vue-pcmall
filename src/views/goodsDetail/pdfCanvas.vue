<template>
  <div>
    <!-- 导航 -->
    <t-nav></t-nav>
		<div class="resizeBtn">
			<div class="btn_big" @click.stop="resize('add')">放大</div><div class="btn_sm" @click.stop="resize('reduce')">缩小</div><div class="btn_default" @click.stop="scaleConfig">还原</div>
		</div>
    <div class="pdfBody" v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="10">
        <canvas v-for="n in numPages" :id="'the-canvas' + n" :key="n" class="pdf-content"></canvas>
    </div>
    <!-- <div class="btn">
      <button class="l_btn" :disabled="lDisabled" @click.stop="next('up')">上一页</button><button class="r_btn" :disabled="rDisabled" @click.stop="next('down')">下一页</button>
    </div> -->
  </div>
</template>

<script>
import PDFJS from 'pdfjs-dist'
import 'pdfjs-dist/web/pdf_viewer.css'
PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js'

export default {
  data() {
    return {
      src: null,
			pageNum: 1, // 默认当前页
			numPages: 0, // PDF总页数
      pageRendering: false,
      pageNumPending: null,
      scale: 1,
      lDisabled: false,
			rDisabled: false,
			busy: false,
    }
  },
  methods: {
    init(key) {
			this.src = 'static/pdf/' + key.toUpperCase() + '.pdf'
			// this.showPDF()
    },
		// 无限加载
		loadMore() {
			console.log("无限加载")
			this.busy = true

			PDFJS.getDocument(this.src).then(res => {
				console.log('读取结果：', res, res.numPages)
				if (res) {
					this.numPages = res.numPages // 总页数
					// 默认加载第一页
					res.getPage(this.pageNum).then(page => {
						let scale = document.body.clientWidth/page.getViewport(this.scale).width
						var viewport = page.getViewport(scale)
						var canvas = document.getElementById('the-canvas' + this.pageNum)
						var context = canvas.getContext('2d')
						canvas.height = viewport.height
						canvas.width = viewport.width
						var renderContext = {
							canvasContext: context,
							viewport: viewport
						};
						page.render(renderContext)
						console.log(this.pageNum, this.numPages)
						if (this.pageNum + 1 <= this.numPages) {
							this.busy = false
							this.pageNum += 1
						}
					})
				}
			})
		},
    resize(type) {
			if (type && type == "add") {
				if (this.scale >= 0.4) {
					this.scale = (this.scale * 10 - 1) / 10
				}
			} else {
				if (this.scale < 1) {
					this.scale = (this.scale * 10 + 1) / 10
				}
			}
		},
		scaleConfig() {
			this.scale = 1
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
  },
  watch: {
    '$route'(to,from) {
      if (this.$route.params.id) {
        let key = this.$route.params.id
        this.init(key)
      }
		},
		scale() {
			if (this.scale) {
				this.pageNum = 1
				this.loadMore()
			}
		}
  }
}
</script>

<style scoped>
.pdfBody {
  width: 100%;
  /* margin-top: .88rem; */
}

.resizeBtn {
	margin-top: .88rem;
	height: .88rem;
	line-height: .88rem;
	text-align: center;
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}

.resizeBtn div{
	flex: 1;
	color: #333;
	font-size: .28rem;
}

.btn_big {
	background: #ccc
}

.btn_sm {
	background: #999
}

.btn_default {
	background: orangered;
	color: antiquewhite
}
</style>