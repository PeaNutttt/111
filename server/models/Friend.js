const mongoose = require('mongoose')

// 创建
const schema = new mongoose.Schema({
    name:{type: String},
    link:{type:String}
})
// 导出
module.exports = mongoose.model('Friend',schema)