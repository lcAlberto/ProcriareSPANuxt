<template>
  <el-container
    class="bg-gray-300"
    style="height: 100vh; border: 1px solid #eee"
  >
    <navbar/>
    <el-container>
      <el-aside width="30vh" style="background-color: rgb(238, 241, 246)">
        <sidebar/>
      </el-aside>
      <el-main class="p-5">
        <div class="h-full bg-gray-100 rounded-lg">
          <div
            class="rounded-t-lg p-5 bg-indigo-500 h-1/4 flex flex-row items-end justify-between">
            <!--<div class="img-background rounded-t-lg p-5 h-1/4 absolute"></div>-->
            <div class="">
              <h1 class="text-gray-100">Título</h1>
              <p class="text-gray-100">Subtítulo</p>
            </div>
            <el-breadcrumb
              separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">
                <span class="text-gray-100">
                  homepage
                </span>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <span class="text-gray-100">promotion management</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <span class="text-gray-100">promotion management</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <span class="text-gray-100">promotion management</span>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="h-full p-5">
            <nuxt/>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-footer class="bg-indigo-500 mt-5 h-40 p-5 flex items-start justify-center">
      © Lucas Alberto Matoso
    </el-footer>
  </el-container>
</template>

<script>
import Navbar from '../components/layout/navbar'
import Sidebar from '../components/layout/sidebar'

export default {
  name: 'default',
  components: { Sidebar, Navbar },
  template: 'olaaaaa',
  data: () => ({
    //
  }),
  methods: {
    handleClose (done) {
      console.log(done)
    }
    //   this.$confirm('Are you sure you want to close this?')
    //     .then(() => {
    //       done()
    //     })
    //     .catch(() => {})
    // }
  }
}
</script>

<style scoped>
  .img-background {
    background-image: url('https://images.pexels.com/photos/422202/pexels-photo-422202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  }
  .h10 {
    height: 10vh !important;
  }
</style>
