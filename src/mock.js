// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// mock首页列表数据
const queryAll = () => {
  let list = [];
  list.push({index: 1, imgUrl: '../../../static/img/goods/sb8.png', goodsName: 'SB8悬臂梁传感器'})
  list.push({index: 2, imgUrl: '../../../static/img/goods/slb.png', goodsName: 'SLB悬臂梁式传感器'})
  list.push({index: 3, imgUrl: '../../../static/img/goods/sb14.png', goodsName: 'SB14悬臂梁式称重传感器'})
  list.push({index: 4, imgUrl: '../../../static/img/goods/rc3.png', goodsName: 'RC3柱式传感器'})
  list.push({index: 5, imgUrl: '../../../static/img/goods/pc60.png', goodsName: 'PC60单点称重传感器'})
  list.push({index: 6, imgUrl: '../../../static/img/goods/pc42.png', goodsName: 'PC42单点称重传感器'})
  list.push({index: 7, imgUrl: '../../../static/img/goods/52-20.png', goodsName: '52-20称重模块'})
  list.push({index: 8, imgUrl: '../../../static/img/goods/52-30.png', goodsName: '52-30称重模块'})
  list.push({index: 9, imgUrl: '../../../static/img/goods/55-01-10.png', goodsName: '55-01-10称重模块'})
  list.push({index: 10, imgUrl: '../../../static/img/goods/ke-4.png', goodsName: 'KE-4接线盒'})
  list.push({index: 11, imgUrl: '../../../static/img/goods/keex-6.png', goodsName: 'KEEX-6接线盒'})
  let returnObj = {
    resCode: '00100000',
    msg: '查询成功',
    obj: list
  }
  return returnObj
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/home/getGoods', 'post', queryAll)

// mock联系我们的数据
const contact = () => {
  let list = [];
  list.push({index: 1, title: '地址：', content: '无锡市崇安区上马墩路18号传感技术应用中心'})
  list.push({index: 2, title: '电话：', content: '+86 13337907900', tel: '13337907900'})
  list.push({index: 3, title: '联系人：', content: '陆先生'})
  list.push({index: 4, title: '邮箱：', content: '728551240@qq.com'})
  let returnObj = {
    resCode: '00100000',
    msg: '查询成功',
    obj: list
  }
  return returnObj
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/contact/queryInfo', 'post', contact)