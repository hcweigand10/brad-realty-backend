const router = require('express').Router();
const { User } = require('../../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.post("/login", async (req, res) => {
    console.log(`login attempt from: `, req.body)
    const dbUser = await User.findOne({
        where: {
            email:req.body.email
        }
    })
    try {
        if(!dbUser){
            return res.status(403).json({err:"invalid email"})
        } 
        if (bcrypt.compareSync(req.body.password, dbUser.password)) {
            const token = jwt.sign(
              {
                email: dbUser.email,
                id: dbUser.id
              },
              // LOCAL:
              // "sharingwood",

              // DELPOYED:
              process.env.JWT_SECRET,
              {
                expiresIn: "2m"
              }
            );
            res.json({ 
                token: token, 
                user: dbUser
            });
          } else {
            res.status(403).json({err: "invalid password"});
          }
    } catch (err) {
        console.log(err)
        res.status(500).json({msg:"an error occured",err})
    } 
})

router.post("/", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(`newUser: ${newUser}`)
        res.status(200).json(newUser);
      } catch (error) {
        console.log(error)
        res.status(500).json(error)
      }
})

router.post("/gettokendata", async (req, res) => {
    const token = req.headers?.authorization?.split(" ").pop()
    jwt.verify(token, "sharingwood", async (err, data) => {
        if (err) {
            console.log(err);
            const data = {
              err: "Token has expired"
            }
            res.status(403).json(data);
          } else {
            const user = await User.findByPk(data.id)
            console.log(user)  
            res.json(user);
          }
    })
})

module.exports = router;
