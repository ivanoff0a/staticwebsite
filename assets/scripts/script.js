$(document).ready(function() {

    // let random = Math.floor(Math.random() * (7 - 1) + 1);

    // $(".section-main").css({
    //     "background-image": "url(./assets/images/" + random + ".jpg)"
    // })

    let modalToggler = $(".js-modal-toggler"),
        modal = $(".modal"),
        headerMobile = $(".header-mobile"),
        mobileMenu = $(".mobile-menu"),
        modalElems = [
            ".js-modal-github",
            ".js-modal-vk",
            ".js-modal-inst",
            ".modal-map",
            ".modal-toggler"
        ];

    $(".mobile-toggler").click(function() {
        headerMobile.toggleClass("-isOpen");
        $(this).toggleClass('-opened');
        headerMobile.toggleClass('-is-open');
        headerMobile.removeClass('-active');
        // $('.mobile-info i').toggleClass('-active');
        // $('.mobile-toggler i').toggleClass('-opened');
        // $('.modal-map').removeClass('-active');
        // $('.modal-info').removeClass('-active');
    });

    $(".js-modal-toggler").click(function() {
        headerMobile.removeClass("-isOpen");
        $(".mobile-toggler").removeClass("-opened");
    });

    setTimeout(function(){
        $(".-from-above").addClass("-animated");
        $(".-from-bottom").addClass("-animated");
    }, 1000);

    modalToggler.click(function() {
        modal.toggleClass("-active");
        for(let i = 0; i < modalElems.length ; i++) {
            let timeToWait = i * 200;

            setTimeout(function() {
                $(modalElems[i]).toggleClass("-active");
            }, 200 + timeToWait)
        }
    });

});


