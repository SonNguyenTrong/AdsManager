const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../src/database/connection');
const { put } = require('../routes/shop');

// @desc    Authen shopify acc
// @route   POST /shop/
// @access  Authenticate
const shopifyAuth = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "done"
  });
});

// @desc    Add shopify_account link to user
// @route   POST /shop
// @access  Authenticate
const addShop = asyncHandler(async (req, res, next) => {
  console.log(req.body.URL)
  db.shopify_shop.create({
    url: req.body.URL,
    api_key: req.body.APIKey,
    api_secret: req.body.APISecret,
    status: 1,
    user_id: 1
    //user_id : cookie
  }).then(() =>{
    res.redirect('/auth/shop/')
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
      { model: db.shopify_shop, as:'shops', where: {status: 1}}
    ]
  }).then((db_user) =>{
    res.render('shop', {
      title: 'shops',
      data: db_user[0].shops
    })
  })
});

// @desc    Update shopify info
// @route   PUT /:user_id/shop/update/:id
// @access  Authenticate
const updateShop = asyncHandler(async (req, res, next) => {
  console.log(req.params.id)
  console.log(req.body)
  db.shopify_shop.findOne({
    where: {
      id: req.params.id
      // id: cookie.id
    },
    // include: [
    //   { model: db.shop, as:'shops'}
    // ]
  }).then((db_shop) =>{
    db_shop.url = req.body.URL
    db_shop.api_key = req.body.APIKey
    db_shop.api_secret = req.body.APISecret
    db_shop.save()
  }).then(() =>{
    res.redirect('/auth/shop')
  });
});

// @desc    Update shopify info
// @route   POST /shop/delete/:id
// @access  Authenticate
const deleteShop = asyncHandler(async (req, res, next) => {
  db.shopify_shop.findOne({
    where: {
      id: req.params.id
      // id: cookie.id
    },
    // include: [
    //   { model: db.shop, as:'shops'}
    // ]
  }).then((db_shop) =>{
    db_shop.status = 0
    db_shop.save()
    // db_shop[0].destroy()
  }).then(() =>{
    res.status(200).json({
      success: true,
      data: "done"
    })
  });
});

const findOne = asyncHandler(async (req, res, next) => {
  db.shopify_shop.findOne({
    where: {
      id: req.params.id
      // id: cookie.id
    },
    // include: [
    //   { model: db.shop, as:'shops'}
    // ]
  }).then((db_shop) =>{
    res.render('form', {
      data: db_shop,
      title: "UPDATE", //page title
      method: "post",
      action: "/auth/shop/"+ db_shop.id, //post action for the form
      fields: [
        {name:'URL',type:'text',property:'required',value:db_shop.url},   
        {name:'APIKey',type:'text',property:'required',value:db_shop.api_key},  
        {name:'APISecret',type:'text',property:'required',value:db_shop.api_secret}   
      ]
    })
  });
});

module.exports = { shopifyAuth, addShop, listShop, updateShop, deleteShop, findOne };