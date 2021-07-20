import { setLocalStorage } from '../../common/utils/util.js'
import { getLanguage } from '../../language/index'

const state = {
  language: getLanguage(),
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
    setLocalStorage('language', language)
  }
}

const actions = {
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
