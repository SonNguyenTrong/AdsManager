const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../src/database/connection');
const nonce = require("nonce")
require('dotenv').config({path: "../.env"})

// @desc    Authen shopify acc
// @route   POST /shopify/:shop
// @access  Authenticate
const shopifyAuth = asyncHandler(async (req, res, next) => {
  if (req.query) {
    const shop = req.query;
    const state = nonce();
    const scopes = 'read_products';
    const redirectUri = process.env.fwdAddress + '/shopify/callback';
    const installUrl = 'https://' + shop.url +
      '/admin/oauth/authorize?client_id=' + shop.api_key +
      '&scope=' + scopes +
      '&state=' + state +
      '&redirect_uri=' + redirectUri;

    res.cookie('state', state);
    res.redirect(installUrl);
  } else {
    return res.status(400).send('Missing shop parameter.');
  }
});

module.exports = { shopifyAuth };