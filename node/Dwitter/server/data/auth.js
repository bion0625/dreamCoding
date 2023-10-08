//sample password : 12345
let users = [
    {
        id: '1',
        username: 'sample',
        password: '$2b$12$dIbhY45XjN2WUrJ1LaR2Z.2oJFauFzdz5SHD/40uGe1RRJMbM3p.S',
        name: 'euijung',
        email: 'euijung@gmail.com',
        url: 'http://test.com',
    },
    {
        id: '2',
        username: 'sampleb',
        password: '$2b$12$dIbhY45XjN2WUrJ1LaR2Z.2oJFauFzdz5SHD/40uGe1RRJMbM3p.S',
        name: 'bob',
        email: 'euijung@gmail.com',
        url: 'http://test.com',
    },
];

export const findById = async (id) => {
    return users.find(user => user.id === id);
}

export const createUser = async (user) => {
    const created = {...user, id:Date.now().toString()};
    users.push(created);
    return created.id;
};

export const findByUsername = (username) => {
    return users.find(user => user.username === username);
};