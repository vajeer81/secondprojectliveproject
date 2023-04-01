const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        message:'faclty get is running'
    })
})


router.post('/',(req,res)=>{
    res.status(200).json({
        message:'faclty post is running'
    })
})

module.exports = router