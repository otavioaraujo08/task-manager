const getAllTasks = (req, res) => {
    res.send('Get all tasks');
};

const getTask = (req, res) => {
    res.send({ id: req.params.id });
};

const createTask = (req, res) => {
    res.json(req.body);
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
