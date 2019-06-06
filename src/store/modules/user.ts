interface State {
  user: User
  auth: Auth
}

interface User {
  id: number
  username: string
  password: string
  isLogin: boolean
}

interface Auth {
  token: string
}

let state: State = {
  user: {
    id: 0,
    username: '',
    password: '',
    isLogin: false
  },
  auth: {
    token: ''
  }
}

interface UserData {
  id: number
  username: string
  password: string
  isLogin: boolean
  token: string
}

const mutations = {
  setUserData(state: State, userData: UserData) {
    state.user.id = userData.id
    state.user.username = userData.username
    state.user.password = userData.password
    state.user.isLogin = true
    state.auth.token = userData.token
  }
}

const getters = {
  info: (state: State) => state.user,
  token: (state: State) => state.auth.token
}

export const userStore = {
  state,
  mutations,
  actions: {},
  getters
}
