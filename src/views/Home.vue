<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld from 'COMP/HelloWorld'
import HomeService from 'SERVICE/homeService';

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data:() => ({
    mobile: '13530744930'
  }),
  created() {
    this.login()
    this.cityIndexList()
  },
  methods: {
    async login() {
      const res = await HomeService.login('', this.mobile)
      console.log(res)
    },
    async cityIndexList() {
      const res = await HomeService.cityIndexList()
      console.log(res)
    }

  }
};
</script>
