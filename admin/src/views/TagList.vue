<template>
  <div>
    <h1>标签列表</h1>
    <el-table :data="items">
      <el-table-column fixed prop="_id" label="ID" width="230"> </el-table-column>
      <el-table-column prop="name" label="分类名称"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="$router.push(`/tags/edit/${scope.row._id}`)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/tags");
      this.items = res.data;
    },
    remove(row){
      this.$confirm(`是否删除"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( async () => {
          const res = await this.$http.delete(`rest/tags/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()  
        });
      }
  },
  created() {
    this.fetch();
  }
};
</script>
