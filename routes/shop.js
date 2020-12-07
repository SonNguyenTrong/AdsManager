const router = require('express').Router();

const {
    shopifyAuth, addShop, listShop, updateShop, deleteShop, findOne
} = require('../controller/shopify');

// Todo: use middleware authen
// router.use();

router
  .route('/')
  .get(listShop)
    
router
  .route('/:id')
  .get(findOne)
  .post(updateShop)
  .delete(deleteShop)

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

router.post('/add', addShop)

module.exports = router;