<template>
  <div>
      <a class="teste">djhruewyuriew</a>
    <button
      class="rounded-md px2- py-3 bg-red-500"
      @click="toast()">Teste</button>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  methods: {
    toast () {
      this.$snotify.success('Example body content')
    }
  }
}
</script>
