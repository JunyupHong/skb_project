import Vue from 'vue';
import App from './app';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
// import {Radio, Button} from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

// Vue.use(Radio);
// Vue.use(Button);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
