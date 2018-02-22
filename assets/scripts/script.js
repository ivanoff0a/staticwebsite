$(document).ready(function() {

    $(".mobile-toggler").click(function(){
    $(".mobile-menu").toggleClass("-isOpen");

    var toggle = document.querySelector('.mobile-toggler');
      toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
      });

 	});

    setTimeout(function(){
        $(".-from-above").addClass("-animated");
        $(".-from-bottom").addClass("-animated");
    }, 1000);

});
