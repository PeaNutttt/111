const mongoose = require('mongoose')

// 创建
const schema = new mongoose.Schema({
    userName:{type: String,default:"匿名用户"},
    speak:{type:String,default:"你好"},
    createTime:{type:Date,default: Date.now}

})
// 导出
module.exports = mongoose.model('Comment',schema)
