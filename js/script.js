$(function(){
	// popup
	$('.header-contacts__button').on("click", function(){
		$(".overlay").show()
    document.body.style.overflow = 'hidden';
	});
	$('.popup-close').on("click", function(){
		$(".overlay").hide()
	});
  $('.overlay-bg').on("click", function(){
    $(".overlay").hide()
    document.body.style.overflow = 'visible';
  });

	// manufacture
	// $('.manufacture-img__slider').slick({
	// 	infinite: false,
 //  slidesToShow: 4,
 //  slidesToScroll: 1,
	// });
	 $('.manufacture-img__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.manufacture-img__slider'
});
	$('.manufacture-img__slider').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	asNavFor: '.manufacture-img__big',
  	dots: false,
  	centerMode: false,
  	focusOnSelect: true,
  	responsive: [
  	    {
  	      breakpoint: 576,
  	      settings: {
  	        slidesToShow: 1,
  	        slidesToScroll: 1
  	      }
  	    }
  	  ]
	});

	//reviews
	$('.reviews-slider').slick({
			infinite: false,	
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	      {
	        breakpoint: 576,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	});

	var link = $('.menu-link');
	
	link.click(function(){
		link.toggleClass('menu-link__active');
	});

});

// map
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/contacts/maps.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -40]
        });

    myMap.geoObjects
        .add(myPlacemark);
  // mask
  $('.form-contacts__input').mask("+7 (999) 999 - 99 - 99");

  $('.popup-form__input').mask("+7 (999) 999 - 99 - 99");

  $('.offer-form__input').mask("+7 (999) 999 - 99 - 99");
  // production-popup

  $('.productions-buttons__one').on("click", function(){
    $('.productions-popup').show()
    $('.popup-one').show()
    document.body.style.overflow = 'hidden';
  });
  $('.productions-popup').on("click", function(){
    document.body.style.overflow = 'visible';
    $('.productions-popup').hide()
    $('.popup-one').hide()
  });

  $('.productions-buttons__two').on("click", function(){
    $('.productions-popup').show()
    $('.popup-two').show()
    document.body.style.overflow = 'hidden';
  });
  $('.productions-popup').on("click", function(){
    document.body.style.overflow = 'visible';
    $('.productions-popup').hide()
    $('.popup-two').hide()
  });

  $('.productions-buttons__three').on("click", function(){
    $('.productions-popup').show()
    $('.popup-three').show()
    document.body.style.overflow = 'hidden';
  });
  $('.productions-popup').on("click", function(){
    document.body.style.overflow = 'visible';
    $('.productions-popup').hide()
    $('.popup-three').hide()
  });

  $('.productions-buttons__four').on("click", function(){
    $('.productions-popup').show()
    $('.popup-four').show()
    document.body.style.overflow = 'hidden';
  });
  $('.productions-popup').on("click", function(){
    document.body.style.overflow = 'visible';
    $('.productions-popup').hide()
    $('.popup-four').hide()
  });

});