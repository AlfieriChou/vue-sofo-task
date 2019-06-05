<template>
  <div>
    <h2></h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface User {
  name: string
  alias: string
  phone: string | number
  email: string | null
}
interface User_add extends User {
  password: string
}
interface User_edit extends User {
  createTime: number
  id: number
}

@Component
export default class UserDetail extends Vue {
  @Prop(Number) private id!: number
}
</script>
