const mongoose = require('mongoose');


const acticleSchema = new mongoose.Schema({

title : {
type:String , 
required :true ,

}, 
descrption :{

    type:String, 

}, 
markdown : {

type:String ,
required : true 
},

createdAt : {

    type:String , 
    default : Date.now
}
})


module.exports = mongoose.model('Article' , acticleSchema)