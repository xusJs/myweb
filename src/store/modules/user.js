export default {
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null
  },
  mutations: {
    upDataUserInfo(state, value) {
      state.userInfo = value
    }
  }
}
