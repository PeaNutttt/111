<template>
  <div class="home">
    <el-container>
      <el-header>
        <top-nav></top-nav>
      </el-header>
      <el-main>
        <div class="main_conent">
          <main-card>
            <!-- <router-view /> -->
          </main-card>
        </div>
      </el-main>
      
      <el-footer>
      <div class="footer-box">
         <el-divider>友情链接</el-divider>
        <!-- <el-divider content-position="left"></el-divider> -->
        <span>个人博客1</span>
        <el-divider direction="vertical"></el-divider>
        <span>个人博客2</span>
        <el-divider direction="vertical"></el-divider>
        <span>个人博客3</span>
        <el-divider direction="vertical"></el-divider>
        <span>个人博客4</span>
      </div>
      <div class="record">浙ICP备2666149号 | Copyright © 2019 - 2022 - www.xxx111.com | By 个人博客</div>
    </el-footer>
    </el-container>
    <!-- Scroll down to see the bottom-right button. -->
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
  
</template>

<script>
// @ is an alias to /src
import TopNav from "@/views/TopNav.vue";
import MainCard from "@/views/MainCard.vue"

export default {
  // name: "TopNav",
  components: {
    TopNav,
    MainCard
  },
  
};
</script>
<style lang="scss">
.el-header{
  border-bottom: 1px solid #eee;
}
.el-footer{
  background-color: #fff;
  color: #333;
  text-align: center;
}
.footer-box{
  width: 1200px;
  margin: 0 auto;
}
.record{
  margin: 20px 0px 20px 0px;
}
.divider {
    background-color: #313131;
}
.el-main{
  background-color: #e9eaed;
  .main_conent{
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
