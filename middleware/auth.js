const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const db = require('../src/database/connection');

// Protect routes middleware
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
  ) {
      // set token via Bearer token in header
      token = req.headers.authorization.split(' ')[1];
  } 
  // allow token in cookies (add for production)
  else if (req.cookies.token) {
      // set token via cookie
      token = req.cookies.token;
  }

  // Make sure token is sent
  if (!token) {
      return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  // Verify token
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await db.user.findOne({where:{ id : decoded.id} });

      next();
  } catch (error) {
      return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

module.exports = { protect };