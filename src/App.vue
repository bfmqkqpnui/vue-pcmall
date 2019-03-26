<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0; 
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

*, :after, :before {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.lazy-box:after, .lazyload:after {
    content: "";
    display: block;
    padding-top: 100%;
}

body {
  font-size: .24rem;
  font-family: "微软雅黑"
}

dd, dl, li, ol, ul {
  list-style: none outside none;
}

img, image{
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  line-height: inherit;
  outline: 0;
  outline: medium none;
  vertical-align: middle;
  height: auto;
  border: 0;
  -webkit-touch-callout: none;
}

.lazy-box, .lazyload {
  position: relative;
  background-color: #fff;
}

.lazy-box .lazy, .lazy-box .square-lazy, .lazyload .lazy, .lazyload .square-lazy {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 0;
}

.lazy-box .square-lazy, .lazyload .square-lazy {
  width: 100%!important;
}
</style>
