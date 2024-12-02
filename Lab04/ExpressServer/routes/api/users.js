const express = require('express');
const jwt = require('jsonwebtoken');
const {getUsers, findUser, createUser} = require("../../Database/actions/user");
const router = express.Router();
const verifyToken = require('../../JWT/auth');


router.get('/', verifyToken, async (req, res) => {
    const users = await getUsers()
    console.log(users)
    res.status(users.status).send(users.data);
});

router.post('/login', async (req, res) => {
    const body = req.body;
    if (!body.email || !body.password) {
        return res.status(400).send({
            message: 'Email and password is required'
        })
    }
    const { email, password } = body;
    const foundUser = await findUser(email)
    if (foundUser.user && foundUser.user.password === password) {
        const token = jwt.sign({ userId: foundUser.user.id}, 'your-secret-key', {
            expiresIn: '72h',
        });
        res.status(200).send({
            id: foundUser.user.id,
            token: token,
            tokenExpires: '72h'
        })
    }else {
        return res.status(404).send("Invalid email or password");
    }

})

router.post('/register', async(req, res) => {
    const body = req.body;
    if (!body.email || !body.password) {
        return res.status(400).send({
            message: 'Email and password is required'
        })
    }
    const { email, password } = body;
    const dbResponse = await createUser(email, password)
    return res.status(dbResponse.status).send(dbResponse.user)
})

module.exports = router;