<template>
<div class="about">
        <h1>{{id ? '编辑' : '新建'}}文章</h1>
       <el-form tag-width="120px" @submit.native.prevent="save">
           <el-form-item label="文章分类">
               <el-select v-model="model.categories" multiple>
                   <el-option v-for= "item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
               </el-select>
               <!-- <el-input v-model="model.name"></el-input> -->
           </el-form-item>
           <el-form-item label="文章标签">
               <el-select v-model="model.tags" multiple filterable>
                   <el-option v-for= "item in tags" :key="item._id" :label="item.name" :value="item._id"></el-option>
               </el-select>
               <!-- <el-input v-model="model.name"></el-input> -->
           </el-form-item>
           <el-form-item label="标题">
               <el-input v-model="model.title"></el-input>
           </el-form-item>
           <!-- <el-form-item label="评论">
               <el-select v-model="model.comments" multiple filterable>
                   <el-option v-for= "item in comments" :key="item._id" :label="item.speak" :value="item._id"></el-option>
               </el-select>
           </el-form-item> -->
           <el-form-item label="详情">
               <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
           </el-form-item>
           <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
           </el-form-item>
       </el-form>
    </div>
</template>

<script>
//富文本编辑器
import { VueEditor } from "vue2-editor";
import 'highlight.js/styles/xcode.css';
export default {
  props:{
    id:{}
  },
  components: {
    VueEditor
  },
  data(){
    return{
      model:{},
      categories:[],
      tags:[],
      comments:[]
    }
  },
  methods:{
    async save(){
        let res;
        if(this.id){
            res = await this.$http.put(`rest/articles/${this.id}`,this.model)
            console.log(res)
        } else {
            res = await this.$http.post('rest/articles',this.model)
            console.log(res)
        }
        this.$router.push('/articles/list')
        this.$message({
        type:'success',
        message:'保存成功' 
        })
        },
        async fetch(){
           const res = await this.$http.get(`rest/articles/${this.id}`)
           this.model = res.data;
        },
        async fetchCategories(){
           const res = await this.$http.get('rest/categories')
           this.categories = res.data;
        },
        async fetchTags(){
           const res = await this.$http.get('rest/tags')
           this.tags = res.data;
          //  console.log(this.tags)
        },
        // async fetchComments(){
        //    const res = await this.$http.get('rest/comments')
        //    this.comments = res.data;
        //   //  console.log(this.tags)
        // },

        //文件、编辑器、光标位置，更新函数
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            //原生js
            const formData = new FormData();
            formData.append("file", file);
            const res= await this.$http.post('upload',formData)
            Editor.insertEmbed(cursorLocation, "image",res.data.url);
            resetUploader();
        }, 
  },
  created(){
    this.fetchTags()
    this.fetchCategories()
    // this.fetchComments()
    this.id && this.fetch()
  }
};
</script>

<style></style>
