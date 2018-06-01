import axios from 'axios'
import {GET_ARTICLE_LIST} from '../mutation-types'

const state = {
  articleList: [],
}
const getters = {
  articleList: state => state.articleList,
}

const actions = {
  getarticleList ({commit, state}, params) {
    axios.get('/articleRouter/selectArticle').then(function (response) {
      if (response.status === 200) {
        const res = response.data
        if (res.code === 200) {
          commit(GET_ARTICLE_LIST, res.msg)
        }
      }
    }).catch(function (error) {
      console.error(error)
    })
  },
}
const mutations = {
  [GET_ARTICLE_LIST] (state, moduleArticleList) {
    if (Array.isArray(moduleArticleList) && moduleArticleList.length > 0) {
      for (var i of moduleArticleList){
        var a = new Date(i.time)
        i.time=a.toLocaleString()
      }
      state.articleList = moduleArticleList
    }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
