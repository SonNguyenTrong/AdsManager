const router = require('express').Router();

const {
    shopifyAuth, addFacebookAds, listFacebookAds, updateFacebookAds, deleteFacebookAds, findOne
} = require('../controller/facebook_ads');

// Todo: use middleware authen
// router.use();

router
  .route('/')
  .get(listFacebookAds)
    
router
  .route('/:id')
  .get(findOne)
  .post(updateFacebookAds)
  .delete(deleteFacebookAds)

router.get('/add', (req,res) =>{
  res.render('form', {
    title: "ADD", //page title
    action: "/facebook_ads/add", //post action for the form
    method: "post",
    fields: [
      {name:'URL',type:'text',property:'required'},   
      {name:'APIKey',type:'text',property:'required'},  
      {name:'APISecret',type:'text',property:'required'}   
    ]
  });
})

router.post('/add', addFacebookAds)

module.exports = router;