const express=require('express');
const router=express.Router();
var fs=require('fs');
var data=require('../movie.json');
router.get('/movie/:id',function (req,res) {
    var id=req.params.id;
    if(id>=1 && id<=data.movies.length){
        id=id-1;
        var name=data.movies[id].title;
        var pic=data.movies[id].image;
        var actor=data.movies[id].actors;
        var poster=data.movies[id].mainImg;
        var main=fs.readFileSync('./avenger.txt','utf8');
        res.render('movietemp',{
            data:data,
            image:pic,
            title:name,
            actors:actor,
            poster:poster,
            text:main
        });
    }
    else
    {
        res.render('error',{data:data});
    }
});

module.exports=router;