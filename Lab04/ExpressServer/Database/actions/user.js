const userModel = require("../models/user.model").user.userClass

const createUser = async (email, password) => {
    const {status, data} = await getUsers()
    if (data) {
        const emailExisting = data.find(e => e.email === email) !== undefined
        if (emailExisting) {
            return {
                status: 400,
                user: {
                    error: "Email already exists, try to log in.",
                }
            }
        }
        const user = await userModel.create({
            email: email,
            password: password
        })
        await user.save()
        return {
            status: 200,
            user: user
        }
    }
}


const findUser = async (email) => {
    const {status, data} = await getUsers()
    if (data) {
        const user = data.find(e => e.email === email)
        return {
            status: 200,
            user: user
        }
    }
    return {
        status: 400,
        user: null
    }
}

const findUserByID = async (uid) => {
    const user =  await userModel.findOne({
        where: {
            id: uid
        }
    })
    if(user) {
        return {
            status: 200,
            user: user
        }
    }
    return {
        status: 400,
        user: null
    }
}


const getUsers = async () => {
    try {
        const users = await userModel.findAll()
        return {
            status: 200,
            data: users
        }
    } catch (e) {
        return {
            status: 500,
            data: null
        }
    }
}

module.exports = {
    getUsers, findUser, createUser, findUserByID
}