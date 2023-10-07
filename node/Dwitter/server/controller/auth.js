import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from "../data/auth.js";

const jwtSecretKey = "dsajsdakf!@#!@$SADfjka";
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;

const createJwtToken =id => jwt.sign({id}, jwtSecretKey, {expiresIn: jwtExpiresInDays});

export const signup = async (req, res) => {
    const { username, password, name, email, url} = req.body;
    const found = userRepository.findByUsername(username);
    if(found){
        return res.status(409).json({ message: `${username} already exists` })
    }
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);
    const userId = await userRepository.createUser({
        username, 
        password: hashed, 
        name, 
        email, 
        url,
    });
    const token = createJwtToken(userId);
    res.status(201).json({token, username});
}

export const login = async (req, res) => {
    const { body : {
        username,
        password
    }} = req;
    const user = userRepository.findByUsername(username);
    if(!user){
        return res.status(401).json({message:"Invalid user or password"});
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword){
        return res.status(401).json({message:"Invalid user or password"});
    }
    const token = createJwtToken(user.id);
    res.status(200).json({token, username});
};

export const validation = (req, res) => {
    const {
        headers: { authorization },
        body: { username },
    } = req;
    const user = userRepository.findByUsername(username);
    if(!user){
        return res.json({msg:"not found account"});
    }
    jwt.verify(authorization, jwtSecretKey, (err, decoded) => {
        if(err){
            console.error(err);
            return res.json({msg:"can not access"});
        }
        if(user.name !== decoded.name || user.username !== decoded.username 
            || user.email !== decoded.email || user.url !== decoded.url){
                return res.json({msg:"can not access"});
        }
        res.json({username, token: authorization});
    });
};