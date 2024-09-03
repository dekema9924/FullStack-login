
const route = require('express').Router();
const bodyParser = require('body-parser')
const cors = require('cors');
const Users = require('../module/database')



//middlewares
route.use(bodyParser.urlencoded({ extended: true }))
route.use(bodyParser.json());
route.use(cors());



//create account in db
route.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    let checkuser = await Users.find({ email: email })
    try {
        const user = await Users.create({
            name, email, password
        })
        await user.save()
        console.log(user)
        res.json(user)
    } catch (err) {
        if(checkuser) return res.status(400).json({'message': 'username already exist.'})
    }

})





module.exports = route