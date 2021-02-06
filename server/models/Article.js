const mongoose =require('mongoose')

const schema = new mongoose.Schema({
    title:{type:String},
    reading:{type:Number,default:1},
    cover:{type:String,default:"./image/js.png"},
    author:{type:String,default:"yancaiyang"},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}], 
    tags:[{type:mongoose.SchemaTypes.ObjectId,ref:'Tag'}], 
    // categoriesName:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    // tagsName:[{type:mongoose.SchemaTypes.ObjectId,ref:'Label'}],
    body:{type:String},
    comments:[{type:mongoose.SchemaTypes.ObjectId,ref:'Comment'}]
    
},{
   timestamps:true     
})

module.exports = mongoose.model('Article',schema)