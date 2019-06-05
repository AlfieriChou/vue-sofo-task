<template>
  <header class="header">
    <el-col :span="20" class="left">
      <nav class="logo"></nav>
      <nav
        v-for="o in navs"
        :key="o.name"
        @click="handleNav(o)"
        :class="{ active: o.active }"
      >
        {{ o.name }}
      </nav>
    </el-col>
    <el-col :span="4" class="right">
      <i class="el-icon-switch-button logout" @click="logout"></i>
    </el-col>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RawLocation } from 'vue-router'

interface Nav {
  name: string
  active: boolean
  href: RawLocation
}

@Component
export default class Headers extends Vue {
  private navs: Nav[] = [
    { name: '信息查询', active: true, href: { name: 'info' } },
    { name: '订单管理', active: false, href: { name: 'order' } },
    { name: '账号管理', active: false, href: { name: 'user' } }
  ]

  public handleNav(obj: Nav): void {
    this.navs.forEach((o: Nav) => {
      if (o === obj) {
        o.active = true
      } else {
        o.active = false
      }
    })
    this.$router.push(obj.href)
  }

  public logout() {
    this.$router.replace('/login')
  }
}
</script>

<style lang="less" scoped>
@h: 80px;
@baseColor: #509de3;
.header {
  height: @h;
  border-bottom: solid 1px #dcdfe6;
  .left {
    text-align: left;
    height: 100%;
  }
  .right {
    height: 100%;
    text-align: right;
    line-height: @h;
  }
  .logout {
    margin-right: 1em;
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
      color: @baseColor;
    }
  }
  nav {
    display: inline-block;
    cursor: pointer;
    padding: 0 1em;
    height: 100%;
    line-height: @h;
    vertical-align: middle;
    color: @baseColor;
    opacity: 0.5;
    position: relative;
    &.active,
    &:hover {
      opacity: 1;
    }
    &.active {
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: calc(~'100% - 2em');
        background: @baseColor;
        bottom: 0;
        left: 1em;
      }
    }
  }
}
</style>
