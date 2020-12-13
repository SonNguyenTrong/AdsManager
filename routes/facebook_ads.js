const router = require('express').Router();

const {
    shopifyAuth, addFacebookAds, listFacebookAds, updateFacebookAds, deleteFacebookAds, findOne
} = require('../controller/facebook_ads');

// Todo: use middleware authen
// router.use();

router
  .route('/')
  .get(listFacebookAds)

router.get('/add', (req,res) =>{
  res.render('form', {
    title: "ADD", //page title
    action: "/facebook_ads/add", //post action for the form
    method: "post",
    fields: [
      {name:'facebook_account_id',type:'text',property:'required',label:'Facebook Account Id'},   
      {name:'campaign_name',type:'text',property:'required',label:'Campaign Name'},
      {name:'delivery',type:'text',property:'required',label:'Delivery'},
      {name:'budget',type:'text',property:'required',label:'Budget'},  
      {name:'amount_spent',type:'text',property:'required',label:'Amount Spent'},
      {name:'ctr',type:'text',property:'required',label:'Ctr'},
      {name:'cpm',type:'text',property:'required',label:'Cpm'},
      {name:'content_view',type:'text',property:'required',label:'Content View'},
      {name:'cost_per_content_view',type:'text',property:'required',label:'CostPer Content View'},
      {name:'checkouts_initiated',type:'text',property:'required',label:'Checkouts Initiated'},
      {name:'cost_per_checkout_initiated',type:'text',property:'required',label:'Cost Per Checkout Dnitiated'},
      {name:'purchases',type:'text',property:'required',label:'Purchases'},
      {name:'cost_per_purchase',type:'text',property:'required',label:'CostPer Purchase'},
      {name:'purchase_roas',type:'text',property:'required',label:'Purchase Roas'},
      {name:'purchases_conversion_value',type:'text',property:'required',label:'Purchases Conversion Value'},
      {name:'last_purchase',type:'text',property:'required',label:'Last Purchase'}, 
    ]
  });
})

router.post('/add', addFacebookAds)
    
router
  .route('/:id')
  .get(findOne)
  .post(updateFacebookAds)
  .delete(deleteFacebookAds)

module.exports = router;