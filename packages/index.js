import Button from './button';

const components = [Button];

function install(Vue) {
  components.forEach(c => {
    Vue.component(c.name, c);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install };
