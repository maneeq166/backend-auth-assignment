const asyncHandler = require("../../utils/asyncHandler");
const { registerUser, loginUser } = require("./auth.service");

exports.register = asyncHandler(async (req, res) => {
  const { user, token } = await registerUser(req.body);

  res.status(201).json({
    message: "User registered successfully",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

exports.login = asyncHandler(async (req, res) => {
  const { user, token } = await loginUser(req.body);

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

exports.me = asyncHandler(async (req, res) => {
  const user = req.user;

  res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
});
