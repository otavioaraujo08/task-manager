const getAllTasks = (req, res) => {
    res.send('Get all tasks');
};

const getTask = (req, res) => {
    res.json('Get task');
};

const createTask = (req, res) => {
    res.json('Create task');
};

const updateTask = (req, res) => {
    res.json('Edit task');
};

const deleteTask = (req, res) => {
    res.json('Delete task');
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
