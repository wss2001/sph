import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入vuex
import store from '@/store'

// 引入全局组件
import TypeNav from './pages/Home/TypeNav'
import LunBo from '@/components/LunBo'

// 引入接口数据
import {getBaseCategoryList} from '@/api'
getBaseCategoryList()

// 引入mock
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

// 注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(LunBo.name,LunBo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
