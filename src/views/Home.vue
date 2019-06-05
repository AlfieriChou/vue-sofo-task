<template>
  <div id="home">
    <Headers />
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Headers from '@/components/Headers.vue'
@Component({
  components: {
    Headers
  }
})
export default class Home extends Vue {}
</script>

<style lang="less">
#home {
  height: 100%;
}
#main {
  height: calc(~'100% - 80px');
}
</style>
