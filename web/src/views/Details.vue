<template>
  <el-card class="box-card" v-if="data">
    <div v-html="data.title"></div>
    <div v-html="data.body" v-highlight >
      <!-- {{'列表内容 ' + o }} -->
    </div>
    <el-divider></el-divider>
    <div>
      <el-tag size="mini" v-for="(item,index) in data.tags" :key="index" class="tags">{{item.name}}</el-tag>
    </div>
  </el-card>
</template>

<script>
export default {
   props:{
    id:{required:true}
  },
  data(){
    return{
      data:null
    }
  },
  methods:{
    async fetch(){
      const res=await this.$http.get(`articles/${this.id}`)
      this.data =res.data;
      // console.log(res)
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style>
img{
width: 100%;
}
</style>