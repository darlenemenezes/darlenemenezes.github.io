AOS.init({
 	duration: 800,
 	easing: 'ease',
 	once: true,
 	offset: -100
});

jQuery(function($) {

	'use strict';
	loader();
	siteMenuClone();
	mobileToggleClick();
	onePageNavigation();
	siteIstotope();
	portfolioItemClick();
	owlCarouselPlugin();
	floatingLabel();
	scrollWindow();
	counter();
	jarallaxPlugin();
	contactForm();
	stickyFillPlugin();
	animateReveal();

});

var siteIstotope = function() {
	var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).resize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });

  $container.isotope({ filter: '*' });

  $('#filters').on( 'click', 'a', function(e) {
  	e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters a').removeClass('active');
    $(this).addClass('active');
  });

  $container.imagesLoaded()
  .progress( function() {
    $container.isotope('layout');
  })
  .done(function() {
  	$('.gsap-reveal-img').each(function() {
			var html = $(this).html();
			$(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
		});

  	var controller = new ScrollMagic.Controller();

  	var revealImg = $('.gsap-reveal-img');

  	if ( revealImg.length ) {
  		var i = 0;
			revealImg.each(function() {

				var cover = $(this).find('.cover'),
					revealContent = $(this).find('.reveal-content'),
					img = $(this).find('.reveal-content img');


				var tl2 = new TimelineMax();


				setTimeout(function() {

					tl2
						tl2.set(img, {  scale: '2.0', autoAlpha: 1, })
						.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
							tl2.set(revealContent, { autoAlpha: 1 });
							tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
							tl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
						} } )

				}, i * 700);



				var scene = new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
				})
				.setTween(tl2)
				.addTo(controller);

				i++;

			});
		}
  })

  $('.js-filter').on('click', function(e) {
  	e.preventDefault();
  	$('#filters').toggleClass('active');
  });

}

var loader = function() {
	setTimeout(function() {
		TweenMax.to('.site-loader-wrap', 1, { marginTop: 50, autoAlpha: 0, ease: Power4.easeInOut });
  }, 10);
  $(".site-loader-wrap").delay(200).fadeOut("slow");
	$("#unslate_co--overlayer").delay(200).fadeOut("slow");
}

var siteMenuClone = function() {

	setTimeout(function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
		});

		var counter = 0;
    $('.unslate_co--site-mobile-menu .has-children').each(function(){
      var $this = $(this);

      $this.prepend('<span class="arrow-collapse collapsed">');

      $this.find('.arrow-collapse').attr({
        'data-toggle' : 'collapse',
        'data-target' : '#collapseItem' + counter,
      });

      $this.find('> ul').attr({
        'class' : 'collapse',
        'id' : 'collapseItem' + counter,
      });

      counter++;

    });

  }, 1000);

	$('body').on('click', '.arrow-collapse', function(e) {
    var $this = $(this);
    if ( $this.closest('li').find('.collapse').hasClass('show') ) {
      $this.removeClass('active');
    } else {
      $this.addClass('active');
    }
    e.preventDefault();

  });

	$(window).resize(function() {
		var $this = $(this),
			w = $this.width();

		if ( w > 768 ) {
			if ( $('body').hasClass('offcanvas') ) {
				$('body').removeClass('offcanvas');
			}
		}
	});

	$('.js-burger-toggle-menu').click(function(e){
		e.preventDefault();
		if ( $('body').hasClass('offcanvas') ) {
  		$('body').removeClass('offcanvas');
  		$('.js-burger-toggle-menu').removeClass('open');
  	} else {
  		$('body').addClass('offcanvas');
  		$('.js-burger-toggle-menu').addClass('open');
  	}
  });

};




// var siteIstotope = function() {




// }

var owlCarouselPlugin = function() {

	$('.testimonial-slider').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 20,
  	margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

    responsive:{
        400:{
          stagePadding: 20,
  				margin: 10,
        },
        600:{
          stagePadding: 100,
  				margin: 50,
        }
    }
	});
	owlSingleSlider();

	if ( $('.logo-slider').length ) {

		$('.logo-slider').owlCarousel({
			center: false,
	    loop: true,
	    stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    autoplayHoverPause: true,
	    dots: false,
	    nav: false,
	    responsive:{
		    400:{
		      items: 2
		    },
		    768:{
		    	items: 3
		    },
		    1000:{
		    	items: 5
		    }
	    }
	   });
	}

};

var owlSingleSlider = function () {
	if ( $( '.single-slider' ).length ) {
		$('.single-slider').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    autoplayHoverPause: true,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

	    responsive:{
	      400:{
	        stagePadding: 0,
					margin: 0,
	      },
	      600:{
	        stagePadding: 0,
					margin: 0,
	      }
	    }
		});
	}
}

var floatingLabel = function () {
	$('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});
};



// scroll
var scrollWindow = function() {
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.unslate_co--site-nav');
				// sd = $('.js-scroll-wrap');

		if (st > 150) {
			if ( !navbar.hasClass('scrolled') ) {
				navbar.addClass('scrolled');
				$('#languageDropdown').addClass('scrolled');
			}
		}
		if (st < 150) {
			if ( navbar.hasClass('scrolled') ) {
				navbar.removeClass('scrolled sleep');
				$('#languageDropdown').removeClass('scrolled');
			}
		}
		if ( st > 350 ) {
			if ( !navbar.hasClass('awake') ) {
				navbar.addClass('awake');
			}

			// hide / show on scroll
			if (st > lastScrollTop){
	      // downscroll code
	      navbar.removeClass('awake');
	      navbar.addClass('sleep');
	   	} else {
	      // upscroll code
	      navbar.addClass('awake');
	   	}
	   	lastScrollTop = st;


		}
		if ( st < 350 ) {
			if ( navbar.hasClass('awake') ) {
				navbar.removeClass('awake');
				navbar.addClass('sleep');
			}
		}



	});

};


var counter = function() {

	$('.section-counter').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$(this.element).find('.number-counter').each(function(){
				var $this = $(this),
					num = $this.data('number');
				$this.animateNumber(
				  {
				    number: num,
				    numberStep: comma_separator_number_step
				  },
				  {
				  	easing: 'swing',
    				duration: 3000
				  }
				);
			});

		}

	} , { offset: '95%' } );

};


var mobileToggleClick = function() {
	$('.js-menu-toggle').click(function(e) {

		e.preventDefault();

  	if ( $('body').hasClass('offcanvas') ) {
  		$('body').removeClass('offcanvas');
  		$('.js-menu-toggle').removeClass('active');
  		if ( $('.js-burger-toggle-menu').length ) {
  			$('.js-burger-toggle-menu').removeClass('open');
  		}
  	} else {
  		$('body').addClass('offcanvas');
  		$('.js-menu-toggle').addClass('active');
  		if ( $('.js-burger-toggle-menu').length ) {
  			$('.js-burger-toggle-menu').addClass('open');
  		}
  	}


  });

  // click outisde offcanvas
	$(document).mouseup(function(e) {
    var container = $(".unslate_co--site-mobile-menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('offcanvas') ) {
				$('body').removeClass('offcanvas');
				$('body').find('.js-menu-toggle').removeClass('active');

				$('body').find('.js-burger-toggle-menu').removeClass('open');
			}
    }
	});
};



// navigation
var onePageNavigation = function() {
  var navToggler = $('.site-menu-toggle');
 	$("body").on("click", ".unslate_co--site-nav .site-nav-ul li a[href^='#'], .smoothscroll[href^='#'], .unslate_co--site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {

    e.preventDefault();

    var $body = $('body');
    if ( $body.hasClass('offcanvas')  ) {
    	$body.removeClass('offcanvas');
    	$('body').find('.js-burger-toggle-menu').removeClass('open');
    }

    var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, 'easeInOutExpo');

  });

};


