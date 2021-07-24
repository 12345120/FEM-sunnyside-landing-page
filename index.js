// $('a[href="#logo"]').on("click", function (e) {
//     console.log("SMOOTH SCROLLING TAKING EFFECT");
//     var target = $(this.hash);
//     target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//     if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         e.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1200, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
// });


// https://css-tricks.com/snippets/jquery/smooth-scrolling/
// - how to set smooth scrolling
// * commented out; html { scroll-behavior: smooth } also does the job (can't control speed though)
// you can use the code above to set custom speed for scrolling and custom element queries 


// LEARN MORE BUTTON BOX SHADOW ANIMATION
$('.texts h2').each(function() {
    
    $(this).hover(function () {
            $(this).toggleClass('box-shadow-lift-up');  
        }, function () {
            $(this).toggleClass('box-shadow-lift-up');  
        }
    );
});

// ARROW ANIMATION IMPROVEMENT 
$('.arrow').hover(function () {
        // $(this).toggleClass('back-to-place');
        // no difference in having this commented out or not 
    }, function () {
        setTimeout(() => {
            $(this).toggleClass('back-to-place');
            let clss = $(this).attr('class');
            // console.log(clss);
            // * this works for some reason: 
            // works even when the class gets turned off 
        }, 1);
    }
);

