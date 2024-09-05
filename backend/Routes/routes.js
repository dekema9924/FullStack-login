
const route = require('express').Router();
const bodyParser = require('body-parser')
const cors = require('cors');
const Users = require('../module/database')
const bcrypt = require('bcrypt')



//middlewares
route.use(bodyParser.urlencoded({ extended: true }))
route.use(bodyParser.json());
route.use(cors());



//create account in db
route.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    let finduser = await Users.findOne({email})
    if(!finduser){
        bcrypt.hash(password, 10, (async (err, hashpswd)=>{
           let newuser = await Users.create({name, email, password: hashpswd})
           await newuser.save();
           res.status(200).json({message: "account created. "})
           if(err) return res.status(400).json({message: 'account could not be created.Try again !!'})
        }))
    }else{
        return res.status(400).json({message: 'email already in use.'})
    }
})

route.post('/login', async (req, res) => {
    const { email, password } = req.body
    const findUser = await Users.findOne({ email: email }) //check if email exist
    if (findUser){
        bcrypt.compare(password, findUser.password, ((err, match) => {
            if (match) {
                res.status(200).json({
                    success: true,
                    message: 'loggin in...'
                })
            }else{
                res.status(400).json({password: 'invalid password' })
            }
            if(err){
                res.json(err)
            }
           
        }))
    }else{
        return res.status(400).json({email: 'invalid email' })
    }
   
})





module.exports = route