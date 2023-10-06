const jwt = require('jsonwebtoken');

const secret = 'asdkfjasidn@#$#%sadklj';
const token = jwt.sign({
    id: 'uj',
    isAdmin: false,
    }, 
    secret,
    { expiresIn: 2 }
);

console.log(token);

const edited = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVqIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5NjU2MTAwNH0.-qzSAv7Jf6T4K1CoeHv8MFd61qRrXbjTliZ_OVZRdAU';

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded);
    });
}, 3000);
