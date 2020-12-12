const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../src/database/connection');
const { put } = require('../routes/facebook_account');

// @desc    Authen facebook account
// @route   POST /facebook_account/?
// @access  Authenticate
const shopifyAuth = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "done"
  });
});

// @desc    Add facebook_account
// @route   POST /facebook_account
// @access  Authenticate
const addFacebookAccount = asyncHandler(async (req, res, next) => {
  console.log(req.body.URL)
  db.facebook_account.create({
    email: req.body.email,
    password: req.body.password,
    token: req.body.token,
    facebook_ads_account_id: facebook_ads_account_id,
    user_id: 1
  }).then(() =>{
    res.redirect('/facebook_account/')
  });

});

// @desc    List all facebook_account owned by user
// @route   GET /facebook_account
// @access  Authenticate
const listFacebookAccount = asyncHandler(async (req, res, next) => {
  console.log(db.facebook_account);
  db.facebook_account.findAll({
    where: {
      user_id: 1,
    }
  }).then((facebook_account) =>{
    res.render('facebook_account', {
      title: 'Facebook Account',
      data: facebook_account
    })
  })
});

// @desc    Update facebook_account info
// @route   PUT /facebook_account/:id
// @access  Authenticate
const updateFacebookAccount = asyncHandler(async (req, res, next) => {
  console.log(req.body)
  db.facebook_account.findOne({
    where: {
      id: req.params.id
    }
  }).then((facebook_account) =>{
    facebook_account.email = req.body.email
    facebook_account.password = req.body.password
    facebook_account.token = req.body.token
    facebook_account.facebook_ads_account_id = req.body.facebook_ads_account_id
    facebook_account.status = req.body.status
    facebook_account.save()
  }).then(() =>{
    res.redirect('/facebook_account/')
  });
});

// @desc    Delete facebook_account
// @route   DELETE /facebook_account/:id
// @access  Authenticate
const deleteFacebookAccount = asyncHandler(async (req, res, next) => {
  db.facebook_account.findOne({
    where: {
      id: req.params.id
    },
  }).then((facebook_account) =>{
    facebook_account.status = 0
    facebook_account.save()
  }).then(() =>{
    res.status(200).json({
      success: true,
      data: "done"
    })
  });
});

const findOne = asyncHandler(async (req, res, next) => {
  db.facebook_account.findOne({
    where: {
      id: req.params.id
    },
  }).then((facebook_account) =>{
    res.render('form', {
      data: facebook_account,
      title: "UPDATE", //page title
      method: "post",
      action: "/facebook_account/"+ facebook_account.id, //post action for the form
      fields: [
        {name:'email',type:'text',property:'required',value:facebook_account.email},   
        {name:'password',type:'text',property:'required',value:facebook_account.password},  
        {name:'token',type:'text',property:'required',value:facebook_account.token},  
        {name:'facebook_ads_account_id',type:'text',property:'required',value:facebook_account.facebook_ads_account_id},  
        {name:'status',type:'text',property:'required',value:facebook_account.status}
      ]
    })
  });
});

module.exports = { shopifyAuth, addFacebookAccount, listFacebookAccount, updateFacebookAccount, deleteFacebookAccount, findOne };