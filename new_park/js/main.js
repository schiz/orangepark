$( document ).ready(function() {
	
	//more-info button
		$("a.more").on("click", function (e) {
			e.preventDefault();
			var self = $(this),
				$container = $(this).parents(".result"),
				$moreText = $container.find(".more-post-text");
				$icon = $container.find(".more-icon");

			if (!$container.hasClass("open")) {
				$moreText.slideDown(function () {
					$container.addClass("open");
					self.text("свернуть информацию");
					$icon.css("background-position", "-62px -30px");
				});
			}
			else {
				$moreText.slideUp(function () {
					$container.removeClass("open");
					self.text("подробнее");
					$icon.css("background-position", "-37px -30px");
				});
			}
		});

	//gallery-slider
		var gallerySlider = $('.gallery-slider'),
			bigImg = gallerySlider.find('.big-img img'),
			$smallImg = gallerySlider.find('.small-img img'),
			$nav = gallerySlider.find('.gallery-prev, .gallery-next'),
			idx = 0;
			maxli = $smallImg.length,
			popup = $('.popup'),
			$shemepopup = $('.popup.sheme-popup'),
			$imgpopup = $('.popup.img-popup'),
			$imgpopupBlock = $imgpopup.find('.img-popup-style img'),
			$shemepopupBlock = $shemepopup.find('.sheme-popup-style img'),
			$closepopup = popup.find('.close-popup'),
			slider = $('.about-slider'),
			$slide = slider.find('.item img');

		//show gallery-popup
		$('a.show-gallery-popup img').on('click', function (e) {
			e.preventDefault();

			popup.show();
			//custom scroll for popup
			$(".custom-scroll").mCustomScrollbar({
	            axis: "x",
	            advanced:{autoExpandHorizontalScroll:true, updateOnContentResize:true}
	        });
			idx = $(this).closest('.owl-item').index();
			$('.custom-scroll').mCustomScrollbar("scrollTo", 262*idx);
			$smallImg.eq(idx).click();
			$(".gallery-next").on("click",function(){
				var count = $(".big-slider-mini li").length-1;
				if(idx == count){
					$smallImg.eq(0).click();
				}
			});
		});
		//close popup
		$closepopup.on('click', function (e) {
			e.preventDefault();
			popup.hide();
		});
		$smallImg.on('click', function (e) {
			e.preventDefault();

			idx = $(this).parent().index();
			if (idx >= maxli - 1 ) {
					idx = maxli - 1;
				}
				$('.custom-scroll').mCustomScrollbar("scrollTo", 150*idx);
			if (idx <= 0) {
					idx = 0;
				}
				$('.custom-scroll').mCustomScrollbar("scrollTo", -150*idx);

			changeSlide();
		});
		
		$slide.on('click', function (e) {
			e.preventDefault();
			$currentSlide = $(this).closest('.owl-item').index();
			idx = $currentSlide;
		});

		$nav.on('click', function (e) {
			e.preventDefault();

			if( $(this).hasClass('gallery-next') ) {
				idx++;
				if (idx >= maxli - 1 ) {
					idx = maxli - 1;
				}
				$('.custom-scroll').mCustomScrollbar("scrollTo", 150*idx);

			} else {
				idx--;
				if (idx <= 0) {
					idx = 0;
				}
				$('.custom-scroll').mCustomScrollbar("scrollTo", -150*idx);
			}

			changeSlide();
		});

		//function for change slide in gallery-slider
		function changeSlide() {
			var $img = $smallImg.parent().eq(idx).find('img');

			$img.parent().addClass('active').siblings('.active').removeClass('active');

			var currentSrc = $img.attr('data-src');
			bigImg.attr('src', currentSrc);

			var dataTitle = $img.attr('data-title');
			$('.popup h2').text(dataTitle);
		}


	//for page cafe and shops
		var $ShowImgPopup = $('a.show-img-popup'),
			$ShowShemePopup = $('a.show-sheme-popup'),
			$PopupImg = $('.img-popup img'),
			$PopupTitle = $('.img-popup h2'),
			$ShemePopupTitle = $(".sheme-popup h2"),
			$ShemePopupFloor = $('.sheme-popup .floor');
		//show sheme-popup
			$ShowShemePopup.on('click', function (e) {
				e.preventDefault();

				$shemepopup.show();
				var $PopupTitle = $(this).attr('data-title');
					$PopupFloor = $(this).attr('data-floor');

				chanegeTitle($PopupTitle, $PopupFloor);	
			});
		//show img-popup	
			$ShowImgPopup.on('click', function (e) {
				e.preventDefault();

				$imgpopup.show();
				var $ShopsSrc = $(this).find('img').attr('data-src');
					$ShopsDataTitle = $(this).find('img').attr('data-title');
					
				changeContent($ShopsSrc, $ShopsDataTitle);
			});


			// function for change content
				function changeContent ($ShopsSrc, $ShopsDataTitle) {
					$PopupImg.attr('src', $ShopsSrc);
					$PopupTitle.text($ShopsDataTitle);
				}	

			// function for chanege title im sheme popup
			
				function chanegeTitle ($PopupTitle, $PopupFloor) {
					$ShemePopupTitle.text($PopupTitle);
					$ShemePopupFloor.text($PopupFloor);
				}
});	