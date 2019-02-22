const state = {
  username: 'leexiaoyong'
}
const getters = {
  changename: () => 'suwenli'
}
const actions = {}
const mutations = {
  SET_USER_NAME (state, payload) {
    console.log(payload)
    state.username = payload.changedName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
