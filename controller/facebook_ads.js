const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../src/database/connection');
const { put } = require('../routes/facebook_ads');

// @desc    Authen facebook ads
// @route   POST /facebook_ads/?
// @access  Authenticate
const shopifyAuth = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "done"
  });
});

// @desc    Add facebook_ads
// @route   POST /facebook_ads
// @access  Authenticate
const addFacebookAds = asyncHandler(async (req, res, next) => {
  db.facebook_ads.create({
    facebook_account_id: req.body.facebook_account_id,
    campaign_name: req.body.campaign_name,
    delivery: req.body.delivery,
    budget: req.body.budget,
    amount_spent: req.body.amount_spent,
    ctr: req.body.ctr,
    cpm: req.body.cpm,
    content_view: req.body.content_view,
    cost_per_content_view: req.body.cost_per_content_view,
    checkouts_initiated: req.body.checkouts_initiated,
    cost_per_checkout_initiated: req.body.cost_per_checkout_initiated,
    purchases: req.body.purchases,
    cost_per_purchase: req.body.cost_per_purchase,
    purchase_roas: req.body.purchase_roas,
    purchases_conversion_value: req.body.purchases_conversion_value,
    last_purchase: req.body.last_purchase,
    status: 1,
  }).then(() =>{
    res.redirect('/facebook_ads/')
  });

});

// @desc    List all facebook_ads owned by user
// @route   GET /facebook_ads
// @access  Authenticate
const listFacebookAds = asyncHandler(async (req, res, next) => {
  console.log(db.facebook_ads);
  db.facebook_ads.findAll().then((facebook_ads) =>{
    res.render('facebook_ads', {
      title: 'Facebook Ads',
      data: facebook_ads
    })
  })
});

// @desc    Update facebook_ads info
// @route   PUT /facebook_ads/:id
// @access  Authenticate
const updateFacebookAds = asyncHandler(async (req, res, next) => {
  console.log(req.params.id)
  console.log(req.body)
  db.facebook_ads.findOne({
    where: {
      id: req.params.id
    }
  }).then((facebook_ads) =>{
    facebook_ads.email = req.body.email
    facebook_ads.password = req.body.password
    facebook_ads.status = req.body.status
    facebook_ads.save()
  }).then(() =>{
    res.redirect('/facebook_ads/')
  });
});

// @desc    Delete facebook_ads
// @route   DELETE /facebook_ads/:id
// @access  Authenticate
const deleteFacebookAds = asyncHandler(async (req, res, next) => {
  db.facebook_ads.findOne({
    where: {
      id: req.params.id
      // id: cookie.id
    },
  }).then((facebook_ads) =>{
    facebook_ads.status = 0
    facebook_ads.save()
  }).then(() =>{
    res.status(200).json({
      success: true,
      data: "done"
    })
  });
});

const findOne = asyncHandler(async (req, res, next) => {
  db.facebook_ads.findOne({
    where: {
      id: req.params.id
      // id: cookie.id
    },
  }).then((facebook_ads) =>{
    res.render('form', {
      data: facebook_ads,
      title: "UPDATE", //page title
      method: "post",
      action: "/facebook_ads/"+ facebook_ads.id, //post action for the form
      fields: [
        {name:'Email',type:'text',property:'required',value:facebook_ads.email},   
        {name:'Password',type:'text',property:'required',value:facebook_ads.password},  
        {name:'Status',type:'text',property:'required',value:facebook_ads.status}   
      ]
    })
  });
});

module.exports = { shopifyAuth, addFacebookAds, listFacebookAds, updateFacebookAds, deleteFacebookAds, findOne };