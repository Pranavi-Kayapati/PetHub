const mongoose=require("mongoose")

const petSchema=mongoose.Schema({
name:String,
age:String,
breed:String,
image:String,
gender:String,
size:String
})

const petModel=mongoose.model("pet",petSchema);

module.exports={
    petModel
}