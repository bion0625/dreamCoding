import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as authRepository from "../data/auth.js";

const secret = "dsajsdakf!@#!@$SADfjka";

export const signup = async (req, res) => {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    authRepository.signup(user);
    const token = jwt.sign(user, secret, {expiresIn: 1800});
    const username = user.username;
    res.json({token, username});
}

export const login = async (req, res) => {
    const { body : {
        username,
        password
    }} = req;
    const user = authRepository.getByUsername(username);
    if(!user){
        return res.json({msg:"not found account"});
    }
    const loginCheck = await bcrypt.compare(password, user.password);
    if(!loginCheck){
        return res.json({msg:"not match the password"});
    }
    const token = jwt.sign(user, secret, {expiresIn: 1800});
    res.json({token, username});
};

export const validation = (req, res) => {
    const {
        headers: { authorization },
        body: { username },
    } = req;
    const user = authRepository.getByUsername(username);
    if(!user){
        return res.json({msg:"not found account"});
    }
    jwt.verify(authorization, secret, (err, decoded) => {
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