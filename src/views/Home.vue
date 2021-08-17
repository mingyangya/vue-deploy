<template>
  <div class="home">
    <h1>demo演示</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      menuList: [{
        name: '查看大图',
        path: '/zoom-img'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 2em;
}
</style>