// load ajax page
var portfolioItemClick = function() {
	$('.ajax-load-page').on('click', function(e) {

		var id = $(this).data('id'),
			href = $(this).attr('href');

		if ( $('#portfolio-single-holder > div').length ) {
			$('#portfolio-single-holder > div').remove();
		}

		TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

		$('html, body').animate({
    	scrollTop: $('#portfolio-section').offset().top - 50
		}, 700, 'easeInOutExpo', function() {
		});

		setTimeout(function(){
			loadPortfolioSinglePage(id, href);
		}, 100);

		e.preventDefault();

	});

	// Close
	$('body').on('click', '.js-close-portfolio', function() {

		setTimeout(function(){
			$('html, body').animate({
	    	scrollTop: $('#portfolio-section').offset().top - 50
			}, 700, 'easeInOutExpo');
		}, 200);

		TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
		TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

		} });

	});
};

$(document).ajaxStop(function(){
	setTimeout(function(){
		TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });
	}, 400);
});

var loadPortfolioSinglePage = function(id, href) {
	let savedLang = getLanguage();
	if (!savedLang) {
		savedLang = 'en';
	}
	const dict = translations[savedLang] || translations['en'];

	$.ajax({
		url: href,
		type: 'GET',
		success: function(html) {

			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '50px', autoAlpha: 0, visibility: 'hidden', onComplete() {
				TweenMax.set('.portfolio-wrapper', { height: 0 });
			} })

			var pSingleHolder = $('#portfolio-single-holder');

			var getHTMLContent = $(html).find('.portfolio-single-wrap').html();

			// pSingleHolder.append(
			// 	'<div id="portfolio-single-'+id+
			// 	'" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Voltar</span><span class="icon-close2 wrap-icon-close"></span></span>' + getHTMLContent + '</div>'
			// );

			pSingleHolder.append(
				'<div id="portfolio-single-'+id+
				'" class="portfolio-single-inner">' +
				'<span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center">' +
				'<span class="close-portfolio-label">' + dict.projectBackLabel + '</span>' +
				'<span class="icon-close2 wrap-icon-close"></span>' +
				'</span>' +
				getHTMLContent +
				'</div>'
			);

			setTimeout(function() {
				owlSingleSlider();
			}, 10);

			setTimeout(function() {
				TweenMax.set('.portfolio-single-inner', { marginTop: '100px', autoAlpha: 0, display: 'none' });
				TweenMax.to('.portfolio-single-inner', .5, { marginTop: '0px', autoAlpha: 1, display: 'block', onComplete() {
					TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });
				} });
			}, 700 );
		}
	});

	return false;

};

var jarallaxPlugin = function() {
	$('.jarallax').jarallax({
    speed: 0.2
	});
	jarallax(document.querySelectorAll('.jarallax-video'), {
    speed: 0.2,
    videoSrc: 'https://www.youtube.com/watch?v=mwtbEGNABWU',
    videoStartTime: 8,
    videoEndTime: 70,
	});
};

var contactForm = function() {
	let savedLang = getLanguage();

	if (!savedLang) {
		savedLang = 'en';
	}

	const dict = translations[savedLang] || translations['en'];

	if ($('#contactForm').length > 0 ) {
		$( "#contactForm" ).validate( {
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
					minlength: 5
				}
			},
			messages: {
				name: dict.sendEmailNameErrorMessage,
				email: dict.sendEmailEmailAddressErrorMessage,
				message: dict.sendEmailMessageErrorMessage
			},
			errorElement: 'span',
			errorLabelContainer: '.form-error',
			/* submit via ajax */
			submitHandler: function(form) {
				var $submit = $('.submitting'),
					waitText = 'Submitting...';

				$.ajax({
					type: "POST",
					url: "https://formspree.io/f/mbjnkkyq",
					data: $(form).serialize(),

					beforeSend: function() {
						$submit.css('display', 'block').text(waitText);
					},
					success: function(response) {
						if (response.status === 200) {
							$('#form-message-warning').hide();
							setTimeout(function(){
								$('#contactForm').fadeOut();
							}, 1000);
							setTimeout(function(){
								$('#form-message-success').fadeIn();
							}, 1400);
						} else {
							$('#form-message-warning').html(response.statusText);
							$('#form-message-warning').fadeIn();
							$submit.css('display', 'none');
						}
					},
					error: function() {
						// Doing the success here anyway as the free plan keeps getting redirecting, and we are running into a CORS error
						$('#form-message-warning').hide();
						setTimeout(function(){
							$('#contactForm').fadeOut();
						}, 1000);
						setTimeout(function(){
							$('#form-message-success').fadeIn();
						}, 1400);
						// $('#form-message-warning').html("Something went wrong. Please try again.");
						// $('#form-message-warning').fadeIn();
						$submit.css('display', 'none');
					}
				});
			}
		});
	}
};

// var contactForm = function() {
// 	if ($('#contactForm').length > 0 ) {
// 		$( "#contactForm" ).validate( {
// 			rules: {
// 				name: "required",
// 				email: {
// 					required: true,
// 					email: true
// 				},
// 				message: {
// 					required: true,
// 					minlength: 5
// 				}
// 			},
// 			messages: {
// 				name: "Please enter your name",
// 				email: "Please enter a valid email address",
// 				message: "Please enter a message"
// 			},
// 			errorElement: 'span',
// 			errorLabelContainer: '.form-error',
// 			/* submit via ajax */
// 			submitHandler: function(form) {
// 				var $submit = $('.submitting'),
// 					waitText = 'Submitting...';
//
// 				$.ajax({
// 			      type: "POST",
// 			      url: "php/send-email.php",
// 			      data: $(form).serialize(),
//
// 			      beforeSend: function() {
// 			      	$submit.css('display', 'block').text(waitText);
// 			      },
// 			      success: function(msg) {
// 	               if (msg == 'OK') {
// 	               	$('#form-message-warning').hide();
// 			            setTimeout(function(){
// 	               		$('#contactForm').fadeOut();
// 	               	}, 1000);
// 			            setTimeout(function(){
// 			               $('#form-message-success').fadeIn();
// 	               	}, 1400);
//
// 		            } else {
// 		               $('#form-message-warning').html(msg);
// 			            $('#form-message-warning').fadeIn();
// 			            $submit.css('display', 'none');
// 		            }
// 			      },
// 			      error: function() {
// 			      	$('#form-message-warning').html("Something went wrong. Please try again.");
// 			         $('#form-message-warning').fadeIn();
// 			         $submit.css('display', 'none');
// 			      }
// 		      });
// 	  		}
//
// 		} );
// 	}
// };

var stickyFillPlugin = function() {
	var elements = document.querySelectorAll('.unslate_co--sticky');
	Stickyfill.add(elements);
};

var animateReveal = function() {
	var controller = new ScrollMagic.Controller();

	var greveal = $('.gsap-reveal');

	// gsap reveal
	$('.gsap-reveal').each(function() {
		$(this).append('<span class="cover"></span>');
	});
	if ( greveal.length ) {
		var revealNum = 0;
		greveal.each(function() {
			var cover = $(this).find('.cover');

			var tl = new TimelineMax();

			setTimeout(function() {
				tl
					.fromTo(cover, 2, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease:Expo.easeInOut })
			}, revealNum * 0);

			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: "0%",
				reverse: false,
				offset: "-300%",
			})
			.setTween(tl)
			.addTo(controller);

			revealNum++;

		});
	}

	// gsap reveal hero
	$('.gsap-reveal-hero').each(function() {
		var html = $(this).html();
		$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
	});
	var grevealhero = $('.gsap-reveal-hero');

	if ( grevealhero.length ) {
		var heroNum = 0;
		grevealhero.each(function() {

			var cover = $(this).find('.cover'),
				revealContent = $(this).find('.reveal-content');

			var tl2 = new TimelineMax();

			setTimeout(function() {

				tl2
					.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						tl2.set(revealContent, { x: 0 });
						tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
					} } )
			}, heroNum * 0 );

			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: "0%",
				reverse: false,
				offset: "-300%",
			})
			.setTween(tl2)
			.addTo(controller);

			heroNum++;
		});
	}
}

// const setLanguage2 = function(lang) {
// 	const cookieName = 'lang_code';
// 	document.cookie = `${cookieName}=${lang}; path=/`;
//
// 	updateContent(lang)
// }

