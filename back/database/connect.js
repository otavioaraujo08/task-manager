const mongoose = require('mongoose');

const connectDB = (url) => {
    try {
        mongoose.connect(url);

        console.log('\x1b[34m' + '\n-------------------------------');
        console.log('\x1b[31m' + `\nConnected to MongoDB`);
        console.log('\x1b[34m' + '\n-------------------------------');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
