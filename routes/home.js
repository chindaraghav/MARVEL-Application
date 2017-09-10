const express=require('express');
var router=express.Router();
var movie=require('../movie.json');
router.get('/',function(req,res)
{
    res.render('home',{data:movie});
});


module.exports=router;