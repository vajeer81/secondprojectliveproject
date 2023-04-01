const express = require('express')
// const app = express()
const router = express.Router()
const vajeer = require("../model/studentmodel")
const mongoose = require('mongoose')
router.use(express.json())
router.get('/', async (req, res) => {
    let data = await vajeer.find()
    // res.status(200).json({
    //     message:'student get is runing'
    // })
    console.log(data)
    res.send(data)
})


router.post('/', async (req, res) => {
// const{name,email,phone,address} = req.body

    const data =await vajeer.create({
        // _id:mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    })
    console.log(req.body);
    
    res.status(201).json(data)
})

router.delete("/:_id",async(req,res)=>{
   let data = await vajeer.remove({_id:req.params._id})
   res.send(data)

})

module.exports = router