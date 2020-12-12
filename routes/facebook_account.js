const router = require('express').Router();

const {
    shopifyAuth, addFacebookAccount, listFacebookAccount, updateFacebookAccount, deleteFacebookAccount, findOne
} = require('../controller/facebook_account');

// Todo: use middleware authen
// router.use();

router
  .route('/')
  .get(listFacebookAccount)
    
router
  .route('/:id')
  .get(findOne)
  .post(updateFacebookAccount)
  .delete(deleteFacebookAccount)

router.get('/add', (req,res) =>{
  res.render('form', {
    title: "ADD", //page title
    action: "/auth/shop/add", //post action for the form
    method: "post",
    fields: [
      {name:'URL',type:'text',property:'required'},   
      {name:'APIKey',type:'text',property:'required'},  
      {name:'APISecret',type:'text',property:'required'}   
    ]
  });
})

router.post('/add', addFacebookAccount)

module.exports = router;