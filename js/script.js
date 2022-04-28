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
function burger() {
	let header__burger = document.querySelector('.header__burger'),
		header__menu = document.querySelector('.header__menu'),
		header__form = document.querySelector('.header__form'),
		header__list = document.querySelector('.header__list'),
		header__button = document.querySelector('.header__button'),
		header = document.querySelector('.header');
	header__burger.addEventListener('click', function () {
		if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active') || header__form.classList.contains('active'), header__list.classList.contains('active'), header__button.classList.contains('active')) {
			header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active') || header__form.classList.remove('active'), header__list.classList.remove('active'), header__button.classList.remove('active')
		} else {
			header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active') || header__form.classList.add('active'), header__list.classList.add('active'), header__button.classList.add('active')
		}
	})
}
burger();
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
			1420: {
				slidesPerView: 4,
			},
			1050: {
				slidesPerView: 3,
			},
			700: {
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
//
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
   );
};
const elementOutofView = (el) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
   );
};
const displayScrollElement = (element) => {
   element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
   element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
   scrollElements.forEach((el) => {
      if (elementInView(el, 1)) {
         displayScrollElement(el)
      } else if (elementOutofView(el)) {
         hideScrollElement(el)
      }
   })
}
window.addEventListener("scroll", () => {
   handleScrollAnimation();
});

// dropdown
if (document.querySelector('.body__explore')) {
	function openTab(evt, tabName) {
		let i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName('dropdown__items');
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName('dropdown__button');
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(tabName).style.display = "flex";
		evt.currentTarget.className += " active";
	}

	function burger() {
		let header__burger = document.querySelector('.filter__burger'),
			header__menu = document.querySelector('.filter__items');
		header__burger.addEventListener('click', function () {
			if (header__burger.classList.contains('active'), header__menu.classList.contains('active')) {
				header__burger.classList.remove('active') || header__menu.classList.remove('active')
			} else {
				header__burger.classList.add('active') || header__menu.classList.add('active')
			}
		})
	}
	burger();
}
