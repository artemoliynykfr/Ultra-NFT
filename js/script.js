function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}	
testWebP(function (support) {	
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
// document
$(document).ready(function () {
	// header burger
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header, .header__form, .header__list, .header__button').toggleClass('active');
	});
	// review
	new Swiper(".auction__swiper .swiper-container", {
		direction: "horizontal",
		loop: !0,
		initialSlide: 0,
		speed: 1500,
		slidesPerView: 4,
		spaceBetween: 30,
		breakpoints: {
			1420:{
				slidesPerView: 4,
			},
			1050:{
				slidesPerView: 3,
			},
			700:{
				slidesPerView: 2,
			},
			0:{
				slidesPerView: 1,
			}
		},
		keyboard: {
			enabled: !0,
			onlyInViewport: !1
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
	   },
	})
});
$(document).ready(function () {
	$(function(){
		$(".picks__item").slice(0, 6).show();
		$("#load").click(function(e){
			e.preventDefault();
			$("div:hidden").slice(0, 9).show(); 
		});
	});
});
//
$(document).ready(function () {
	$('#dropdown1').click(function (event) {
		$('#dropdown1, #content1').toggleClass('active');
	});
	$('#dropdown2').click(function (event) {
		$('#dropdown2, #content2').toggleClass('active');
	});
	$('#dropdown3').click(function (event) {
		$('#dropdown3, #content3').toggleClass('active');
	});
	$('#dropdown4').click(function (event) {
		$('#dropdown4, #content4').toggleClass('active');
	});
	$('#dropdown5').click(function (event) {
		$('#dropdown5, #content5').toggleClass('active');
	});
	$('.filter__burger').click(function (event) {
		$('.filter__burger, .filter__items, .filter').toggleClass('active');
	});
})