<template>
  <div class="bg-gray-300 w-full" style="height: 100vh">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <button
          class="btn-default"
          @click="drawer = !drawer">
          sadad
        </button>
        <a
            href="#"
            class="flex items-center"
        >
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center md:order-2">
          <el-dropdown>
            <span class="el-dropdown-link flex flex-row items-center">
              <span class="mx-3">
                Lucas Alberto
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <img
                src="https://thiscatdoesnotexist.com/"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </span>
            <el-dropdown-menu slot="dropdown" class="w-40">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- Dropdown menu -->
          <div
              class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
          >
            <div class="py-3 px-4">
              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul
                class="py-1"
                aria-labelledby="dropdown"
            >
              <li>
                <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Dashboard</a>
              </li>
              <li>
                <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Settings</a>
              </li>
              <li>
                <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Earnings</a>
              </li>
              <li>
                <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a>
              </li>
            </ul>
          </div>
          <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
              ></path>
            </svg>
            jkfhdjkhfjk
          </button>
        </div>
        <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
              >Home</a>
            </li>
            <li>
              <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</a>
            </li>
            <li>
              <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Services</a>
            </li>
            <li>
              <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Pricing</a>
            </li>
            <li>
              <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      direction="ltr"
      size="15%"
      modal
      custom-class="bg-indigo-100">
      <span>Hi, there!</span>
    </el-drawer>
    <div class="container mx-auto mt-6 rounded-md px-4 py-5 bg-gray-100" style="height: 80vh">
      <nuxt/>
    </div>
    <footer class="bg-indigo-500 mt-5 h-40 p-5 flex items-start justify-center">
      © Lucas Alberto Matoso
    </footer>
  </div>
</template>

<script>
export default {
  name: 'default',
  template: 'olaaaaa',
  data: () => ({
    drawer: false
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

</style>
