$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});

// typed animation script
var typed = new Typed(".typing",{
    strings:["web development"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})