import Vue from 'vue';
import VueScreen from 'vue-screen';
import { screens } from './tailwind.config';

Vue.use(VueScreen, screens);

const Test = {
  template: `
  <div>
    <div class="touch">{{ $screen.width }}</div>
    <div class="touch">{{ breakpoint }}</div>
  </div>
  `,
  computed: {
    breakpoint() {
      if (this.$screen.xl) {
        return 'XL';
      }

      if (this.$screen.lg) {
        return 'LG';
      }

      if (this.$screen.md) {
        return 'MD';
      }

      if (this.$screen.sm) {
        return 'SM';
      }

      return 'XS';
    }
  },
};

new Vue({
  components: {
    Test,
  },
  template: '<div id="#app"><Test></Test></div>',
}).$mount('#app');
