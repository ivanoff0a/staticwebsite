$(document).ready(function() {
    
    $(".mobile-toggler").click(function(){
 		
    $(".mobile-menu").toggleClass("-isOpen");

    var toggle = document.querySelector('.mobile-toggler');
      toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
      });
 	  });

});
