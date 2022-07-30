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
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
// header burger
function burgerMenu() {
	const burger = document.querySelector('.header__burger')
	const menu = document.querySelector('.header__menu')
	const form = document.querySelector('.header__form')
	const list = document.querySelector('.header__list')
	const button = document.querySelector('.header__button')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			list.classList.add('active')
			button.classList.add('active')
			form.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			button.classList.remove('active')
			form.classList.remove('active')
			body.classList.remove('locked')
			list.classList.remove('active')
		}
	})
}
burgerMenu();
function fixedNav() {
	const nav = document.querySelector('.header')
	const breakpoint = 1
	if (window.scrollY > breakpoint) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)
// review
if (document.querySelector('.body__home')) {
	new Swiper(".auction__swiper .swiper-container", {
		direction: "horizontal",
		loop: !0,
		initialSlide: 0,
		speed: 1500,
		slidesPerView: 4,
		spaceBetween: 30,
		breakpoints: {
			1500: {
				slidesPerView: 4,
			},
			1170: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			0: {
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
}
// load more
let wrapper = document.querySelectorAll('.picks__item')
let button = document.querySelector('#load')
let current = 3;
button.addEventListener('click', function (e) {
	for (let i = current; i < current + 3; i++) {
		if (wrapper[i]) {
			wrapper[i].style.display = 'block'
		}
	}
	current += 3;
})
// dropdown
if (document.querySelector('.body__explore')) {
	let dropdowns = document.querySelectorAll('.dropdown')
	for (let i = 0; i < dropdowns.length; i++) {
		let dropdown = dropdowns[i]
		let tablink = dropdown.querySelector('.dropdown__button');
		let tabcontent = dropdown.querySelector('.dropdown__items');
		tablink.addEventListener('click', () => {
			if (tabcontent.classList.contains('active')) {
				tabcontent.classList.remove('active')
				tablink.classList.remove('active')
			} else {
				tabcontent.classList.add('active')
				tablink.classList.add('active')
			}
		})
	}

	function burgerMenu() {
		const burger = document.querySelector('.filter__burger')
		const menu = document.querySelector('.filter__items')
		burger.addEventListener('click', () => {
			if (!menu.classList.contains('active')) {
				menu.classList.add('active')
				burger.classList.add('active')
			} else {
				menu.classList.remove('active')
				burger.classList.remove('active')
			}
		})
	}
	burgerMenu();
}
