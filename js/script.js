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
// header burger
function burger(){
	let header__burger = document.querySelector('.header__burger'),
		 header__menu = document.querySelector('.header__menu'),
		 header__form = document.querySelector('.header__form'),
		 header__list = document.querySelector('.header__list'),
		 header__button = document.querySelector('.header__button'),
		 header = document.querySelector('.header');
	header__burger.addEventListener('click', function(){
		if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active') || header__form.classList.contains('active'), header__list.classList.contains('active'), header__button.classList.contains('active')){
			header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active') || header__form.classList.remove('active'), header__list.classList.remove('active'), header__button.classList.remove('active')
		} else {
			header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active') || header__form.classList.add('active'), header__list.classList.add('active'), header__button.classList.add('active')
		}
	})
}
burger();
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
// load more
let wrapper = document.querySelectorAll('.picks__item')
let button = document.querySelector('#load')
let current = 3;
button.addEventListener('click', function(e) {
	for (let i = current; i < current + 3; i++){
		if (wrapper[i]){
			wrapper[i].style.display = 'block'
		}
	}
	current += 3;
})
// dropdown
let dropdown1 = document.querySelector('#dropdown1')
let dropdown2 = document.querySelector('#dropdown2')
let dropdown3 = document.querySelector('#dropdown3')
let dropdown4 = document.querySelector('#dropdown4')
let dropdown5 = document.querySelector('#dropdown5')
let content1 = document.querySelector('#content1')
let content2 = document.querySelector('#content2')
let content3 = document.querySelector('#content3')
let content4 = document.querySelector('#content4')
let content5 = document.querySelector('#content5')
let filter__burger = document.querySelector('.filter__burger')
let filter__items = document.querySelector('.filter__items')
let filter = document.querySelector('.filter')
dropdown1.onclick = function(){
	if (dropdown1.classList.contains('active') || content1.classList.contains('active')){
		dropdown1.classList.remove('active') || content1.classList.remove('active')
	} else {
		dropdown1.classList.add('active') || content1.classList.add('active')
	}
}
dropdown2.onclick = function(){
	if (dropdown2.classList.contains('active') || content2.classList.contains('active')){
		dropdown2.classList.remove('active') || content2.classList.remove('active')
	} else {
		dropdown2.classList.add('active') || content2.classList.add('active')
	}
}
dropdown3.onclick = function(){
	if (dropdown3.classList.contains('active') || content3.classList.contains('active')){
		dropdown3.classList.remove('active') || content3.classList.remove('active')
	} else {
		dropdown3.classList.add('active') || content3.classList.add('active')
	}
}
dropdown4.onclick = function(){
	if (dropdown4.classList.contains('active') || content4.classList.contains('active')){
		dropdown4.classList.remove('active') || content4.classList.remove('active')
	} else {
		dropdown4.classList.add('active') || content4.classList.add('active')
	}
}
dropdown5.onclick = function(){
	if (dropdown5.classList.contains('active') || content5.classList.contains('active')){
		dropdown5.classList.remove('active') || content5.classList.remove('active')
	} else {
		dropdown5.classList.add('active') || content5.classList.add('active')
	}
}
filter__burger.onclick = function(){
	if (filter__burger.classList.contains('active') || filter__items.classList.contains('active') || filter.classList.contains('active')){
		filter__burger.classList.remove('active') || filter__items.classList.remove('active') || filter.classList.remove('active')
	} else {
		filter__burger.classList.add('active') || filter__items.classList.add('active') || filter.classList.add('active')
	}
}