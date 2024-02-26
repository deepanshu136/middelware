const express=require('express');
const app=express();
const morgan=require('morgan');
const AppError=require('./Apperror')
 
//deriving my middleware
app.use(morgan('dev'))

// app.use((req,res,next)=>{
//    req.requestTime=Date.now();
//     console.log(req.method.toUpperCase(),req.path)

//     next()
// })


// app.use('/dogs',(req,res,next)=>{
//     console.log("i love dogs")
//     next();
// })

//detting authentication for only secret routes
const authentication=(req,res,next)=>{
    const {password}=req.query;
    if(password==='ninja'){
        next();
     }
     throw new AppError('password required',401); 
     //else{
    //     res.status(401).send('sorry you need a password');
    // }
    // throw new Error('sorry need to enter a password');
    
    
    }



// app.use((req,res,next)=>{
//     console.log("this is my first middleware");
//     return next();
// })
// app.use((req,res,next)=>{
//     console.log("This is my second middleware");
//     return next();
//     console.log("this is my after second middleware")
// })
// app.use((req,res,next)=>{
//     console.log("This is my third middleware");
//     return next();
// }) 







app.get('/',(req,res)=>{
    //console.log(req.requestTime)
    res.send("IT WORKED")
})

app.get('/error',(req,res)=>{
    chicken.fly()
})

app.get('/dogs',(req,res)=>{
    res.send('WOOF WOOF')
})

app.get('/secret',authentication,(req,res)=>{
    res.send("It is highly classisfied secret that i dring black coffe at late night")
})



//using middelware to show 404 error
app.use((req,res)=>{
    res.status(404).send(' Not Found')
})


//defining custom error handler
app.use((err,req,res,next)=>{
    console.log('******Error******')
    // res.status(500).send("Ih boy it s vulnerable error")
    next(err)
})

app.listen(3000,()=>{
    console.log('App is running on localhost :3000')
})