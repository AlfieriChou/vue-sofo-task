interface State {
  info: Object
  auth: Object
}

let state: State = {
  info: {
    data: {}
  },
  auth: {}
}

const mutations = {}

const getters = {
  info: (state: State) => state.info
}

export const userStore = {
  state,
  mutations,
  actions: {},
  getters
}
