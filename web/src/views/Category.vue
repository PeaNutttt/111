<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>分类</span>
      <el-button style="float: right; padding: 3px 0" type="text">共5</el-button>
    </div>
    <div><el-tag v-for="(item,index) in categories" :key="index" @click="queryCategory(item._id)"  class="category">{{item.name}}</el-tag></div>
    <el-divider></el-divider>
    <el-card shadow="hover" v-for="(item,index) in articles" :key="index" class="text item">
      标题：{{item.title}}
      内容：{{item.body}}
    </el-card>
    <!-- <div>
      
    </div> -->
    </el-card>
</template>

<script>
export default {
  data(){
    return{
      categories:null,
      articles:null
    }
  },
  methods:{
    async fetchCategory(){
     const res = await this.$http.get('categories')
     this.categories=res.data;
     console.log(res)
    },
    async queryCategory(qid){
      console.log(qid)
      const res= await this.$http.get('articlesC',{
        params:{
          qid:qid
        }
      })
      this.articles=res.data;
      console.log(res)
    }
  },
  created(){
    this.fetchCategory()
  }
}
</script>

<style>
.category{
  margin-right: 5px;
}
</style>