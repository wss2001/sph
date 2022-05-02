import Vue from 'vue'
import Vuex from 'vuex'
import search from './search'
import home from './home'
import detail from './detail'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        search,
        home,
        detail
    }
})