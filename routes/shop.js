const router = require('express').Router();

const {
    shopifyAuth, addShop, listShop, updateShop, deleteShop
} = require('../controller/shopify');

// Todo: use middleware authen
// router.use();

router
  .route('/')
  .get(function(req,res){
    res.render('shop', {
      title: 'shops',
      data: listShop
    })
  })
  .post(function(req,res){
    addShop.then(() =>{
      res.render('shop', {
        title: 'shops',
        data: listShop
      })
    }).catch(err => {
      console.log(err)
    })
  })

router
  .route('/:id')
  .put(function(req,res){
    updateShop.then(() =>{
      res.render('shop', {
        title: 'shops',
        data: listShop
      })
    }).catch(err => {
      console.log(err)
    })
  })
  .delete(function(req,res){
    deleteShop.then(() =>{
      res.render('shop', {
        title: 'shops',
        data: listShop
      })
    }).catch(err => {
      console.log(err)
    })
  })

module.exports = router;