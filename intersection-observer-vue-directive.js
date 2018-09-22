export default {
  install(Vue) {
    Vue.directive('sticky', {

      inserted(el, binding, vnode, oldVnode) {
      
          window.observer = new IntersectionObserver((entry) => {
            // Do something with the **entry
          }, {
            threshold: 1.0
          });
          
          window.observer.observe(el);
      },
      unbind(el, binding, vnode, oldVnode) {
        window.oberver.disconnect()
      }
    });
  }
};
