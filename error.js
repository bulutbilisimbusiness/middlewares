"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 * npm i express-async-handler
*/

const express = require("express"); // Assing expressFramework to express variable.
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */



/* app.get('/user/:id', (req, res) => {
    try{
        const id = req.params.id ?? 0
        if (isNaN(id)) {
            throw new Error('ID is Not A Number', 
            { cause: 'params.id='+id })
        } else {
            res.send({ 
                error:false,
                id: id })
        }

    }catch(error){
        res.send({error:true,
            message:error.message,
        cause:error.cause})

    }
       
}) */
app.get('/user/:id', (req, res) => {
 
        const id = req.params.id ?? 0
        if (isNaN(id)) {
            res.statusCode=402
            throw new Error('ID is Not A Number', 
            { cause: 'params.id='+id })
        } else {
            res.send({ 
                error:false,
                id: id })
        }
})

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ?? 500
    res.status(statusCode).send({
             error : true ,
            message:err.message,
            cause:err.cause,
            //stack:err.stack
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));