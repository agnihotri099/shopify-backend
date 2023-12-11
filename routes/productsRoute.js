const express=require('express')
const {getProduct,getProducts} =require('../controllers/productsController')

// const { header } = require('express/lib/request')


const router=express.Router()

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST,GET,OPTIONS,PUT,DELETE')
// header('Access-Control-Allow-Headers:Content-Type,X-Auth-Token,Origin,Authorization')

//Get Route for all Products
router.route('/products').get(getProducts)

//Get Route for single Product
router.route('/products/:id').get(getProduct)

module.exports=router;