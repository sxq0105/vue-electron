import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
//设置i18n
const i18n = new VueI18n({

  locale: 'zh', // 定义默认语言为中文 

  messages: {
    'zh': require('@/assets/languages/zh.json'),

    'ti': require('@/assets/languages/ti.json')

  }

})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  i18n,
  store,
  template: '<App/>'
}).$mount('#app')
