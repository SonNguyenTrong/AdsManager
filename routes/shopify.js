const router = require('express').Router();

const {
    shopifyAuth
} = require('../controller/shopify');

// Todo: use middleware authen
// router.use();

router
  .route('/')
  .get(shopifyAuth) //param: shop


module.exports = router;