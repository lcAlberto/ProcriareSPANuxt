<template>
  <div class="flex flex-col">
    <vue-snotify />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    toast () {
      this.$snotify.success('Example body content')
    }
  }
}
</script>
