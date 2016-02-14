$( document ).ready(function() {
	
	$('.carousel').carousel({
		interval: false
	});

	// var owl = $("#owl-demo");
	//   owl.owlCarousel({
	//       itemsCustom : [
	//         [0, 2],
	//         [450, 4],
	//         [600, 7],
	//         [700, 9],
	//         [1000, 10],
	//         [1200, 12],
	//         [1400, 13],
	//         [1600, 15]
	//       ],
	//       navigation : true
	//   });



	 var owl = $("#owl-demo");
 
	  owl.owlCarousel({
	      items : 6, //10 items above 1000px browser width
	      itemsDesktop : [1000,5], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,3], // betweem 900px and 601px
	      itemsTablet: [600,2], //2 items between 600 and 0
	      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	  });
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
	    owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
	    owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
	    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
	    owl.trigger('owl.stop');
	  })
 
});