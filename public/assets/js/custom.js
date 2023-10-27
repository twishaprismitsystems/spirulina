// JavaScript Document

jQuery(document).ready(function () {

var $ = jQuery;

AOS.init({
    duration: 750,
    disable: window.innerWidth < 768,
})

$(document).on('load',()=>{
    AOS.init({
        duration: 750,
        disable: window.innerWidth < 768,
    })
});

$(document).on('scroll',()=>{
    AOS.init({
        duration: 750,
        disable: window.innerWidth < 768,
    })
});

//   jQuery('a').click(function(){
//     jQuery('html, body').animate({scrollTop:0}, 1500);
//   });

	
/*fixed navbar*/ 
 $(document).scroll(function(){
        var st = $(this).scrollTop();
        if(st > 40) {
            $("nav.navbar").addClass('fixed');
        } else {
            $("nav.navbar").removeClass('fixed');
        }
    });

	

/* Slider*/ 
$('.owl-product').owlCarousel({
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
	autoplaySpeed:2000,
    smartSpeed:1000,
	responsiveClass:true,
    dots:false,
    autoplayHoverPause:true,
	responsive:{
        0:{
            items:1,
        },
		575:{
            items:2,
        },
        768:{
            items:3,
        },
        1199:{
            items:4,
        }
    }

})

	
$(document).on('click','.content-expanded',function(){
	$(this).prev('.hb-tab-content').toggleClass('open');
	if($(this).prev('.hb-tab-content.open').length){
	   $(this).text('Read Less');
	   }else{
		   $(this).text('Read More');
	   }
});

		
  });

/*scrollspy*/	

//# sourceURL=pen.js
    