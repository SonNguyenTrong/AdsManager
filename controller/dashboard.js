const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Main Dashboard view
// @route   GET /dashboard
// @access  Authenticate
const getDashboard = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "done"
  });
});

// @desc    Toggle Camps
// @route   POST /dashboard/:id
// @access  Authenticate
const toggleCamp = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "done"
  });
});

module.exports = { getDashboard, toggleCamp };