<template>
  <el-menu :default-openeds="['1', '3']">
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>Usuários</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">Root</el-menu-item>
        <el-menu-item index="2-2">Admins</el-menu-item>
        <el-menu-item index="2-3">Clientes</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span>Fazenda</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-setting"></i>Administração</template>
      <el-menu-item-group>
        <template slot="title"></template>
        <el-menu-item index="4-1">Assinatura</el-menu-item>
        <el-menu-item index="4-2">Auditoria</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
    handleOpen () {
      console.log('aki')
    },
    handleClose () {
      console.log('aki')
    }
  }
}
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
</style>
