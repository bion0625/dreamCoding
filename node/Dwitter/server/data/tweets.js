import SQ from 'sequelize';
import { getTweets, sequelize } from '../db/database.js';
import { ObjectId } from 'mongodb';
import { findById } from './auth.js';

export async function getAll(){
    return getTweets().find().toArray();
}

export async function getAllByUsername(username){
    return getTweets().find({username}).toArray();
}

export async function getById(id){
    return getTweets().findOne({_id:new ObjectId(id)});
}

export async function create(text, userId){
    const {username, name, url} = await findById(userId);
    return getTweets().insertOne({text, userId, username, name, url}).then(data => {
        return getById(data.insertedId.toString());
    });
}

export async function update(id, text){
    return getTweets().findOneAndUpdate({_id:new ObjectId(id)}, {$set: {text}})
        .then(data => getById(data._id))
}

export async function remove(id){
    getTweets().deleteOne({_id:new ObjectId(id)});
}