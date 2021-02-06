<template>
  <div class="box">
    <el-row class="top_bar">
      <el-col :span="8"><div class="logo">个人博客</div></el-col>
      <el-col :span="10">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
          <!-- <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item> -->
          <el-menu-item index="/article">首页</el-menu-item>
          <el-menu-item index="/category">分类</el-menu-item>
          <el-menu-item index="/tag">标签</el-menu-item>
          <el-menu-item index="/filing">归档</el-menu-item>
          <el-menu-item index="/message">留言板</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6"><el-input placeholder="请输入内容" v-model="input" suffix-icon="el-icon-search" class="search"></el-input></el-col>
    </el-row>
  
  </div>
</template>

<script>
export default{
  data() {
      return {
        activeIndex: '1',
        input: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="scss">
.top_bar{
  width: 1200px;
  margin: 0 auto;
}
.logo{
  height: 60px;
  line-height: 60px;
}
.el-menu-demo{
  display: flex;
  height: 59px;
}
.el-menu.el-menu--horizontal {
    border-bottom: none;
}
.search{
  width: 220px;
  line-height: 60px;

}
</style>