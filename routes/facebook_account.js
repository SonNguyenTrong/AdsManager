const router = require('express').Router();

const {
    shopifyAuth, addFacebookAccount, listFacebookAccount, updateFacebookAccount, deleteFacebookAccount, findOne
} = require('../controller/facebook_account');

// Todo: use middleware authen
// router.use();

router
  .route('/')
  .get(listFacebookAccount)

router.get('/add', (req,res) =>{
  res.render('form', {
    title: "ADD", //page title
    action: "/facebook_account/add", //post action for the form
    method: "post",
    fields: [
      {name:'email',type:'text',property:'required',label:"Email"},   
      {name:'password',type:'text',property:'required',label:"Password"},  
      {name:'facebookAdsAccountId',type:'text',property:'required',label:'Facebook Ads Account Id'},
      {name:'token',type:'text',property:'required',label:'Token'}   
    ]
  });
})
  
  router.post('/add', addFacebookAccount)
    
router
  .route('/:id')
  .get(findOne)
  .post(updateFacebookAccount)
  .delete(deleteFacebookAccount)

module.exports = router;