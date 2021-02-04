$(document).on("click", ".subsubopciones", function(){
    $(".bloque_subsubopciones").slideUp(120);
    $("#subsubopciones_"+($(this).children().attr("href")).replace("#tab","")).slideDown(120);
    
});
$(document).on("mouseleave", ".subsubopciones", function(){
    //$("#subsubopciones_"+($(this).children().attr("href")).replace("#tab","")).slideUp(120);
});
$(".header").load("menu_navegacion_principal.html", function(){ 
    var menu = new cbpHorizontalSlideOutMenu( document.getElementById( 'cbp-hsmenu-wrapper' ) );
});


$.ajax({
    url: 'http://ec2-54-214-109-244.us-west-2.compute.amazonaws.com/api/obis/filter_fields',
    method: 'GET',
    success: function(a){
        console.log("datos", a);
    },
    error:function(a){
        console.log("error", a);
    }

})