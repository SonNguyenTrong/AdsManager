const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../src/database/connection');

// @desc    Authen shopify acc
// @route   POST /auth/shop/?
// @access  Authenticate
const shopifyAuth = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "done"
  });
});

// @desc    Add shopify_account link to user
// @route   POST /auth/shop
// @access  Authenticate
const addShop = asyncHandler(async (req, res, next) => {
  db.shop.create({
    url: req.url,
    api_key: req.api_key,
    api_secret: req.api_secret,
    status: "active",
  }).then(() =>{
    res.status(200).json({
      success: true,
      data: "done"
    });
  });
});

// @desc    List all shopify owned by user
// @route   GET /:user_id/shop
// @access  Authenticate
const listShop = asyncHandler(async (req, res, next) => {
  db.user.findAll({
    where: {
      id: 1,
      // id: cookie.id
    },
    include: [
      { model: db.shop, as:'shops', where: {status: "active"}}
    ]
  }).then((db_user) =>{
    res.status(200).json({
      success: true,
      data: db_user[0].shops
    })
  })
});

// @desc    Update shopify info
// @route   PUT /:user_id/shop/update/:id
// @access  Authenticate
const updateShop = asyncHandler(async (req, res, next) => {
  db.shop.findOne({
    where: {
      id: 1
      // id: cookie.id
    },
    // include: [
    //   { model: db.shop, as:'shops'}
    // ]
  }).then((db_shop) =>{
    db_shop[0] = req.updatedShop
    db_shop[0].save()
  }).then(() => {
    res.status(200).json({
      success: true,
      data: db_user[0].shops
    })
  })
});

// @desc    Update shopify info
// @route   POST /shop/delete/:id
// @access  Authenticate
const deleteShop = asyncHandler(async (req, res, next) => {
  db.shop.findOne({
    where: {
      id: 1
      // id: cookie.id
    },
    // include: [
    //   { model: db.shop, as:'shops'}
    // ]
  }).then((db_shop) =>{
    db_shop[0].status = "deleted"
    db_shop[0].save()
    // db_shop[0].destroy()
  }).then(() => {
    res.status(200).json({
      success: true,
      data: "success"
    })
  })
});

module.exports = { shopifyAuth, addShop, listShop, updateShop, deleteShop };