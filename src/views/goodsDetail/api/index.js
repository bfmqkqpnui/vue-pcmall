import Vue from 'vue'

export default {
  queryList: () => {
    return Vue.http.post('/home/getGoods')
  }
}