const state = {
  username: 'leexiaoyong'
}
const getters = {
  changename: state => state.username + 'suwenli'
}
const actions = {
  actionChangeUserName ({ commit }, params) {
    commit('SET_USER_NAME', params || '这是用action改的')
  }
}
const mutations = {
  SET_USER_NAME (state, payload) {
    state.username = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
