"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions has must be minimum three parameters. 
//? Last parameter for next().

/* app.get('/',(req,res,next)=>{
    req.customData='Custom Data'
    res.customDataWithResponse='Custom data with response'
    next()
    res.send({
        message:'first middleware running'
    })
})
app.get('/',(req,res)=>{
    res.send({
        customData:[
            req.customData,
            res.customDataInResponse

        ],
        message:'Welcome'
    })
})

 */
/* ------------------------------------------------------- */

/* const middleFunction1 = (req, res, next) => {
    const skip = req.query.skip ?? false;
    req.customData = 'Custom Data With Request';
    res.customDataWithResponse = 'Custom Data With Response';
    
    if (skip) {
        next();
    } else {
        next('route'); // Middleware işlevlerini atlamak istiyorsanız 'route' kullanabilirsiniz.
    }
};

const middleFunction2 = (req, res, next) => {
    res.send({
        customData: [
            req.customData,
            res.customDataWithResponse
        ],
        message: "Here is func2, first next() runned"
    });
};

app.get('/', [middleFunction1, middleFunction2], (req, res) => {
    res.send({
        customData: [
            req.customData,
            res.customDataWithResponse
        ],
        message: 'Welcome to Home'
    });
});

 */



/* const router =express.Router()

router.get('/',(req,res)=>{
    res.send({message:'Home Page'})
})
router.get('/about',(req,res)=>{
    res.send({message:'About Page'})
})
router.get('/user/:userId',(req,res)=>{
    res.send({message:'User Page'})
})

app.use(router)
 */

//const router=require('./routes/')
//app.use(router)
//app.use('/company',require('./routes/'))

app.use('/user', require('./routes/user'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));