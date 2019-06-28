<template>
  <div id="app">
    <div id="view-box" ref="viewBox">
      <div class="router-view">
        <!-- <keep-alive exclude="market-detail" include="write-article"> -->
          <router-view>
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link>
          </router-view>
        <!-- </keep-alive> -->
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~normalize.css/normalize.css';
@import './assets/css/reset.less';
@import './assets/css/common.less';
// @import './assets/iconfont/iconfont.css';

html {
  -webkit-text-size-adjust: none;
  -webkit-overflow-scrolling: touch;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  #view-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    > .router-view {
      position: relative;
      margin-bottom: -1px;
      width: 100%;
      height: 100%;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
      > div {
        position: absolute;
        width: 100%;
        min-height: 100%;
        top: 0;
      }
    }
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
