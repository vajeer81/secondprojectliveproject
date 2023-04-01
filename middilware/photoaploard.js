const multer = require("multer")
const express = require('express')
const app = express()
const path = require("path")
app.use("/uploard",express.static("../img"))
app.use(express.urlencoded({extended:false}))
const storege = multer.diskStorage({
    destination:"../img",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname} ${path.extname(file.originalname)}`)
    }
    
})

const uploard = multer({
    storage:storege
})


module.exports = uploard