import { createApp } from './vendor/vue.esm-browser.js';

const App = {
  data() {
    return {
      operator: 'sum',
      a: null,
      b: null,
    };
  },
  computed: {
    result() {
      switch (this.operator) {
        case 'sum':
          return this.a + this.b;
        case 'subtract':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide':
          return this.a / this.b;
      }
    },
  },
};

createApp(App).mount('#app');
