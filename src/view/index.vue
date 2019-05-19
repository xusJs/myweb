<template>
  <div class="page">
    首页
  </div>
</template>

<script>

  import {test} from "../api"

  export default {
    name: "index",
    data() {
      return {}
    },
    methods: {
      test() {
        test().then(res => {
          console.log(res)
        })
      }
    },
    created() {
      this.test()
    }
  }
</script>

<style scoped>

</style>
