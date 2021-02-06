<template>
  <el-row :gutter="12">
    <el-col :span="17">
    <!-- <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>文章</span>
      <el-button style="float: right; padding: 3px 0" type="text">共60篇</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
    </el-card> -->
     <router-view />
    </el-col>
    <el-col :span="7">
      <el-card shadow="hover" class="cotegory-card">
        <div slot="header" class="category">
          <span>分类</span>
          <el-button style="float: right; padding: 3px 0" type="text">more</el-button>
        </div>
        <div v-for="(item,index) in categories" :key="index" class="text item">
          {{item.name}}
        </div>
      </el-card>
      <el-card shadow="hover" class="tag-card">
        <div slot="header" class="category">
          <span>标签</span>
          <el-button style="float: right; padding: 3px 0" type="text">more</el-button>
        </div>
        <div class="tag_body">
          <div v-for="(item,index) in tags" :key="index" class="text item ">
            <el-tag class="tags">{{item.name}}</el-tag> 
          </div>
        </div>
        
      </el-card>
      <el-card shadow="hover">
        <div slot="header" class="category">
          <span>热门推荐</span>
          <el-button style="float: right; padding: 3px 0" type="text">more</el-button>
        </div>
        <div v-for="o in 5" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return{
      categories:null,
      tags:null,

    }
  },
  methods:{
    async fetchCategory(){
      const res = await this.$http.get('categories')
      this.categories =  res.data;
      console.log(this.categories)
    },
    async fetchTag(){
      const res = await this.$http.get('tags')
      this.tags =  res.data;
      console.log(this.tags)
    },
  },
  created(){
    this.fetchCategory()
    this.fetchTag()
  }
}
</script>

<style lang="scss">
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
.el-card__header{
  border-bottom: 2px solid #409eff;
}
  .clearfix:after {
    clear: both
  }
  .cotegory-card{
    margin-bottom: 10px;
  }
   .tag-card{
    margin-bottom: 10px;
  }
.tag_body{
  display: flex;
  flex-wrap:wrap;
  .tags{
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>