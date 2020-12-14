const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../src/database/connection');

// @desc    Add shopify_account link to user
// @route   POST /shop/add
// @access  Authenticate
const addShop = asyncHandler(async (req, res, next) => {
  db.shopify_shop.create({
    url: req.body.URL,
    api_key: req.body.APIKey,
    api_secret: req.body.APISecret,
    status: 1,
    shopify_account_id: 1
    //user_id : cookie
  }).then(() =>{
    res.redirect('/shop/')
  });

});

// @desc    List all shopify owned by user
// @route   GET /shop
// @access  Authenticate
const listShop = asyncHandler(async (req, res, next) => {
  db.user.findOne({
    where: {
      id: 1,
      // id: cookie.id
    },
    include: [
      { model: db.shopify_account, as:'shopify_accounts'}
    ]
  })
  .then((db_user) =>{
    accList = []
    db_user.shopify_accounts.forEach((acc) => {
      accList = [...accList,acc.id]
    }) 
    return accList
  })
  .then((accList) => {

    return db.shopify_account.findAll({
      where: {
        id: accList
      },
      include: [
        { model:db.shopify_shop, as:'shopify_shops' , where: {status: 1}}
      ]
    })
  })
  .then((data) => {
    var retData= [];
    data.forEach((acc) => {
      acc.shopify_shops.forEach((shop) =>{
        retData=[...retData,shop.dataValues]
      })
    })
    return retData
  })
  .then((resData) => {
    res.render('shop', {
      title: 'shops',
      data: resData
    })
  })
});

// @desc    Update shopify info
// @route   POST /shop/:id
// @access  Authenticate
const updateShop = asyncHandler(async (req, res, next) => {
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
    res.redirect('/shop')
  });
});

// @desc    Update shopify info
// @route   DELETE /shop/:id
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
      action: "/shop/"+ db_shop.id, //post action for the form
      fields: [
        {name:'URL',type:'text',property:'required',value:db_shop.url},   
        {name:'APIKey',type:'text',property:'required',value:db_shop.api_key},  
        {name:'APISecret',type:'text',property:'required',value:db_shop.api_secret}   
      ]
    })
  });
});

module.exports = { addShop, listShop, updateShop, deleteShop, findOne };