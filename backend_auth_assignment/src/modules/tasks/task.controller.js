const asyncHandler = require("../../utils/asyncHandler");
const taskService = require("./task.service");

exports.create = asyncHandler(async (req, res) => {
  const task = await taskService.createTask(req.body, req.user._id);
  res.status(201).json(task);
});

exports.getAll = asyncHandler(async (req, res) => {
  const tasks = await taskService.getTasks(req.user);
  res.status(200).json(tasks);
});

exports.getOne = asyncHandler(async (req, res) => {
  const task = await taskService.getTaskById(req.params.id, req.user);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.status(200).json(task);
});

exports.update = asyncHandler(async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body, req.user);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.status(200).json(task);
});

exports.remove = asyncHandler(async (req, res) => {
  const deleted = await taskService.deleteTask(req.params.id, req.user);

  if (!deleted) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task deleted" });
});

    