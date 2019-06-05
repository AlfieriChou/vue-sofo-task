import axios from 'axios'

interface Login {
  username: string
  password: string
}

interface User {
  id: number
  username: string
  password: string
}

const data: User[] = [
  {
    id: 1,
    username: 'zhou',
    password: '123456'
  }
]

export const login = async (params: Login) => {
  const res = data.find(user => {
    return user.username === params.username
  })
  if (res && res.password === params.password) {
    return res
  } else {
    throw new Error('登录失败')
  }
}
