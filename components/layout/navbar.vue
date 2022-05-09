<template>
  <el-header class="flex flex-row items-center justify-between" style="text-align: right; font-size: 12px">
    <div class="flex">
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Logo</el-menu-item>
      </el-menu>
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Dashboard</el-menu-item>
      </el-menu>
    </div>
    <el-dropdown trigger="click" >
      <div class="flex flex-row items-center">
        <span class="ml-2">
          Olá Lucas Alberto !
        </span>
        <img
          src="https://this-person-does-not-exist.com/img/avatar-062ad59c53317ec475e28c37e15e5959.jpg"
          alt=""
          class="inline object-cover w-9 h-9 mx-2 rounded-full">
      </div>
      <el-dropdown-menu
        slot="dropdown"
        class="w-90 md:w-40">
        <el-dropdown-item>Meu Perfil</el-dropdown-item>
        <el-dropdown-item>Configurações</el-dropdown-item>
        <el-dropdown-item>Assinatura</el-dropdown-item>
        <el-dropdown-item>Sair</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>
<script>
export default {
  name: 'navbar',
  data: () => ({
    drawer: false
  })
}
</script>

<style scoped>
  .el-header {
    background-color: #FFFF;
    color: #333;
    line-height: 60px;
  }
</style>
