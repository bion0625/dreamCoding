import MongoDB from "mongodb";
import { getUsers } from "../db/database.js";

const ObjectId = MongoDB.ObjectId;
export const findById = async (id) => {
    console.log(id);
    return getUsers().findOne({_id: new ObjectId(id)})
        .then(mapOptionalUser);
};

export const createUser = async (user) => {
    return getUsers().insertOne(user)
        .then(data => data.insertedId.toString())
};

export const findByUsername = async (username) => {
    return getUsers().findOne({username}).then(mapOptionalUser);
};

const mapOptionalUser = (user) => {
    return user ? {...user, id:user._id} : user;
}