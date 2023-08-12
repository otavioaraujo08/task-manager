require('./database/connect.js');

const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');

// Middleware
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, () => {
    console.log('\x1b[31m' + '\n-------------------------------');
    console.log('\x1b[34m' + `\nServer is running on port ${port}`);
    console.log('\x1b[31m' + '\n-------------------------------');
});
