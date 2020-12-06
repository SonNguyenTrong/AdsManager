const dotenv = require('dotenv').config();
const redis = require('redis');
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
const url = require('url');

const apiKey = process.env.spf_apiKey; // To be replace with shop apikey in db
const apiSecret = process.env.spf_secretKey; // To be replace with shop secretkey in db
const scopes = 'read_products';
const forwardingAddress = "https://d319b7e38d46.ngrok.io"; //To be replace with our app domain or ip later


const checkAppAuthenticated = (req, res, next) => {
  const shop = req.query.shop;

  if (shop) {
    const state = nonce();
    const redirectUri = forwardingAddress + '/shopify/callback';
    const installUrl = 'https://' + shop +
      '/admin/oauth/authorize?client_id=' + apiKey +
      '&scope=' + scopes +
      '&state=' + state +
      '&redirect_uri=' + redirectUri;

    res.cookie('state', state);
    res.redirect(installUrl);
  } else {
    return res.status(400).send('Missing shop parameter. Please specify shop to fetch');
  }
};

module.exports = {
  checkAppAuthenticated,
};