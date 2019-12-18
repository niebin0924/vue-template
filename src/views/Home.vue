<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/img/logo.png" width="60px" height="60px" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeService from 'SERVICE/homeService'

export default {
  name: 'home',
  components: {},
  data: () => ({
    mobile: '13530744930'
  }),
  created() {
    // this.login()
    // this.areaList()
    this.getMember()
  },
  methods: {
    async login() {
      const res = await HomeService.login('', this.mobile)
      console.log(res)
    },
    async areaList() {
      const res = await HomeService.areaList()
      console.log(res)
    },
    async getMember() {
      const res = await HomeService.getMember('35')
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>

</style>

