const Task = require("./task.model");

exports.createTask = async (data, userId) => {
  return await Task.create({ ...data, userId });
};

exports.getTasks = async (user) => {
  if (user.role === "admin") {
    return await Task.find().populate("userId", "name email");
  }
  return await Task.find({ userId: user._id });
};

exports.getTaskById = async (id, user) => {
  const task = await Task.findById(id);
  if (!task) return null;

  if (user.role !== "admin" && task.userId.toString() !== user._id.toString()) {
    const err = new Error("Forbidden");
    err.statusCode = 403;
    throw err;
  }

  return task;
};

exports.updateTask = async (id, data, user) => {
  const task = await Task.findById(id);
  if (!task) return null;

  if (user.role !== "admin" && task.userId.toString() !== user._id.toString()) {
    const err = new Error("Forbidden");
    err.statusCode = 403;
    throw err;
  }

  Object.assign(task, data);
  return await task.save();
};

exports.deleteTask = async (id, user) => {
  const task = await Task.findById(id);
  if (!task) return null;

  if (
    user.role !== "admin" &&
    task.userId.toString() !== user._id.toString()
  ) {
    const err = new Error("Forbidden");
    err.statusCode = 403;
    throw err;
  }

  await task.deleteOne();
  return true; 
};