const getLanguage = function() {
	const name = 'lang_code=';
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookies = decodedCookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		let c = cookies[i].trim();
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}

const updateContent = function(lang) {
	const dict = translations[lang] || translations['en'];
	document.querySelector('#copyright .text-part').textContent = dict.copyrightStart;
	document.querySelector('#copyright .text-end').textContent = dict.copyrightEnd;

	document.querySelector('#contact-information .country').textContent = dict.contactInformationCountry;
	document.querySelector('#contact-information .country-value').textContent = dict.contactInformationCountryValue;
	document.querySelector('#contact-information .email').textContent = dict.contactInformationEmail;
	document.querySelector('#send-email .name-label').textContent = dict.sendEmailNameLabel;
	document.querySelector('#send-email .email-label').textContent = dict.sendEmailEmailLabel;
	document.querySelector('#send-email .message-header').textContent = dict.sendEmailMessageHeader;
	document.querySelector('#send-email .submit-label').value = dict.sendEmailSubmitButtonLabel;
	document.querySelector('#send-email .success-message').textContent = dict.sendEmailSuccessMessage;
	document.querySelector('#contact-section .header').textContent = dict.sendEmailHeader;

	document.querySelector('#skills-section .header').textContent = dict.skillsHeader;
	document.querySelector('#skills-section .traditional-design').textContent = dict.skillsTraditionalDesign;
	document.querySelector('#skills-section .concept-art').textContent = dict.skillsConceptArt;
	document.querySelector('#skills-section .graphic-design').textContent = dict.skillsGraphicDesign;
	document.querySelector('#skills-section .anatomy').textContent = dict.skillsAnatomy;
	document.querySelector('#skills-section .cartoon-style').textContent = dict.skillsCartoonStyle;
	document.querySelector('#skills-section .typography').textContent = dict.skillsTypography;
	document.querySelector('#skills-section .logo-design').textContent = dict.skillsLogoDesign;
	document.querySelector('#skills-section .vector-illustration').textContent = dict.skillsVectorIllustration;
	document.querySelector('#skills-section .character-design').textContent = dict.skillsCharacterDesign;
	document.querySelector('#skills-section .stop-motion').textContent = dict.skillsStopMotion;
	document.querySelector('#skills-section .motion-design').textContent = dict.skillsMotionDesign;
	document.querySelector('#skills-section .inkscape').textContent = dict.skillsInkscape;
	document.querySelector('#skills-section .adobe-illustrator').textContent = dict.skillsAdobeIllustrator;
	document.querySelector('#skills-section .adobe-indesign').textContent = dict.skillsAdobeInDesign;
	document.querySelector('#skills-section .adobe-photoshop').textContent = dict.skillsAdobePhotoshop;
	document.querySelector('#skills-section .krita').textContent = dict.skillsKrita;

	document.querySelector('#services-section .header').textContent = dict.servicesHeader;
	document.querySelector('#services-section .character-design').innerHTML = dict.servicesCharacterDesignHeader;
	document.querySelector('#services-section .character-design-content').textContent = dict.servicesCharacterDesignContent;
	document.querySelector('#services-section .vector-illustrations').innerHTML = dict.servicesVectorIllustrationsHeader;
	document.querySelector('#services-section .vector-illustrations-content').textContent = dict.servicesVectorIllustrationsContent;
	document.querySelector('#services-section .watercolor-illustrations').innerHTML = dict.servicesWatercolorIllustrationsHeader;
	document.querySelector('#services-section .watercolor-illustrations-content').textContent = dict.servicesWatercolorIllustrationsContent;
	document.querySelector('#services-section .traditional-illustrations').innerHTML = dict.servicesTraditionalIllustrationsHeader;
	document.querySelector('#services-section .traditional-illustrations-content').textContent = dict.servicesTraditionalIllustrationsContent;
	document.querySelector('#services-section .surface-design').innerHTML = dict.servicesSurfaceDesignHeader;
	document.querySelector('#services-section .surface-design-content').textContent = dict.servicesSurfaceDesignContent;
	document.querySelector('#services-section .brand-design').innerHTML = dict.servicesBrandDesignHeader;
	document.querySelector('#services-section .brand-design-content').textContent = dict.servicesBrandDesignContent;

	document.querySelector('#about-section .header').textContent = dict.aboutMeHeader;
	document.querySelector('#about-section .content-header').textContent = dict.aboutMeContentHeader;
	document.querySelector('#about-section .content1').textContent = dict.aboutMeContent1;
	document.querySelector('#about-section .content2').textContent = dict.aboutMeContent2;

	document.querySelector('#portfolio-section .header').textContent = dict.portfolioHeader;
	document.querySelector('#portfolio-section .filter-label').textContent = dict.portfolioFilterLabel;
	document.querySelector('#portfolio-section .filter-all').textContent = dict.portfolioFilterAllLabel;
	document.querySelector('#portfolio-section .filter-illustration').textContent = dict.portfolioFilterIllustrationLabel;
	document.querySelector('#portfolio-section .filter-branding').textContent = dict.portfolioFilterBrandingLabel;
	document.querySelector('#portfolio-section .filter-painting').textContent = dict.portfolioFilterPaintingLabel;
	document.querySelector('#portfolio-section .filter-vector').textContent = dict.portfolioFilterVectorLabel;
	document.querySelector('#portfolio-section .filter-watercolor').textContent = dict.portfolioFilterWatercolorLabel;
	document.querySelector('#portfolio-section .filter-sketch').textContent = dict.portfolioFilterSketchLabel;
	document.querySelector('#portfolio-section .filter-crochet').textContent = dict.portfolioFilterCrochetLabel;
	document.querySelector('#portfolio-section .filter-other').textContent = dict.portfolioFilterOtherLabel;

	document.querySelector('#home-section .mouse-label').textContent = dict.homeMouseLabel;
	document.querySelector('#home-section .heading .reveal-content').textContent  = dict.homeHeader;
	document.querySelector('#home-section .subheading .reveal-content').textContent = dict.homeSubHeader;

	document.querySelector('#navigation-section .home').textContent = dict.navigationHomeLabel;
	document.querySelector('#navigation-section .portfolio').textContent = dict.navigationPortfolioLabel;
	document.querySelector('#navigation-section .about').textContent = dict.navigationAboutLabel;
	document.querySelector('#navigation-section .services').textContent = dict.navigationServiceLabel;
	document.querySelector('#navigation-section .skills').textContent = dict.navigationSkillsLabel;
	document.querySelector('#navigation-section .contact').textContent = dict.navigationContactLabel;
	document.querySelector('#navigation-section .menu').textContent = dict.navigationMenuLabel;
	document.querySelector('#navigation-section-mobile .menu-close').textContent = dict.navigationMenuCloseLabel;
	if (document.querySelector('#navigation-section-mobile .home')) {
		document.querySelector('#navigation-section-mobile .home').textContent = dict.navigationHomeLabel;
	}
	if (document.querySelector('#navigation-section-mobile .portfolio')) {
		document.querySelector('#navigation-section-mobile .portfolio').textContent = dict.navigationPortfolioLabel;
	}
	if (document.querySelector('#navigation-section-mobile .about')) {
		document.querySelector('#navigation-section-mobile .about').textContent = dict.navigationAboutLabel;
	}
	if (document.querySelector('#navigation-section-mobile .services')) {
		document.querySelector('#navigation-section-mobile .services').textContent = dict.navigationServiceLabel;
	}
	if (document.querySelector('#navigation-section-mobile .skills')) {
		document.querySelector('#navigation-section-mobile .skills').textContent = dict.navigationSkillsLabel;
	}
	if (document.querySelector('#navigation-section-mobile .contact')) {
		document.querySelector('#navigation-section-mobile .contact').textContent = dict.navigationContactLabel;
	}
	if (document.querySelector('#navigation-section-mobile .menu')) {
		document.querySelector('#navigation-section-mobile .menu').textContent = dict.navigationMenuLabel;
	}

	document.querySelector('#dropdownMenu .dutch').textContent = dict.languageSwitcherDutch;
	document.querySelector('#dropdownMenu .english').textContent = dict.languageSwitcherEnglish;
	document.querySelector('#dropdownMenu .portuguese').textContent = dict.languageSwitcherPortuguese;
	document.querySelector('#dropdownMenu2 .dutch').textContent = dict.languageSwitcherDutch;
	document.querySelector('#dropdownMenu2 .english').textContent = dict.languageSwitcherEnglish;
	document.querySelector('#dropdownMenu2 .portuguese').textContent = dict.languageSwitcherPortuguese;

	document.querySelector('#posts .programmer-monkey-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryVector}`;
	document.querySelector('#posts .programmer-monkey').textContent = dict.portfolioProgrammerMonkey;
	document.querySelector('#posts .programmer-monkey-data-caption').setAttribute('data-caption', dict.portfolioProgrammerMonkey);
	document.querySelector('#posts .virtual-identity-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryVector}`;
	document.querySelector('#posts .virtual-identity').textContent = dict.portfolioVirtualIdentity;
	document.querySelector('#posts .virtual-identity-data-caption').setAttribute('data-caption', dict.portfolioVirtualIdentity);
	document.querySelector('#posts .study-by-reference-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .study-by-reference').textContent = dict.portfolioStudyByReference;
	document.querySelector('#posts .study-by-reference-data-caption').setAttribute('data-caption', dict.portfolioStudyByReference);
	document.querySelector('#posts .beers-and-company-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryVector}`;
	document.querySelector('#posts .beers-and-company').textContent = dict.portfolioBeersAndCompany;
	document.querySelector('#posts .beers-and-company-data-caption').setAttribute('data-caption', dict.portfolioBeersAndCompany);
	document.querySelector('#posts .cartoon-portrait-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryVector}`;
	document.querySelector('#posts .cartoon-portrait').textContent = dict.portfolioCartoonPortrait;
	document.querySelector('#posts .cartoon-portrait-data-caption').setAttribute('data-caption', dict.portfolioCartoonPortrait);
	document.querySelector('#posts .forest-nymph-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryVector}`;
	document.querySelector('#posts .forest-nymph').textContent = dict.portfolioForestNymph;
	document.querySelector('#posts .forest-nymph-data-caption').setAttribute('data-caption', dict.portfolioForestNymph);
	document.querySelector('#posts .forest-dryad-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryVector}`;
	document.querySelector('#posts .forest-dryad').textContent = dict.portfolioForestDryad;
	document.querySelector('#posts .forest-dryad-data-caption').setAttribute('data-caption', dict.portfolioForestDryad);
	document.querySelector('#posts .mushrooms-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryWatercolor}`;
	document.querySelector('#posts .mushrooms').textContent = dict.portfolioMushrooms;
	document.querySelector('#posts .mushrooms-data-caption').setAttribute('data-caption', dict.portfolioMushrooms);
	document.querySelector('#posts .puppy-dragon-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .puppy-dragon').textContent = dict.portfolioPuppyDragon;
	document.querySelector('#posts .puppy-dragon-data-caption').setAttribute('data-caption', dict.portfolioPuppyDragon);
	document.querySelector('#posts .love-in-the-air-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .love-in-the-air').textContent = dict.portfolioLoveInTheAir;
	document.querySelector('#posts .love-in-the-air-data-caption').setAttribute('data-caption', dict.portfolioLoveInTheAir);
	document.querySelector('#posts .loish-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .loish').textContent = dict.portfolioLoish;
	document.querySelector('#posts .loish-data-caption').setAttribute('data-caption', dict.portfolioLoish);
	document.querySelector('#posts .study-with-reference-dwarf-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .study-with-reference-dwarf').textContent = dict.portfolioStudyByReferenceDwarf;
	document.querySelector('#posts .study-with-reference-dwarf-data-caption').setAttribute('data-caption', dict.portfolioStudyByReferenceDwarf);
	document.querySelector('#posts .medieval-adventures-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategorySketch}, ${dict.portfolioCategoryWatercolor}`;
	document.querySelector('#posts .medieval-adventures').textContent = dict.portfolioMedievalAdventures;
	document.querySelector('#posts .emerald-canopy-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .emerald-canopy').textContent = dict.portfolioEmeraldCanopy;
	document.querySelector('#posts .emerald-canopy-data-caption').setAttribute('data-caption', dict.portfolioEmeraldCanopy);
	document.querySelector('#posts .cartoon-portrait-sister-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .cartoon-portrait-sister').textContent = dict.portfolioCartoonPortraitSister;
	document.querySelector('#posts .cartoon-portrait-sister-data-caption').setAttribute('data-caption', dict.portfolioCartoonPortraitSister);
	document.querySelector('#posts .murloc-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .murloc').textContent = dict.portfolioMurloc;
	document.querySelector('#posts .murloc-data-caption').setAttribute('data-caption', dict.portfolioMurloc);
	document.querySelector('#posts .self-portrait-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryMarker}`;
	document.querySelector('#posts .self-portrait').textContent = dict.portfolioSelfPortrait;
	document.querySelector('#posts .self-portrait-data-caption').setAttribute('data-caption', dict.portfolioSelfPortrait);
	document.querySelector('#posts .ruby-vision-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryWatercolor}`;
	document.querySelector('#posts .ruby-vision').textContent = dict.portfolioRubyVision;
	document.querySelector('#posts .ruby-vision-data-caption').setAttribute('data-caption', dict.portfolioRubyVision);
	document.querySelector('#posts .ioruba-the-magician-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .ioruba-the-magician').textContent = dict.portfolioIorubatheMagician;
	document.querySelector('#posts .ioruba-the-magician-data-caption').setAttribute('data-caption', dict.portfolioIorubatheMagician);
	document.querySelector('#posts .black-forest-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryWatercolor}`;
	document.querySelector('#posts .black-forest').textContent = dict.portfolioBlackForest;
	document.querySelector('#posts .black-forest-data-caption').setAttribute('data-caption', dict.portfolioBlackForest);
	document.querySelector('#posts .blonde-beauty-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategorySoftPastel}`;
	document.querySelector('#posts .blonde-beauty').textContent = dict.portfolioBlondeBeauty;
	document.querySelector('#posts .blonde-beauty-data-caption').setAttribute('data-caption', dict.portfolioBlondeBeauty);
	document.querySelector('#posts .marilyn-monroe-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .marilyn-monroe').textContent = dict.portfolioMarilynMonroe;
	document.querySelector('#posts .marilyn-monroe-data-caption').setAttribute('data-caption', dict.portfolioMarilynMonroe);
	document.querySelector('#posts .palette-of-flavors-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .palette-of-flavors').textContent = dict.portfolioPaletteOfFlavors;
	document.querySelector('#posts .palette-of-flavors-data-caption').setAttribute('data-caption', dict.portfolioPaletteOfFlavors);
	document.querySelector('#posts .richness-of-nature-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .richness-of-nature').textContent = dict.portfolioRichnessOfNature;
	document.querySelector('#posts .richness-of-nature-data-caption').setAttribute('data-caption', dict.portfolioRichnessOfNature);
	document.querySelector('#posts .floral-harvest-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .floral-harvest').textContent = dict.portfolioFloralHarvest;
	document.querySelector('#posts .floral-harvest-data-caption').setAttribute('data-caption', dict.portfolioFloralHarvest);
	document.querySelector('#posts .khal-drogo-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategorySketch}`;
	document.querySelector('#posts .khal-drogo').textContent = dict.portfolioKhalDrogo;
	document.querySelector('#posts .khal-drogo-data-caption').setAttribute('data-caption', dict.portfolioKhalDrogo);
	document.querySelector('#posts .lovers-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategorySketch}`;
	document.querySelector('#posts .lovers').textContent = dict.portfolioLovers;
	document.querySelector('#posts .lovers-data-caption').setAttribute('data-caption', dict.portfolioLovers);
	document.querySelector('#posts .inner-elf-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategorySketch}`;
	document.querySelector('#posts .inner-elf').textContent = dict.portfolioInnerElf;
	document.querySelector('#posts .inner-elf-data-caption').setAttribute('data-caption', dict.portfolioInnerElf);
	document.querySelector('#posts .vintage-coast-cruise-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryWatercolor}`;
	document.querySelector('#posts .vintage-coast-cruise').textContent = dict.portfolioVintageCoastCruise;
	document.querySelector('#posts .vintage-coast-cruise-data-caption').setAttribute('data-caption', dict.portfolioVintageCoastCruise);
	document.querySelector('#posts .dancing-queen-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryWatercolor}`;
	document.querySelector('#posts .dancing-queen').textContent = dict.portfolioDancingQueen;
	document.querySelector('#posts .dancing-queen-data-caption').setAttribute('data-caption', dict.portfolioDancingQueen);
	document.querySelector('#posts .gentle-stillness-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryPainting}`;
	document.querySelector('#posts .gentle-stillness').textContent = dict.portfolioGentleStillness;
	document.querySelector('#posts .gentle-stillness-data-caption').setAttribute('data-caption', dict.portfolioGentleStillness);
	document.querySelector('#posts .ethi-toys-categories').textContent = `${dict.portfolioCategoryBranding}, ${dict.portfolioCategoryCrochet}, ${dict.portfolioCategoryVector}`;
	document.querySelector('#posts .ethi-toys').textContent = dict.portfolioEthiToys
	document.querySelector('#posts .menezinha-papercraft-categories').textContent = dict.portfolioCategoryBranding;
	document.querySelector('#posts .menezinha-papercraft').textContent = dict.portfolioMenezinhaPapercraft
	document.querySelector('#posts .love-with-paws-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategorySketch}`;
	document.querySelector('#posts .love-with-paws').textContent = dict.portfolioLoveWithPaws
	document.querySelector('#posts .love-with-paws-data-caption').setAttribute('data-caption', dict.portfolioLoveWithPaws);
	document.querySelector('#posts .face-concepts-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategorySketch}`;
	document.querySelector('#posts .face-concepts').textContent = dict.portfolioFaceConcepts
	document.querySelector('#posts .face-concepts-data-caption').setAttribute('data-caption', dict.portfolioFaceConcepts);
	document.querySelector('#posts .v-for-vendetta-categories').textContent = `${dict.portfolioCategoryIllustration}, ${dict.portfolioCategoryInk}`;
	document.querySelector('#posts .v-for-vendetta').textContent = dict.portfolioVForVendetta
	document.querySelector('#posts .v-for-vendetta-data-caption').setAttribute('data-caption', dict.portfolioVForVendetta);

	// Also update the selector
	const switcher = document.getElementById("languageSwitcher");
	if (switcher) {
		switcher.value = lang;
	}
}

const updateContent2 = function(lang) {
	const dict = translations[lang] || translations['en'];
	document.querySelector('#navigation-section .home').textContent = dict.navigationHomeLabel;
	document.querySelector('#navigation-section .portfolio').textContent = dict.navigationPortfolioLabel;
	document.querySelector('#navigation-section .about').textContent = dict.navigationAboutLabel;
	document.querySelector('#navigation-section .services').textContent = dict.navigationServiceLabel;
	document.querySelector('#navigation-section .skills').textContent = dict.navigationSkillsLabel;
	document.querySelector('#navigation-section .contact').textContent = dict.navigationContactLabel;
	document.querySelector('#navigation-section .menu').textContent = dict.navigationMenuLabel;
	document.querySelector('#navigation-section-mobile .menu-close').textContent = dict.navigationMenuCloseLabel;

	// document.querySelector('#languageSwitcher .dutch').textContent = dict.languageSwitcherDutch;
	// document.querySelector('#languageSwitcher .english').textContent = dict.languageSwitcherEnglish;
	// document.querySelector('#languageSwitcher .portuguese').textContent = dict.languageSwitcherPortuguese;

	// Also update the selector
	const switcher = document.getElementById("languageSwitcher");
	if (switcher) {
		switcher.value = lang;
	}
}

//
// document.addEventListener("DOMContentLoaded", function() {
// 	let savedLang = getLanguage() || 'en';
//
// 	updateContent2(savedLang);
//
// 	const switcher = document.getElementById("languageSwitcher");
// 	if (switcher) {
// 		switcher.value = savedLang;
// 	}
// });

const translations = {
	nl: {
		copyrightStart: "Auteursrecht",
		copyrightEnd: "Alle rechten voorbehouden",
		contactInformationCountry: "Land",
		contactInformationCountryValue: "Nederland",
		contactInformationEmail: "Email",
		sendEmailNameLabel: "Naam",
		sendEmailEmailLabel: "Email",
		sendEmailMessageHeader: "Schrijf uw bericht..",
		sendEmailSubmitButtonLabel: "Bericht Verzenden",
		sendEmailSuccessMessage: "Uw bericht is verzonden, bedankt!",
		sendEmailHeader: "Neem contact op",
		sendEmailNameErrorMessage: "Voer alstublieft uw naam in",
		sendEmailEmailAddressErrorMessage: "Voer een geldig e-mailadres in",
		sendEmailMessageErrorMessage: "Voer alstublieft een bericht in",
		skillsHeader: "Mijn Vaardigheden",
		skillsTraditionalDesign: "Traditioneel Tekenwerk",
		skillsConceptArt: "Conceptkunst",
		skillsGraphicDesign: "Grafisch Ontwerp",
		skillsAnatomy: "Anatomie",
		skillsCartoonStyle: "Cartoonstijl",
		skillsTypography: "Typografie",
		skillsLogoDesign: "Logo-ontwerp",
		skillsVectorIllustration: "Vectorillustratie",
		skillsCharacterDesign: "Personageontwerp",
		skillsStopMotion: "Stop-motion",
		skillsMotionDesign: "Motion Design",
		skillsInkscape: "Inkscape",
		skillsAdobeIllustrator: "Adobe Illustrator",
		skillsAdobeInDesign: "Adobe InDesign",
		skillsAdobePhotoshop: "Adobe Photoshop",
		skillsKrita: "Krita",
		servicesHeader: "Mijn Diensten",
		servicesCharacterDesignHeader: "Personage <br> Ontwerp",
		servicesCharacterDesignContent: "Het creëren van een overtuigend en charismatisch personage. Meer dan alleen uiterlijk – jouw personage heeft een verhaal.",
		servicesVectorIllustrationsHeader: "Vector <br> Illustraties",
		servicesVectorIllustrationsContent: "Ideaal voor scherpe, heldere ontwerpen en veelzijdige toepassingen. Eenvoudig en verfijnd ontwerp.",
		servicesWatercolorIllustrationsHeader: "Aquarel <br> Illustraties",
		servicesWatercolorIllustrationsContent: "Vloeiende kunstwerken met organische texturen. Expressief en onvoorspelbaar uiterlijk.",
		servicesTraditionalIllustrationsHeader: "Traditionele <br> Illustraties",
		servicesTraditionalIllustrationsContent: "Met de hand gemaakte kunstwerken met traditionele technieken, vol authenticiteit en nostalgische charme.",
		servicesSurfaceDesignHeader: "Oppervlakte <br> Ontwerp",
		servicesSurfaceDesignContent: "Ontwerpen van patronen en motieven voor diverse oppervlakken, van textiel tot behang – kunst en functionaliteit gecombineerd.",
		servicesBrandDesignHeader: "Merk <br> Mascotte",
		servicesBrandDesignContent: "Een charismatisch en gedenkwaardig figuur dat de identiteit van een merk belichaamt en zorgt voor herkenning en betrokkenheid.",
		aboutMeHeader: "Over Mij",
		aboutMeContentHeader: "Zullen we samen iets geweldigs maken?",
		aboutMeContent1: "Hallo, mijn naam is Darlene Menezes. Ik heb een diploma in Beeldende Kunst en heb twee jaar Design gestudeerd. Ik ben gepassioneerd door Kunstgeschiedenis, Design, Literatuur, Natuur en Cultuur. De veelzijdigheid van mijn interesses stelt me in staat om te experimenteren en beelden te creëren met diverse technieken en stijlen, geïnspireerd door zowel klassieke werken als moderne, vereenvoudigde oplossingen.",
		aboutMeContent2: "Door artistieke gevoeligheid te combineren met de precisie van design, integreer ik mijn inspiratiebronnen op een vloeiende manier in mijn werk. Ik experimenteer voortdurend met nieuwe technieken, verken stijlen en ga graag nieuwe uitdagingen aan. Ik zou graag jouw ideeën tot leven brengen met creativiteit en precisie.",
		portfolioHeader: "Portfolio",
		portfolioFilterLabel: "Filteren",
		portfolioFilterAllLabel: "Alles",
		portfolioFilterIllustrationLabel: "Illustratie",
		portfolioFilterBrandingLabel: "Branding",
		portfolioFilterPaintingLabel: "Schilderij",
		portfolioFilterVectorLabel: "Vector",
		portfolioFilterWatercolorLabel: "Aquarel",
		portfolioFilterSketchLabel: "Schets",
		portfolioFilterCrochetLabel: "Haken",
		portfolioFilterOtherLabel: "Overig",
		homeMouseLabel: "Scrollen",
		homeHeader: "Welkom",
		homeSubHeader: "Ik ben een veelzijdige kunstenaar, beheers diverse artistieke technieken en verken graag nieuwe visuele mogelijkheden, zowel digitaal als traditioneel.",
		navigationHomeLabel: "Start",
		navigationPortfolioLabel: "Portfolio",
		navigationAboutLabel: "Over Mij",
		navigationServiceLabel: "Diensten",
		navigationSkillsLabel: "Vaardigheden",
		navigationContactLabel: "Contact",
		navigationMenuLabel: "Menu",
		navigationMenuCloseLabel: "Sluiten",
		languageSwitcherDutch: "Nederlands",
		languageSwitcherEnglish: "Engels",
		languageSwitcherPortuguese: "Portugees",
		portfolioCategoryIllustration: "illustratie",
		portfolioCategoryVector: "vector",
		portfolioCategoryPainting: "schilderij",
		portfolioCategoryWatercolor: "aquarel",
		portfolioCategorySketch: "schets",
		portfolioCategoryMarker: "marker",
		portfolioCategorySoftPastel: "zacht pastel",
		portfolioCategoryCrochet: "haken",
		portfolioCategoryBranding: "branding",
		portfolioCategoryInk: "inkt",
		portfolioProgrammerMonkey: "Programmeeraap",
		portfolioVirtualIdentity: "Virtuele identiteit",
		portfolioStudyByReference: "Studie naar referentie",
		portfolioBeersAndCompany: "Bier en gezelschap",
		portfolioCartoonPortrait: "Cartoonportret",
		portfolioForestNymph: "Bosnimf",
		portfolioForestDryad: "Bosdríade",
		portfolioMushrooms: "Paddenstoelen",
		portfolioPuppyDragon: "Hondendraakje",
		portfolioLoveInTheAir: "Liefde hangt in de lucht",
		portfolioLoish: "Loish",
		portfolioStudyByReferenceDwarf: "Studie naar referentie",
		portfolioMedievalAdventures: "Middeleeuwse avonturen",
		portfolioEmeraldCanopy: "Smaragdgroen bladerdak",
		portfolioCartoonPortraitSister: "Cartoonportret",
		portfolioMurloc: "Murloc",
		portfolioSelfPortrait: "Zelfportret",
		portfolioRubyVision: "Robijnen visie",
		portfolioIorubatheMagician: "Iorubá de tovenaar",
		portfolioBlackForest: "Zwarte woud",
		portfolioBlondeBeauty: "Blonde schoonheid",
		portfolioMarilynMonroe: "Marilyn Monroe",
		portfolioPaletteOfFlavors: "Een palet van smaken",
		portfolioRichnessOfNature: "De rijkdom van de natuur",
		portfolioFloralHarvest: "Bloemenoogst",
		portfolioKhalDrogo: "Khal Drogo",
		portfolioLovers: "Geliefden",
		portfolioInnerElf: "De innerlijke elf",
		portfolioVintageCoastCruise: "Vintage kustcruise",
		portfolioDancingQueen: "Danskoningin",
		portfolioGentleStillness: "Zachte stilte",
		portfolioEthiToys: "Ethi toys",
		portfolioMenezinhaPapercraft: "Menezinha papercraft",
		portfolioLoveWithPaws: "Liefde met pootjes",
		portfolioFaceConcepts: "Gezichtsconcepten",
		portfolioVForVendetta: "V for Vendetta",
		projectBackLabel: "Terug"
	},
	en: {
		copyrightStart: "Copyright",
		copyrightEnd: "All rights reserved",
		contactInformationCountry: "Country",
		contactInformationCountryValue: "Netherlands",
		contactInformationEmail: "Email",
		sendEmailNameLabel: "Name",
		sendEmailEmailLabel: "Email",
		sendEmailMessageHeader: "Write your message...",
		sendEmailSubmitButtonLabel: "Send Message",
		sendEmailSuccessMessage: "Your message has been sent, thank you!",
		sendEmailHeader: "Get in touch",
		sendEmailNameErrorMessage: "Please enter your name",
		sendEmailEmailAddressErrorMessage: "Please enter a valid email address",
		sendEmailMessageErrorMessage: "Please enter a message",
		skillsHeader: "My Skills",
		skillsTraditionalDesign: "Traditional Drawing",
		skillsConceptArt: "Concept Art",
		skillsGraphicDesign: "Graphic Design",
		skillsAnatomy: "Anatomy",
		skillsCartoonStyle: "Cartoon Style",
		skillsTypography: "Typography",
		skillsLogoDesign: "Logo Design",
		skillsVectorIllustration: "Vector Illustration",
		skillsCharacterDesign: "Character Design",
		skillsStopMotion: "Stop Motion",
		skillsMotionDesign: "Motion Design",
		skillsInkscape: "Inkscape",
		skillsAdobeIllustrator: "Adobe Illustrator",
		skillsAdobeInDesign: "Adobe InDesign",
		skillsAdobePhotoshop: "Adobe Photoshop",
		skillsKrita: "Krita",
		servicesHeader: "My Services",
		servicesCharacterDesignHeader: "Character <br> Design",
		servicesCharacterDesignContent: "Creation of a convincing and charismatic character. More than just looks, your character has a story.",
		servicesVectorIllustrationsHeader: "Vector <br> Illustrations",
		servicesVectorIllustrationsContent: "Ideal for sharp, clean designs and versatile applications. Simple and sophisticated design.",
		servicesWatercolorIllustrationsHeader: "Watercolor <br> Illustrations",
		servicesWatercolorIllustrationsContent: "Fluid artwork with organic textures. Expressive and unpredictable appearance.",
		servicesTraditionalIllustrationsHeader: "Traditional <br> Illustrations",
		servicesTraditionalIllustrationsContent: "Handmade artworks using traditional techniques, with authenticity and nostalgic charm.",
		servicesSurfaceDesignHeader: "Surface <br> Design",
		servicesSurfaceDesignContent: "Creating patterns and designs for various surfaces, from textiles to wallpapers, blending art with functionality.",
		servicesBrandDesignHeader: "Brand <br> Mascot",
		servicesBrandDesignContent: "A charismatic and memorable figure to embody a brand's identity, fostering connection and brand recognition.",
		aboutMeHeader: "About Me",
		aboutMeContentHeader: "Shall we create something amazing together?",
		aboutMeContent1: "Hi, my name is Darlene Menezes. I have a degree in Visual Arts and studied Design for two years. I'm passionate about Art History, Design, Literature, Nature, and Culture. The diversity of my interests allows me to experiment and create images using various techniques and styles, whether inspired by classical works or modern, simplified solutions.",
		aboutMeContent2: "Blending artistic sensitivity with design precision, I fluidly integrate my references into my work. I'm always experimenting with new techniques, exploring styles, and looking for new challenges. I'd love to bring your ideas to life with creativity and precision.",
		portfolioHeader: "Portfolio",
		portfolioFilterLabel: "Filter",
		portfolioFilterAllLabel: "All",
		portfolioFilterIllustrationLabel: "Illustration",
		portfolioFilterBrandingLabel: "Branding",
		portfolioFilterPaintingLabel: "Painting",
		portfolioFilterVectorLabel: "Vector",
		portfolioFilterWatercolorLabel: "Watercolor",
		portfolioFilterSketchLabel: "Sketch",
		portfolioFilterCrochetLabel: "Crochet",
		portfolioFilterOtherLabel: "Other",
		homeMouseLabel: "Scroll",
		homeHeader: "Welcome",
		homeSubHeader: "I'm a versatile artist, skilled in various artistic techniques, and I love exploring new visual possibilities, whether digital or traditional.",
		navigationHomeLabel: "Home",
		navigationPortfolioLabel: "Portfolio",
		navigationAboutLabel: "About Me",
		navigationServiceLabel: "Services",
		navigationSkillsLabel: "Skills",
		navigationContactLabel: "Contact",
		navigationMenuLabel: "Menu",
		navigationMenuCloseLabel: "Close",
		languageSwitcherDutch: "Dutch",
		languageSwitcherEnglish: "English",
		languageSwitcherPortuguese: "Portuguese",
		portfolioCategoryIllustration: "illustration",
		portfolioCategoryVector: "vector",
		portfolioCategoryPainting: "painting",
		portfolioCategoryWatercolor: "watercolor",
		portfolioCategorySketch: "sketch",
		portfolioCategoryMarker: "marker",
		portfolioCategorySoftPastel: "soft pastel",
		portfolioCategoryCrochet: "crochet",
		portfolioCategoryBranding: "branding",
		portfolioCategoryInk: "ink",
		portfolioProgrammerMonkey: "Code monkey",
		portfolioVirtualIdentity: "Virtual identity",
		portfolioStudyByReference: "Study from reference",
		portfolioBeersAndCompany: "Beers and company",
		portfolioCartoonPortrait: "Cartoon portrait",
		portfolioForestNymph: "Forest nymph",
		portfolioForestDryad: "Forest dryad",
		portfolioMushrooms: "Mushrooms",
		portfolioPuppyDragon: "Puppy dragon",
		portfolioLoveInTheAir: "Love is in the air",
		portfolioLoish: "Loish",
		portfolioStudyByReferenceDwarf: "Study from reference",
		portfolioMedievalAdventures: "Medieval adventures",
		portfolioEmeraldCanopy: "Emerald canopy",
		portfolioCartoonPortraitSister: "Cartoon portrait",
		portfolioMurloc: "Murloc",
		portfolioSelfPortrait: "Self-portrait",
		portfolioRubyVision: "Ruby vision",
		portfolioIorubatheMagician: "Ioruba the magician",
		portfolioBlackForest: "Black forest",
		portfolioBlondeBeauty: "Blonde beauty",
		portfolioMarilynMonroe: "Marilyn Monroe",
		portfolioPaletteOfFlavors: "A palette of flavors",
		portfolioRichnessOfNature: "The richness of nature",
		portfolioFloralHarvest: "Floral harvest",
		portfolioKhalDrogo: "Khal Drogo",
		portfolioLovers: "Lovers",
		portfolioInnerElf: "The inner elf",
		portfolioVintageCoastCruise: "Vintage coast cruise",
		portfolioDancingQueen: "Dancing queen",
		portfolioGentleStillness: "Gentle stillness",
		portfolioEthiToys: "Ethi toys",
		portfolioMenezinhaPapercraft: "Menezinha papercraft",
		portfolioLoveWithPaws: "Love with paws",
		portfolioFaceConcepts: "Face concepts",
		portfolioVForVendetta: "V for vendetta",
		projectBackLabel: "Back"
	},
	ptbr: {
		copyrightStart: "Direitos Autorais",
		copyrightEnd: "Todos os direitos reservados",
		contactInformationCountry: "País",
		contactInformationCountryValue: "Países Baixos",
		contactInformationEmail: "Email",
		sendEmailNameLabel: "Nome",
		sendEmailEmailLabel: "Email",
		sendEmailMessageHeader: "Escreva sua mensagem...",
		sendEmailSubmitButtonLabel: "Enviar Mensagem",
		sendEmailSuccessMessage: "Sua mensagem foi enviada, obrigado!",
		sendEmailHeader: "Entre em Contato",
		sendEmailNameErrorMessage: "Por favor, insira seu nome",
		sendEmailEmailAddressErrorMessage: "Por favor, insira um endereço de e-mail válido",
		sendEmailMessageErrorMessage: "Por favor, insira uma mensagem",
		skillsHeader: "Minhas Habilidades",
		skillsTraditionalDesign: "Desenho Tradicional",
		skillsConceptArt: "Concept Art",
		skillsGraphicDesign: "Design Gráfico",
		skillsAnatomy: "Anatomia",
		skillsCartoonStyle: "Estilo cartoon",
		skillsTypography: "Tipografia",
		skillsLogoDesign: "Design de Logotipo",
		skillsVectorIllustration: "Ilustração Vetorial",
		skillsCharacterDesign: "Design de Personagens",
		skillsStopMotion: "Stop Motion",
		skillsMotionDesign: "Design de Movimento",
		skillsInkscape: "Inkscape",
		skillsAdobeIllustrator: "Adobe Illustrator",
		skillsAdobeInDesign: "Adobe InDesign",
		skillsAdobePhotoshop: "Adobe Photoshop",
		skillsKrita: "Krita",
		servicesHeader: "Meus Serviços",
		servicesCharacterDesignHeader: "Design de <br> Personagens",
		servicesCharacterDesignContent: "Criação de um personagem convincente e carismático. Mais do que apenas a aparência, seu personagem possui uma história.",
		servicesVectorIllustrationsHeader: "Ilustrações <br> Vetoriais",
		servicesVectorIllustrationsContent: "Ideal para designs nítidos, limpos e aplicações versáteis. Design simples e sofisticado.",
		servicesWatercolorIllustrationsHeader: "Ilustrações em <br> Aquarela",
		servicesWatercolorIllustrationsContent: "Artes fluidas com texturas orgânicas. Aparência expressiva e imprevisível.",
		servicesTraditionalIllustrationsHeader: "Ilustrações <br> Tradicionais",
		servicesTraditionalIllustrationsContent: "Obras de arte feitas à mão usando técnicas tradicionais, com autenticidade e charme nostálgico.",
		servicesSurfaceDesignHeader: "Design de <br> Superfície",
		servicesSurfaceDesignContent: "Criando padrões e designs para várias superfícies, de têxteis a papéis de parede, misturando arte com funcionalidade.",
		servicesBrandDesignHeader: "Mascote de <br> Marca",
		servicesBrandDesignContent: "Uma figura carismática e memorável para incorporar a identidade de uma marca, promovendo conexão e reconhecimento da marca.",
		aboutMeHeader: "Sobre mim",
		aboutMeContentHeader: "Vamos fazer algo incrível juntos?",
		aboutMeContent1: "Olá, meu nome é Darlene Menezes, tenho formação em Artes Visuais e estudei Design por dois anos. Sou apaixonada pela história da Arte, Design, Literatura, Natureza e Cultura. A pluralidade dos meus interesses me proporciona experimentar e produzir imagens com técnicas e estilos variados, sejam elas inspiradas em obras clássicas ou soluções modernas e simplificadas.",
		aboutMeContent2: "Mesclando a sensibilidade artística e a precisão do design, íntegro minhas referências de forma fluída ao meu trabalho. Estou sempre experimentando novas técnicas, explorando estilos e buscando novos desafios.. Adoraria dar vida às suas ideias com criatividade e precisão.",
		portfolioHeader: "Portfólio",
		portfolioFilterLabel: "Filtrar",
		portfolioFilterAllLabel: "Tudo",
		portfolioFilterIllustrationLabel: "Ilustração",
		portfolioFilterBrandingLabel: "Branding",
		portfolioFilterPaintingLabel: "Pintura",
		portfolioFilterVectorLabel: "Vetor",
		portfolioFilterWatercolorLabel: "Aquarela",
		portfolioFilterSketchLabel: "Esboço",
		portfolioFilterCrochetLabel: "Crochê",
		portfolioFilterOtherLabel: "Outro",
		homeMouseLabel: "Rolar",
		homeHeader: "Bem-vindo",
		homeSubHeader: "Sou uma artista versátil, domino diversas técnicas artísticas e adoro explorar novas possibilidades visuais sendo elas virtuais ou técnicas tradicionais.",
		navigationHomeLabel: "Inicial",
		navigationPortfolioLabel: "Portfólio",
		navigationAboutLabel: "Sobre",
		navigationServiceLabel: "Serviços",
		navigationSkillsLabel: "Habilidades",
		navigationContactLabel: "Contato",
		navigationMenuLabel: "Menu",
		navigationMenuCloseLabel: "Fechar",
		languageSwitcherDutch: "Holandês",
		languageSwitcherEnglish: "Inglês",
		languageSwitcherPortuguese: "Português",
		portfolioCategoryIllustration: "ilustração",
		portfolioCategoryVector: "vetor",
		portfolioCategoryPainting: "pintura",
		portfolioCategoryWatercolor: "aquarela",
		portfolioCategorySketch: "esboço",
		portfolioCategoryMarker: "marcador",
		portfolioCategorySoftPastel: "pastel seco",
		portfolioCategoryCrochet: "crochê",
		portfolioCategoryBranding: "branding",
		portfolioCategoryInk: "nanquim",
		portfolioProgrammerMonkey: "Macaco programador",
		portfolioVirtualIdentity: "Identidade virtual",
		portfolioStudyByReference: "Estudo por referência",
		portfolioBeersAndCompany: "Cervejas e afins",
		portfolioCartoonPortrait: "Retrato em cartoon",
		portfolioForestNymph: "Ninfa da floresta",
		portfolioForestDryad: "Dríade da floresta",
		portfolioMushrooms: "Cogumelos",
		portfolioPuppyDragon: "Dragão Cachorrinho",
		portfolioLoveInTheAir: "O amor está no ar",
		portfolioLoish: "Loish",
		portfolioStudyByReferenceDwarf: "Estudo por referência",
		portfolioMedievalAdventures: "Aventuras medievais",
		portfolioEmeraldCanopy: "Dossel esmeralda",
		portfolioCartoonPortraitSister: "Retrato em cartoon",
		portfolioMurloc: "Murloc",
		portfolioSelfPortrait: "Autorretrato",
		portfolioRubyVision: "Visão Rubi",
		portfolioIorubatheMagician: "Iorubá o mago",
		portfolioBlackForest: "Floresta negra",
		portfolioBlondeBeauty: "Beleza loira",
		portfolioMarilynMonroe: "Marilyn monroe",
		portfolioPaletteOfFlavors: "Uma paleta de sabores",
		portfolioRichnessOfNature: "A riqueza da natureza",
		portfolioFloralHarvest: "Colheita floral",
		portfolioKhalDrogo: "Khal drogo",
		portfolioLovers: "Amantes",
		portfolioInnerElf: "A elfa interior",
		portfolioVintageCoastCruise: "Cruzeiro pela costa vintage",
		portfolioDancingQueen: "Rainha da dança",
		portfolioGentleStillness: "Suave quietude",
		portfolioEthiToys: "Ethi toys",
		portfolioMenezinhaPapercraft: "Menezinha papercraft",
		portfolioLoveWithPaws: "Amor com patas",
		portfolioFaceConcepts: "Conceitos de rosto",
		portfolioVForVendetta: "V for vendetta",
		projectBackLabel: "Voltar"
	}
};

function toggleDropdown() {
	document.getElementById("dropdownMenu").style.display =
		document.getElementById("dropdownMenu").style.display === 'block'
			? 'none'
			: 'block';
}

function toggleDropdown2() {
	document.getElementById("dropdownMenu2").style.display =
		document.getElementById("dropdownMenu2").style.display === 'block'
			? 'none'
			: 'block';
}

// function selectLanguage(code, name, countryCode) {
// 	document.getElementById("selectedLang").textContent = name;
// 	document.getElementById("selectedFlag").src = `https://flagcdn.com/w40/${countryCode}.png`;
// 	document.getElementById("dropdownMenu").style.display = "none";
// 	// You can store or use 'code' as the selected language value
// 	console.log("Selected language code:", code);
// }

function setLanguage(code, name, countryCode) {
	document.getElementById("selectedFlag").src = `https://flagcdn.com/w40/${countryCode}.png`;
	document.getElementById("dropdownMenu").style.display = 'none';

	document.getElementById("selectedFlag2").src = `https://flagcdn.com/w40/${countryCode}.png`;
	document.getElementById("dropdownMenu2").style.display = 'none';

	const cookieName = 'lang_code';
	document.cookie = `${cookieName}=${code}; path=/`;

	updateContent(code)
}

document.addEventListener("click", function (e) {
	if (!document.getElementById("languageDropdown").contains(e.target)) {
		document.getElementById("dropdownMenu").style.display = 'none';
	}
	if (!document.getElementById("languageDropdown2").contains(e.target)) {
		document.getElementById("dropdownMenu2").style.display = 'none';
	}
})

window.addEventListener('scroll', function () {
	const dropdown = document.getElementById('dropdownMenu');
	if (dropdown) {
		dropdown.style.display = 'none';
	}
	const dropdown2 = document.getElementById('dropdownMenu2');
	if (dropdown2) {
		dropdown2.style.display = 'none';
	}
})

window.onload = function () {
	let savedLang = getLanguage();

	if (!savedLang) {
		savedLang = 'en';
	}

	const selectedFlag = document.getElementById("selectedFlag")
	const dropdownMenu = document.getElementById("dropdownMenu")
	if (selectedFlag && dropdownMenu) {
		let countryCode
		switch (savedLang) {
			case 'ptbr':
				countryCode = 'br'
				break;
			case 'en':
				countryCode = 'us'
				break;
			default:
				countryCode = savedLang
		}
		selectedFlag.src = `https://flagcdn.com/w40/${countryCode}.png`;
		dropdownMenu.style.display = 'none';
	}

	const selectedFlag2 = document.getElementById("selectedFlag2")
	const dropdownMenu2 = document.getElementById("dropdownMenu2")
	if (selectedFlag2 && dropdownMenu2) {
		let countryCode
		switch (savedLang) {
			case 'ptbr':
				countryCode = 'br'
				break;
			case 'en':
				countryCode = 'us'
				break;
			default:
				countryCode = savedLang
		}
		selectedFlag2.src = `https://flagcdn.com/w40/${countryCode}.png`;
		dropdownMenu2.style.display = 'none';
	}

	updateContent(savedLang);
}

// function createLanguageDropdown() {
// 	return `
//       <div class="dropdown d-none d-lg-block" id="languageDropdown">
//               <div class="dropdown-toggle" onclick="toggleDropdown()">
//                   <img src="https://flagcdn.com/w40/us.png" alt="Flag" id="selectedFlag">
//               </div>
//               <div class="dropdown-menu" id="dropdownMenu">
//                   <div onclick="setLanguage('nl', 'Dutch', 'nl')">
//                       <img src="https://flagcdn.com/w40/nl.png" alt=""> <span class="dutch" ></span>
//                   </div>
//                   <div onclick="setLanguage('en', 'English', 'us')">
//                       <img src="https://flagcdn.com/w40/us.png" alt=""> <span class="english"></span>
//                   </div>
//                   <div onclick="setLanguage('ptbr', 'Portuguese', 'br')">
//                       <img src="https://flagcdn.com/w40/br.png" alt=""> <span class="portuguese"></span>
//                   </div>
//               </div>
//           </div>
//     `;
// }
//
// document.querySelectorAll('.language-placeholder').forEach(el => {
// 	el.innerHTML = createLanguageDropdown();
// });
