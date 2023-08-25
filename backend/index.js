const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/userRoutes");
const { petRouter } = require("./Routes/petRouter");

const app=express()
app.use(express.json());
app.use("/users",userRouter)
app.use("/pet",petRouter)




app.listen(8080,async()=>{
try {
    await connection;
    console.log("connected to the db");
    console.log("server running at 8080");
} catch (error) {
    console.log(error);
}
})