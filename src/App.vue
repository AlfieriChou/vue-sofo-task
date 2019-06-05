<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,
body,
ul {
  height: 100%;
  margin: 0;
  padding: 0;
}
.clear {
  clear: both;
  height: 0px;
  line-height: 0px;
  font-size: 0px;
}
html {
  overflow-x: hidden;
}
img {
  vertical-align: middle;
}
.lf {
  float: left;
}
.rg {
  float: right;
}
a {
  text-decoration: none;
  transition: color 0.3s linear, background-color 0.3s linear,
    background-image 0.3s linear;
}
</style>
