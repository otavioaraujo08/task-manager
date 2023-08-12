const mongoose = require('mongoose');

const connectionString = 'Do not hard code !';

mongoose
    .connect(connectionString)
    .then(() => {
        console.log('\x1b[34m' + '\n-------------------------------');
        console.log('\x1b[31m' + `\nConnected to MongoDB`);
        console.log('\x1b[34m' + '\n-------------------------------');
    })
    .catch((err) => console.log(err));
