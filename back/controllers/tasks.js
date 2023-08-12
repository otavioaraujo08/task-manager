const Task = require('../models/tasks.js');

const getAllTasks = (req, res) => {
    res.send('Get all tasks');
};

const getTask = (req, res) => {
    res.send({ id: req.params.id });
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const updateTask = (req, res) => {
    res.send('Edit task');
};

const deleteTask = (req, res) => {
    res.send('Delete task');
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
