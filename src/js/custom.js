/*
 * Third party
 */
	//jquery BEGIN
	//= ../libs/jquery/dist/jquery.min.js
	//jquery EOF

	//jquery BEGIN
	//= ../libs/slick-carousel/slick/slick.min.js
	//jquery EOF


	//prototype BEGIN
	//= prototype.js
	//prototype EOF
/*
* Custom
*/
/*$(window).load(function(){
	
});*/
/* viewport width */
var 
display=1200,tablet=992,phone=768 ;
function viewport(){
	var e = window, 
	a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }

};

/* viewport width */
/*
Все невинно начинается
*/
var gplayer =[];

$(function(){
	$('.top_slider').slick({
		accessibility: true,
		adaptiveHeight: false,
		appendArrows: $('.top_slider-btn'),
		appendDots: $('.top_slider-dots'),
		arrows: true,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"> <i class="icon-angle-circled-left"></i> </button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"> <i class="icon-angle-circled-right"></i> </button>',
		dots: true,
		customPaging: function(slider, i) {
			return '';
		},
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
	})
	$('.adv .container .row').slick({
		appendArrows: $('.adv .slider-btn'),
		appendDots: $('.adv .slider-dots'),
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"> <i class="icon-angle-circled-left"></i> </button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"> <i class="icon-angle-circled-right"></i> </button>',
		//autoplay: false,
		//autoplaySpeed: 3000,
		centerMode: false,
		centerPadding: '0px',
		cssEase: 'ease',
		customPaging: function(slider, i) {
			return '';
		},
		dots: false,
		swipeToSlide: true,
		slidesToShow: 4,
		responsive: [
		{
			breakpoint: display,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: tablet,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: phone,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	})
	$('.team_slider').slick({
		appendArrows: $('.team .slider-btn'),
		appendDots: $('.team .slider-dots'),
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"> <i class="icon-angle-circled-left"></i> </button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"> <i class="icon-angle-circled-right"></i> </button>',
		//autoplay: false,
		//autoplaySpeed: 3000,
		centerMode: false,
		centerPadding: '0px',
		cssEase: 'ease',
		customPaging: function(slider, i) {
			return '';
		},
		dots: true,
		swipeToSlide: true,
		slidesToShow: 4,
		responsive: [
		{
			breakpoint: display,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				
			}
		},
		{
			breakpoint: tablet,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: phone,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	})
	$('.galery_slider').slick({
		appendArrows: $('.galery .slider-btn'),
		appendDots: $('.galery .slider-dots'),
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"> <i class="icon-angle-circled-left"></i> </button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"> <i class="icon-angle-circled-right"></i> </button>',
		//autoplay: false,
		//autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: '0px',
		cssEase: 'ease',
		customPaging: function(slider, i) {
			return '';
		},
		dots: true,
		swipeToSlide: true,
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: display,
			settings: {
				
			}
		},
		{
			breakpoint: tablet,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: phone,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	var rev =$('.rev_slider');
	rev.on('init', function(event, slick,currentSlide){
		console.log('init')
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log('beforeChange')
	}).on('swipe',function(event, slick, currentSlide, nextSlide){
		console.log('swipe')
	}).on('swipeEnd',function(event, slick, currentSlide, nextSlide){
		console.log('swipeEnd')
	}).on('swipeMove',function(event, slick, currentSlide, nextSlide){
		console.log('swipeMove')
	}).on('swipeStart',function(event, slick, currentSlide, nextSlide){
		console.log('swipeStart')
	});

	
	
	
	rev.slick({
		arrows: false,
		centerMode: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '20%',
		responsive: [
		{
			breakpoint: display,
			settings: {
				
			}
		},
		{
			breakpoint: tablet,
			settings: {
				
			}
		},
		{
			breakpoint: phone,
			settings: {
				
			}
		}]
	});
	
	$('.nap_slider').slick({
		arrows: false,
		asNavFor: $('.nap_dotsslider'),
		cssEase: 'ease',
		customPaging: function(slider, i) {
			i++;
			i = (i+1 < 10) ? '0' + i.toString() : i.toString();
			$('.nap_dotsslider').html($('.nap_dotsslider').html()+'<div class="nap_dotsslider-slide">'+(i)+'</div>');
			return  '';
		},
		dots: true,
		vertical: true,
		verticalSwiping: true,
	})
	$('.nap_dotsslider').slick({
		arrows: true,
		asNavFor: $('.nap_slider'),
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"> <img src="../img/arw_up.png" alt="" /> </button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"> <img src="../img/arw_dwn.png" alt="" /> </button>',
		autoplay: false,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: '0px',
		cssEase: 'ease',
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		touchMove: true,
		vertical: true,
		verticalSwiping: true,
		waitForAnimate: true,
	})
	$('.vslider-slick').slick({
		arrows: true,
		centerMode: true,
		centerPadding: '150px',
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: false,
		vertical: true,
		verticalSwiping: true,
		useTransform:false,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"> <img src="../img/arw_up.png" alt="" /> </button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"> <img src="../img/arw_dwn.png" alt="" /> </button>',
		responsive: [
		{
			breakpoint: display,
			settings: {
				centerPadding:'100px',
			}
		},
		{
			breakpoint: tablet,
			settings: {
				centerPadding:'50px',
			}
		},
		{
			breakpoint:phone,
			settings: {
				centerPadding:'0px',
			}
		}
		]
	})
	$('.header_btn').click(function(event) {
		$(this).toggleClass('active');
		$('.header_bcont-list').toggleClass('active');
	});
	/*

	Я тут сделал динамический слайдер, идея такова у слика есть возможность добавлять слайды, 
	а у нас тут куча видосов, которые не хорошо сразу подгружать... 
	вот я и начал думать о том как бы сделать так, чтобы подгрузать видосы 
	только тогда когда к ним обратятся, да еще и при этом не перегружать слайдер по 100 раз.
	Итак ниже будет описания всему этому аду

	*/
	$('.hor-large').slick({
		asNavFor: $('.hor-min'),
		infinite:false,
		arrows:false,
		/*
		тут просто по дефолту обьявляем слайдер
		*/
	})


	/*
	Все ниже перечисленные методы для '.hor-min' должны быть обьявлены до того как обьявится сам слайдер 
	https://github.com/kenwheeler/slick/issues/1005
	*/


	$('.hor-min').on('init', function(event, slick,currentSlide){
		/*
		выстреливает после того как слайдер подгрузился.
		я хотел сразу добовлять видос тут, но нельзя так как метод срабатывает до того как 
		/www.youtube.com/iframe_api подгружается, а значит нам нужно первый видос подгружать после загрузки все страници
		в методе mready;

		Значит просто добавим слайд
		*/
		var id = 'lslide-'+slick.options.initialSlide, obj = '<div> <img src="img/vgal-samp.jpg" class="sample" alt="" /> <div  id="'+id+'" class="yvid"></div> </div>';
		$('.hor-large').slick('slickAdd',obj); 
		/*метод который просто добавляет слайд в слайдер*/
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		/*
		Эта проверочка нужна для того чтобы выключать видео которое сейчас играет перед тем
		как переключить слайд. Но метод stopVideo может не отработать так как если юзер нажмет два раза на 
		кнопку next и видос не успеет прогрузится - выйдет ошибка 
		Я долго искал как проверять есть ли там у нас обьект или нет, единственное что я нашел это проверить "A"
		*/
		if(gplayer[currentSlide].A){
			gplayer[currentSlide].stopVideo();
		}
		/*
		Проверяем, есть ли у нас уже такое видео, чтобы не добовлять одно и тоже видео в слайдер. С начало я хотел проверять 
		по id сладера large? но потом подумал что могу просто добвлять классы yt-done и проверять их наличие 
		*/
		if(!$(slick.$slides[nextSlide]).hasClass('yt-done')){
			/*создание слайда*/
			var id = 'lslide-'+nextSlide, obj = '<div> <img src="img/vgal-samp.jpg" class="sample" alt="" /> <div  id="'+id+'" class="yvid"></div> </div>';
			/*запись слайда*/
			$('.hor-large').slick('slickAdd',obj);
			/*запиливаем видос и вносим в массив видеозаписей*/
			gplayer.push($(slick.$slides[nextSlide]).find('[data-yid]').myoutube(id));
			/*добавляем класс для проверки */
			$(slick.$slides[nextSlide]).addClass('yt-done');
		}
		$('.hor-large').slick('slickGoTo',nextSlide);
	})
	$('.hor-min').slick({
		appendArrows: $('.hor-min_cont'),
		arrows: true,
		asNavFor: $('.hor-large'),
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"> <img src="img/arw_left.png" alt="" /> </button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"> <img src="img/arw_right.png" alt="" /> </button>',
		autoplay: false,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: '90px',
			/*onInit: function() {

			},*/
			responsive: [
			{
				breakpoint: display,
				settings: {

				}
			},
			{
				breakpoint: tablet,
				settings: {

				}
			},
			{
				breakpoint: phone,
				settings: {

				}
			}]
		})

	$('.js-popup').click(function(event) {
		$('.popup').toggleClass('active');
		$(this).toggleClass('active');
	});
	$('.popup').click(function(event) {
		var r = $(this).closest( event.target).length;
		if(r){
			$('.popup').toggleClass('active');
			$('.js-popup.active').removeClass('active');
		}
	});

	$('.footer_btn').click(function(event) {
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$('#footerhidder').show('300');
		}
		else
		{
			$('#footerhidder').hide('300');
		}
	});
	$('.galery_el').click(function(event) {
		var src = this.dataset.large || ($(this).find('[data-large]')[0]?$(this).find('[data-large]')[0].dataset.large : false);
		console.log(this)
		if(src)
		{
			$('.galery-popup').addClass('active');
			var img = document.createElement('img');
			img.src = src;
			$('.galery-popup img')[0].src = img.src;
		}
		else
		{
			$(this).addClass('noimg');
		}
	});
	$('.galery-popup').click(function(event) {
		/* Act on the event */
		var index = $('.galery-popup').closest(event.target).index();
		console.log(index);
		if(index>0){
			$('.galery-popup').removeClass('active')
			$('.galery-popup img')[0].src='../img/loader.gif';
		}
	});
});

var handler = function(){
	var height_footer = $('footer').innerHeight()	
	var height_header = $('header').innerHeight()
	$('.js-padboth').css({'padding-bottom':height_footer, 'padding-top':height_header});
	$('.js-padtop').css({'padding-top':height_header});
	$('.js-padbott').css({'padding-bottom':height_footer});
	var viewport_wid = viewport().width;
	if (viewport_wid <= 991) {
	}
}
var mload = function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 

	var r = $('.hor-min').slick('getSlick'); 
	/*
	Загрузка первого слайда в hor-large.
	на все про все затрачен весь день .... пздц;
	*/
	if($('.sl')[0])
	{
		gplayer.push($(r.$slides[r.currentSlide]).find('[data-yid]').myoutube('lslide-0'));
		$(r.$slides[r.currentSlide]).addClass('yt-done');
	}
	mresize();
	mscroll();
}
var mresize = function(){
	handler();
	$('.vslider_slide').height('auto');
	$('.vslider_slide').height($('.vslider_slide').rmax());
	/*if(viewport().width<=phone)
		{$('.header').css('padding-top',$('.header_lcont').height())}
	else{
		$('.header').css('padding-top',0)
	}*/

}
var mscroll = function(){
	$('[data-dadd].unload').each(function(index, el) {
		if($(this).isrich(window.innerHeight+window.pageYOffset)){
			$(this).dadd();
		}
	});
	if($('.gmap').isrich(window.innerHeight+window.pageYOffset) && $('.gmap').hasClass('unload')){
		$('.gmap').gmap({
			coords :[ {
				lat:46.391073,lan:30.740716,infowindow:'ул. Семена Яхненка, 14'
			}],
			icon:{
				url:'../img/logo_akdet.png',
				scaledSize:new google.maps.Size(245, 132),
				anchor: new google.maps.Point(122, 67),
			}
		});
		$('.gmap').removeClass('unload');
	}
}
$(window).bind('load', mload);
$(window).bind('resize', mresize);
$(window).bind('scroll', mscroll);