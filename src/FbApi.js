const bizSdk = require('facebook-nodejs-business-sdk');
const fetch = require('node-fetch')
const request = require('request');
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;
const AdSet = bizSdk.AdSet;
const dotenv = require('dotenv');
dotenv.config({path: "././.env"})
const accessToken = process.env.fb_accessToken
const accountId = process.env.fb_accountId
const appSecret = process.env.fb_appSecret
const appId = process.env.fb_appId

const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
const showDebugingInfo = true;
const account = new AdAccount(accountId);

if (showDebugingInfo) {
    FacebookAdsApi.setDebug(true);
}
module.exports = {
    createFbAdsCamp : function(campName, campStatus="PAUSED"){
        let fields, params;
        fields = [
        ];
        params = {
        'name' : campName,
        'objective' : 'LINK_CLICKS',
        'status' : campStatus,
        'special_ad_categories' : [],
        };
        const campaigns = (account.createCampaign(
        fields,
        params));
    },

    getFbAdsCamp : function(){
        return account.read([AdAccount.Fields.name])
        .then((account) =>{
            return account.getCampaigns([Campaign.Fields.name,Campaign.Fields.daily_budget,Campaign.Fields.status,Campaign.Fields.bid_strategy], { limit: 1000 })// fields array and params
        }).catch(console.error);
    },

    getCampInsight : function(){
        var fields = 'campaign_id,campaign_name,spend,ctr,cpm,actions,purchase_roas'
        var url = 'https://graph.facebook.com/v9.0/'+accountId+'/insights?fields='+fields+'&limit=400&level=campaign&date_preset=today&access_token=' + accessToken

        return fetch(url).then((data)=> {
            return data.json();
        }).catch((err)=>{
            console.error(err);
        })

    }
}