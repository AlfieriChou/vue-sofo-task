interface Children {
  path: string
  name: string
  component: () => any
}

export interface Route {
  path: string
  name: string
  component: () => any
  children?: Children[]
}
