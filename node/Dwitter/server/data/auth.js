let users = [];

export const signup = (user) => {
    users.push(user);
    return;
};

export const getByUsername = (username) => {
    return users.find(user => user.username === username);
};