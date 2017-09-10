const express=require('express');
var router=express.Router();
var data=require("../movie.json");
router.get('*',function (req,res) {
    res.render('error',{data:data});
});
module.exports=router;