const install = function (Vue) {
  if (install.installed) return;

  Vue.component('t-nav', resolve => {
    require(['./nav'], resolve)
  });

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
}

export default install