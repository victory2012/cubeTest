<template>
  <div id="app">
    <div id="nav" @touchstart='touchstart' @touchend='touchend'>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
      <div class="tab-warpper">
        <router-link :to="{name: 'home'}">首页</router-link>
        <router-link :to="{name: 'battery'}">电池</router-link>
        <router-link :to="{name: 'device'}">设备</router-link>
        <router-link :to="{name: 'me'}">我的</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      touchPointer: 0,
      routerPath: ['home', 'battery', 'device', 'me'],
      routerIndex: 0
    }
  },
  mounted() {
    this.routerIndex = this.routerPath.indexOf(this.$route.name)
  },
  methods: {
    touchstart(e) {
      this.touchPointer = e.touches[0].pageX;
    },
    touchend(e) {
      const touchendPointer = e.changedTouches[0].pageX;
      if (touchendPointer - this.touchPointer < -20) {
        this.routerIndex++
        if (this.routerIndex === this.routerPath.length) {
          this.routerIndex = this.routerPath.length - 1
        }
        this.$router.push(this.routerPath[this.routerIndex])
      }
      if (touchendPointer - this.touchPointer > 20) {
        this.routerIndex--
        if (this.routerIndex < 0) {
          this.routerIndex = 0;
        }
        this.$router.push(this.routerPath[this.routerIndex])
      }
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

#nav {
  padding: 0 10px;
  height: 100vh;
  background: #ffffff;

  .tab-warpper {
    border: 1px solid #e5e5e5;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45px;
    line-height: 45px;
    display: flex;
    background: #ffffff;

    a {
      font-weight: bold;
      flex: 1;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
