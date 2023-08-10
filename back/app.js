const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, () => {
    console.log('\n-------------------------------');
    console.log(`\nServer is running on port ${port}`);
    console.log('\n-------------------------------');
});
