const FbAPI = require('./FbApi')

roundToTwo = function(a) {
    return String(Math.round((a + Number.EPSILON) * 100) / 100)
}

module.exports ={
    data_insights : function(){
        var job = [];
        FbAPI.getFbAdsCamp().then((camps) =>{
            camps.map((data) =>{
                job = [...job,[data.name,data.status,data.daily_budget? data.daily_budget: ""]]
            })
        }).then(() => {
            return FbAPI.getCampInsight().then((result) => {
                result["data"].map((camp) => {
                    //Handle content_view
                    var content_view, checkout, purchase;
                    camp.actions.forEach((action) => {
                        if (action.action_type == "view_content") {
                            content_view = action.value
                        }
                        if (action.action_type == "initiate_checkout") {
                            checkout = action.value
                        }
                        if (action.action_type == "purchase") {
                            purchase = action.value
                        }
                    })
                    job.map((insight,index) =>{
                        if (insight[0] == camp.campaign_name){
                            job[index] = [...job[index],"$"+camp.spend,roundToTwo(parseFloat(camp.ctr))+"%"
                                            ,"$"+roundToTwo(parseFloat(camp.cpm))
                                            ,content_view,"$"+roundToTwo(parseFloat(camp.spend/content_view))
                                            ,checkout,checkout? "$"+roundToTwo(parseFloat(camp.spend/checkout)) : "NaN" 
                                            ,purchase? purchase:"0",purchase? "$"+roundToTwo(parseFloat(camp.spend/purchase)) : "NaN" 
                                            ,camp.purchase_roas ? roundToTwo(parseFloat(camp.purchase_roas[0].value)) : "NaN" 
                                            ,camp.purchase_roas ? "$"+roundToTwo(parseFloat(camp.spend)*parseFloat(camp.purchase_roas[0].value)) : "NaN"]
                        }
                    })
                }) 
                return job
            })
        })
    }
}
