$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    $('[data-toggle="tooltip"]').tooltip();

    $('[id*="shopedit"]').on("click",function(){
        var id = $( this ).attr("id").substr(9,10)
        window.location.href = '/shop/'+id
    })

    $('[id*="shopdelete"]').on("click",function(){
        var id = $( this ).attr("id").substr(11,12)
        $(this).removeAttr("title")
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        fetch(baseUrl+'/shop/'+id,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() =>{
            var tab = "#tableno" + id
            $(tab).remove()
        })
    })

    $('[id*="shopauth"]').on("click",function(){
        var id = $( this ).attr("id").substr(9,10)
        var url = $(("#tableno"+id+" .url")).text();
        var api_key = $(("#tableno"+id+" .apikey")).text();
        window.location.href = "/shopify?url="+url+"&api_key="+api_key

    })
});
