import * as userRepository from '../data/auth.js'
import { db } from '../db/database.js';

const SELECT_JOIN = `
    SELECT 
    tw.id, tw.text, tw.created_at as createdAt, tw.user_id as userId, us.username, us.name, us.url 
    FROM tweets as tw 
    JOIN users as us ON us.id = tw.user_id
`;
const ORDER_DESC = `ORDER BY tw.created_at desc`;

export async function getAll(){
    return db
    .execute(`${SELECT_JOIN} ${ORDER_DESC}`)
    .then(result => result[0]);
}

export async function getAllByUsername(username){
    return db
    .execute(`${SELECT_JOIN} WHERE us.username = ? ${ORDER_DESC}`, [username])
    .then(result => result[0]);
}

export async function getById(id){
    return db
    .execute(`${SELECT_JOIN} WHERE tw.id = ?`, [id])
    .then(result => result[0][0]);
}

export async function create(text, userId){
    return db.execute(
        'INSERT INTO tweets (text, created_at, user_id) VALUES (?,?,?)',
        [text, new Date(), userId]
    ).then(result => getById(result[0].insertId));
}

export async function update(id, text){
    return db
        .execute(`UPDATE tweets SET text = ? WHERE id = ?`, [text, id])
        .then(() => getById(id));
}

export async function remove(id){
    db.execute(`DELETE FROM tweets WHERE id = ?`, [id]);
}