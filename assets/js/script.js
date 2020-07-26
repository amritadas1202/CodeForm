$(".program").click(function(){
    $(".leftNavbar").toggle("clip",function(){
        console.log("indise");
    });
    console.log("clicked");
});
$(".nav-item").on("click",function(){
        $(".nav-item").removeClass("activeTop");
        var news = $(this).toggleClass("activeTop");
});

$(".sideNave-items").on("click",function(){
    $(".sideNave-items").removeClass("activeLeft");
    $(this).addClass("activeLeft");
    //$(".QuesSet").show("fade",500);
    var id = $(this).attr("id");
    console.log(id);
    for(var i = 0; i < 5; i++){
        if(id == i){
            id = i;
            
        }
    }
    switch (id){
        case 1:
            $(".QuesSet.1").show("fade",500,callback);
            $(".QuesSet").removeClass("visible");
            $(".QuesSet.1").addClass("visible") ;
            console.log("visible"+id);
            break;
        case 2:
            $(".QuesSet.2").show("fade",500,callback);
            $(".QuesSet").removeClass("visible");
            $(".2").addClass("visible") ;
            console.log("visible "+id); 
            break;
        case 3:
            $(".QuesSet.3").show("fade",500,callback);
            $(".QuesSet").removeClass("visible");
            $(".QuesSet.3").addClass("visible") ;
            console.log("visible"+id);
            break;
        case 4:
            $(".QuesSet.4").show("fade",500,callback);
            $(".QuesSet").removeClass("visible");
            $(".QuesSet.4").addClass("visible") ;
            console.log("visible"+id);
            break;
        default: 
            text = "No value found";
    }
   
});

function callback(){
    setTimeout(function() {
        $( ".QuesSet:visible" ).removeAttr( "style" );
      }, 1000 );
};