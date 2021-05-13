<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/bigscreen">大屏</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    height: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    /*
     * none - 关闭字体平滑；展示有锯齿边缘的文字，对低像素的文本比较好
     * antialiased -抗锯齿很好（字体看起来舒服，清晰）
     * subpixel-antialiased （默认值）在大多数非视网膜显示器上，这将会提供最清晰的文字
     */
    -webkit-font-smoothing: antialiased;
    /*
     * auto - 允许浏览器选择字体平滑的优化方式，通常为grayscale
     * grayscale -抗锯齿很好（字体看起来舒服，清晰）
     * inherit -默认值
     * unset
     */
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    // background: rgb(0, 0, 0);
}
</style>
