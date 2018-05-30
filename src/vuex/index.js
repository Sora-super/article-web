import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import articleList from './modules/article'
Vue.use(Vuex)

export default new Vuex.Store({
 actions,
 modules:{
  articleList
 }
})
