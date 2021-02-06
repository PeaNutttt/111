// const { default: router } = require("../../../admin/src/router"
module.exports = app =>{
    const express = require("express")
    const router = express.Router()
    const Category =require('../../models/Category')

    // const modelNmae = require('inflection').classify(req.params.resource)
    // const Model = require(`../../models/${modelNmae}`)


    router.post('/', async (req,res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    //编辑接口
    router.put('/:id', async (req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    //删除接口
    router.delete('/:id', async (req,res)=>{
        await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })
    //请求数据
    router.get('/', async (req,res)=>{
        const queryOptions = {}
        if(req.Model.modelName==='Article'){
          queryOptions.populate='categories tags'
        }
        const items = await req.Model.find().sort({createdAt:-1}).setOptions(queryOptions).limit(10)
        res.send(items)
    })
    //通过req.params.id去找
    router.get('/:id', async (req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    const resourceMiddeware = require('../../middleware/resource')
    app.use('/admin/api/rest/:resource',resourceMiddeware(), router)
}