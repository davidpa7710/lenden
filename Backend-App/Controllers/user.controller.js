const bcrypt = require("bcrypt")
const jwt = require('jwt-simple');
const config = require('../config/db.config.js');
const userModel = require('../Models/user.model.js'); 

const create = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            ...req.body,
            password: hashedPassword,
        };
        const createdUser = await userModel.create(newUser);
        res.status(201).json(createdUser);
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({
                msg: 'Credenciales erróneas',
            });
        }
        const compared = await bcrypt.compare(req.body.password, user.password);
        if (!compared) {
            return res.status(401).json({
                msg: 'Bad credentials',
            });
        }
        user.password = undefined;
        const token = jwt.encode(user, config.token.secret);
        return res.json({
            msg: 'Login satisfactorio',
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: 'Error al hacer login',
        });
    }
};


const getAllUsers = async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(402).json({
            msg: 'No auth',
        });
    }
    try {
        const users = await UserModel.find();
        const usersMap = {};
        users.forEach((user) => {
            usersMap[user._id] = users;
        });
        res.json({
            msg: 'Usuarios encontrados',
            usersMap,
        });
    } catch (error) {
        return returnError('Error al obtener todos los usuarios');
    }
}

module.exports = { create, login, getAllUsers };