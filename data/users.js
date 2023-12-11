const brcypt=require('bcryptjs');
 const bcrypt = require('bcryptjs/dist/bcrypt');
const Users=[
    {name:'admin',email:'admin@admin.com',password:bcrypt.hashSync('123456',10),isAdmin:true},
    {
        name:'Rishabh',email:'agnihotri099@gmail.com',password:bcrypt.hashSync('123456',10)}, 
        {name:'user',email:'user@user.com',password:bcrypt.hashSync('123456',10)}
]


module.exports=Users;