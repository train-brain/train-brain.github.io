$(document).ready(function(){
    // console.log("JQuery is here yay!!!!");
    $("#hamburger, #close").click(function(){
        $(".navbar").toggleClass("open-nav");
    });

   var nb = $(".navbar");
   $(window).scroll(function(){
     if($(this).scrollTop()>250){
         mn.addClass("main-nav-scrolled");
       }

     else{
       mn.removeClass("main-nav-scrolled");
     }
   });


 });



 // $(document).ready(function(){
 //   // When the user scrolls the page, execute myFunction
 //   window.onscroll = function() {myFunction()};
 //
 //   // Get the navbar
 //   var navbar = document.getElementById("navbar");
 //
 //   // Get the offset position of the navbar
 //   var sticky = navbar.offsetTop;
 //
 //   // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
 //   function myFunction() {
 //     if (window.pageYOffset >= sticky) {
 //       navbar.classList.add("sticky")
 //     } else {
 //       navbar.classList.remove("sticky");
 //     }
 //   }
 //
 //  });
