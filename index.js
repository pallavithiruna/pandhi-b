const express=require('express')
const APP_SERVER=require('./app')
const NODE_SERVER=express()

const PORT=4000;

// register app server

NODE_SERVER.use("/",APP_SERVER)


// start node_server with port=4000

NODE_SERVER.listen(PORT,"localhost",()=>{
    console.log("APP STARTED")
})