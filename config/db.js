var mongoose=require('mongoose');
mongoose.set('strictQuery',true);
var local='mongodb://127.0.0.1:27017/Lab34';
var url='mongodb+srv://dat21092003:At6sJcibARcr54fT@lab34.dj5lsik.mongodb.net/?retryWrites=true&w=majority';
var connect=async()=>{
    try {
        await mongoose.connect(url,{});
        console.log("connect success");
    } catch (error) {
        console.log(error);
        console.log("connect fail");
    }
}
module.exports={connect};