$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    $('[data-toggle="tooltip"]').tooltip();

    $('[id*="shopedit"]').on("click",function(){
        var id = $( this ).attr("id").substr(9,10)
        window.location.href = '/auth/shop/'+id
    })

    $('[id*="shopdelete"]').on("click",function(){
        var id = $( this ).attr("id").substr(11,12)
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        fetch(baseUrl+'/auth/shop/'+id,{
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
