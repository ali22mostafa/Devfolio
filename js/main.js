// change background-color

$(window).scroll(function(){
   
    let scrolTop=$(window).scrollTop();
    let offestAbout=$("#about").offset().top
    if(scrolTop > offestAbout -50){
        $(".navbar").addClass("bg-custom")
        $(".navbar").removeClass("bg-transparent")
       
    }
    else{
        $(".navbar").removeClass("bg-custom")
        $(".navbar").addClass("bg-transparent")
        
    }
   

   
})


// Active Link
$(".nav-link").click(function(){

    $(this).addClass("active1")
    $(this).parent().siblings().children().removeClass("active1")
})