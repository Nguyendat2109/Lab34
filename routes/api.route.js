var express=require('express');
var router=express.Router();

var Cars=require('../models/cars');
router.post('/addCars',async (req,res,next)=>{
    try {
        var data=req.body;
        var newCars=new Cars({
            name:data.name,
            brand:data.brand,
            price:data.price,
        });
        var result=await newCars.save();
        if(result){
            res.json({
                'status':200,
                'mes':"add success",
                'data':result
            })
        }else{
            res.json({
                'status':400,
                'mes':"add unSuccess",
                'data':[]
            })
        }
    } catch (error) {
        console.log(error);
    }
});
router.get('/getListCar',async(req,res,next)=>{
    try {
        var data=await Cars.find().populate("_id");
        res.json({ 
        'status':200,
        'mes':"list success",
        'data':data

        })
    } catch (error) {
        console.log(error);
    }
})
module.exports=router;