import Vue from 'vue'

export default {
  queryUsInfo: () => {
    return Vue.http.post('/contact/queryInfo')
  }
}