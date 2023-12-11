const express = require('express')

var cors = require('cors');
const app=express()
//middleware bodyparser
app.use(express.json())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

const colors=require('colors')
const products=require('./data/products')
const dotenv=require('dotenv')
const {errorHandler}=require('./middlewares/errorMiddleware')

const connectDb=require('./config/config')
dotenv.config();
connectDb();
const productRoutes=require('./routes/productsRoute')
const usersRoutes=require('./routes/UsersRoute')








app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Node Server</h1>')
})

app.use('/api',productRoutes)
app.use('/api/users',usersRoutes)
app.use(errorHandler);



const port=8080;
app.listen(process.env.PORT || port,()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`.inverse );
})