$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    $('[data-toggle="tooltip"]').tooltip();


    $('[class*="facebook_account_add"]').on("click",function(){
        window.location.href = '/facebook_account/add'
    })

    $('[id*="facebook_account_edit"]').on("click",function(){
        var id = $( this ).data("id")
        window.location.href = '/facebook_account/'+id
    })

    $('[id*="facebook_account_delete"]').on("click",function(){
        var id = $( this ).data("id")
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        fetch(baseUrl+'/facebook_account/'+id,{
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
