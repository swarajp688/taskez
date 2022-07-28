// create task controller add task
async function addTask(req, res) {
  const { title, description, status } = req.body;
  const task = await Task.create({
    title,
    description,
    status,
  });
  if (task) {
    return res.status(200).json({
      _id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      createdAt: task.createdAt,
    });
  } else {
    return res.status(400).json({
      status: "error",
      message: "Invalid task data",
    });
  }
}
// create task controller get task
async function getTask(req, res) {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (task) {
    return res.status(200).json({
      _id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      createdAt: task.createdAt,
    });
  } else {
    return res.status(400).json({
      status: "error",
      message: "Invalid task id",
    });
  }
}
// edit task controller
async function editTask(req, res) {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = await Task.findByIdAndUpdate(id, {
    title,
    description,
    status,
  });
  if (task) {
    return res.status(200).json({
      _id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      createdAt: task.createdAt,
    });
  } else {
    return res.status(400).json({
      status: "error",
      message: "Invalid task id",
    });
  }
}
// delete task controller
async function deleteTask(req, res) {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (task) {
        return res.status(200).json({
        _id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        createdAt: task.createdAt,
        });
    } else {
        return res.status(400).json({
        status: "error",
        message: "Invalid task id",
        });
    }
    }
    // change task status controller
    async function changeTaskStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        const task = await Task.findByIdAndUpdate(id, {
        status,
        });
        if (task) {
            return res.status(200).json({
            _id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            createdAt: task.createdAt,
            });
        } else {
            return res.status(400).json({
            status: "error",
            message: "Invalid task id",
            });
        }
        }

module.exports= { addTask, getTask, editTask, deleteTask, changeTaskStatus };