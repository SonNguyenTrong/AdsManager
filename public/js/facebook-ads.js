$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    $('[data-toggle="tooltip"]').tooltip();

    
    $('[class*="facebook_ads_add"]').on("click",function(){
        window.location.href = '/facebook_ads/add'
    })


    $('[id*="facebook_ads_edit"]').on("click",function(){
        var id = $( this ).data("id")
        window.location.href = '/facebook_ads/'+id
    })

    $('[id*="facebook_ads_delete"]').on("click",function(){
        var id = $( this ).data("id")
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        fetch(baseUrl+'/facebook_ads/'+id,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() =>{
            var tab = "#tableno" + id
            $(tab).remove()
        })
    })
});
