import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  name: 'Root',

  data() {
    return {
      counter: 0,
    };
  },
});

const app = createApp(RootComponent).mount('#app');
