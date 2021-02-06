module.exports = app =>{
    const router =require("express").Router()
    const mongoose = require("mongoose")
    // var bodyParser = require('body-parser');
    // app.use(bodyParser.urlencoded({ extended: false }))
    // var jsonParser = bodyParser.json()
    // mongoose();
    const Article =require('../../models/Article')
    const Category =require('../../models/Category')
    const Tag =require('../../models/Tag')
    const Comment =require('../../models/Comment')


    //路由
    //获取文章
    router.get('/articlescount',async (req,res)=>{
        // let page = req.query.page;
        // console.log(page)
        const data = await Article.find();
        // const len=await Article.count()
        // console.log(len)
        res.send(data)
    })
    router.get('/articles',async (req,res)=>{
        let page = req.query.page;
        // console.log(page)
        const data = await Article.find().sort({createdAt:-1}).populate('categories tags comments').limit(2).skip((page-1)*2);  
        res.send(data) 
    })

    router.get('/articlesC',async (req,res)=>{
        // console.log(req.body)
        let qid =req.query.qid
        // console.log(qid)
        // .where({categories:{$elemMatch: { _id: qid }}})
        const data = await Article.find().where({categories:{$all: { _id: qid }}}).populate('categories tags')
        res.send(data)
    })
    // 获取文章详情
    router.get('/articles/:id',async (req,res)=>{
        const data = await Article.findById(req.params.id).populate('categories tags').lean()
        res.send(data)
    })
    //获取分类
    router.get('/categories',async (req,res)=>{
        const data = await Category.find()
        res.send(data)
    })

    // router.get('/categories2',async(req,res)=>{
    //     let qid = req.query.qid;
    //     console.log(pid);
    //     const data = await Category.findById({_id:qid}).populate( 'Article')
    // })

    router.get('/tags',async (req,res)=>{
        const data = await Tag.find()
        res.send(data)
    })

    app.use('/web/api',router)
}