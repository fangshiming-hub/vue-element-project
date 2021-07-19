import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI  from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

import i18n from './language' 
import './assets/style/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
