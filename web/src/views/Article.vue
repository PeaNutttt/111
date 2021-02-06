<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>文章</span>
      <el-button style="float: right; padding: 3px 0" type="text">共{{pageC}}篇</el-button>
    </div>
      <!-- $router.push(`/article/details/${this.$route.params}`) -->
      <div >
      <el-card shadow="hover" v-for="(item,index) in model" :key="index" class="list_card" @click.native="$router.push(`/article/details/${item._id}`)">
        <el-row>
          <el-col :span="18">
            <div class="artilce_title">{{item.title}}</div>
            <div v-html="item.body" class="list_body"></div>
            <el-divider></el-divider>
            <div>
              <el-tag size="mini" v-for="(item,index) in item.tags" :key="index" class="tags">{{item.name}}</el-tag>
            </div>
          </el-col>
          <el-col :span="6">
            <img src="../assets/logo.png" alt="" class="cover">
          </el-col>
        </el-row>
      </el-card>
      </div>
      <el-pagination
       @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[2]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageC">
    </el-pagination>
  </el-card>
</template>

<script>

export default {
  props:{
    id:{}
  },
  data(){
    return{
      model:null,
      categories:null,
      tags:null,
      pageC:1,//总条数
      currentPage4: 1 //显示的页数
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get('articles')
      this.model =  res.data;
    },
    async fetchCategory(){
      const res = await this.$http.get('categories')
      this.categories =  res.data;
      console.log(this.categories)
    },
    async fetchCount(){
      const res =await this.$http.get('articlescount')
      this.pageC = res.data.length;
    },
      handleSizeChange(val) {
        this.PageSize=val;
      console.log(`每页 ${val} 条`);
    },
    async handleCurrentChange(val) {
      const res1 = await this.$http.get('articles',{
        params:{
          page:val
        }
      })
        // this.fetch()
      this.model=res1.data;
        // console.log(res1)
        console.log(`当前页: ${val}`);
      },
      // goDetails(id){
      //   $router.push(`/article/details/${this.id}`)
      // }
  },
  created(){
    this.fetch()
    this.fetchCategory()
    this.fetchCount()
    // console.log(this.$route.params.id)
    // console.log(this.id)
  }

}
</script>

<style>
.list_card{
  height: 200px;
  margin-bottom: 20px;
}
.list_body{
  height: 60px;
  overflow: hidden;
  font-size: 12px;
}
.tags{
  margin-right: 3px;
}
.artilce_title{
  font-size: 18px;
  /* text-align: center; */
}
.cover{
  width: 160px;
  height: 160px;
  padding: 5px;
}
</style>
