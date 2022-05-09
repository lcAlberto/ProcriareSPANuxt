<template>
  <div class="flex flex-col">
    <i class="mdi mdi-account-circle"></i>
    <i class="mdi mdi-car-side"></i>
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
