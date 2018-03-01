$(document).ready(function() {

    let random = Math.floor(Math.random() * (7 - 1) + 1);

    $(".section-main").css({
        "background-image": "url(./assets/images/" + random + ".jpg)"
    })

    $(".mobile-toggler").click(function(){
        $(".mobile-menu").toggleClass("-isOpen");
        $(this).toggleClass('-opened');

 	});

    setTimeout(function(){
        $(".-from-above").addClass("-animated");
        $(".-from-bottom").addClass("-animated");
    }, 1000);

});
